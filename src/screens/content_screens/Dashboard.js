import { SafeAreaView,View, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native'
import {useEffect, useState, useContext} from 'react'
import Header from '../../components/header'
import EvaluationGuide from '../../components/DashboardView/EvaluationGuide'
import Summary from '../../components/DashboardView/Summary'
import Evaluation from '../../components/DashboardView/Evaluation'
import ContentContext from '../../context/ContentContext'
import AuthContext from '../../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Dashboard = () => {



  const {user} = useContext(AuthContext)
  const {updateRecommended, setCalories, calories} = useContext(ContentContext)
  
  useEffect(() => {
    updateRecommended(user.age, user.gender)
    AsyncStorage.getItem('calories')
    .then((rcalories)=> {
        if(rcalories) { 
          let recoCalories = JSON.parse(rcalories)
          setCalories({...calories, recommended: recoCalories})
        } else {
          console.log('NO CALORIES')
        }
    }).catch((error) => {
        console.log(error)
    })  
  }, [])

  const [showSummary, setShowSummary] = useState(true)
  const [showEvaluation, setShowEvaluation] = useState(false)

  const toggleSummary = () => {
    setShowEvaluation(false)
    setShowSummary(true)
  }

  const toggleEvaluation = () => {
    setShowSummary(false)
    setShowEvaluation(true)
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Header/>
      <View style={styles.performanceContainer}>
        <View style={styles.title}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Your Dietary Evaluation Guide</Text>
        </View>

        {/* Evaluation Graph */}
        <EvaluationGuide />

      </View>

      {/* Navigation */}

      <View style={styles.navBar}>
        <TouchableOpacity style={[styles.navBtn, {backgroundColor: showSummary ? '#0CA036' : '#FFF'}]}
          onPress={toggleSummary}
        >
          <Text style={[styles.navText, {color: showSummary ? '#FFF' : '#0CA036'}]}>Summary</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navBtn, {backgroundColor: showEvaluation ? '#0CA036' : '#FFF'}]}
          onPress={toggleEvaluation}
        >
          <Text style={[styles.navText, {color: showEvaluation ? '#FFF' : '#0CA036'}]}>Evaluation</Text>
        </TouchableOpacity>
      </View>

      {/* Summary Tab */}

      { showSummary && 
        <Summary />
      }

      {/* Evaluation Tab */}

      {
        showEvaluation && 

        <Evaluation />
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 25, 
  },

  navBar: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
    shadowColor: '#bbb',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.8,
  },

  navBtn: {
    width: '50%',
    borderColor: '#0CA036',
    backgroundColor: '#fff',
    borderWidth: 2,
    paddingVertical: 7,
    marginHorizontal: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  navText: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },

  performanceContainer: {
    height: 100,
    width: '100%',
    paddingVertical: 5,
    backgroundColor: '#ddd'
  }, 
 
  
})
export default Dashboard