import { SafeAreaView,View, Text, ScrollView, StyleSheet, StatusBar} from 'react-native'
import React from 'react'
import Header from '../../components/header'
import { macronutrients , vitamins} from '../../database/nutrients'
import ProgressGraph from '../../components/ProgressGraph'

const Dashboard = () => {



  return (
    <SafeAreaView>
      <StatusBar/>
      <Header/>
      <ScrollView style={{marginBottom: 60, backgroundColor: '#ddd'}}>
        <View style={styles.performanceContainer}>
          <View style={styles.title}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Your Performance</Text>
          </View>
          <View style={styles.performanceBox}>

          </View>
        </View>
        <View style={styles.macronutrientsContainer}>
          <View style={styles.title}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Macronutrients</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            macronutrients.map((macronutrient, index) => {
              return (
                <View key={index} style={styles.macronutrientBox}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>{macronutrient.name}</Text>
                    {/* Graph */}
                    <ProgressGraph recommended={macronutrient.recommended}/>
                    <Text style={{color: '#fff'}}>Recommended: {macronutrient.recommended}</Text>

                </View>
              )
            })
          }
          <View style={{width: 40}}></View>
          </ScrollView>
        </View>

        <View style={styles.macronutrientsContainer}>
          <View style={styles.title}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Vitamins</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} bounces={true}>
          {
            vitamins.map((vitamin, index) => {
              return (
                <View key={index} style={styles.vitaminsBox}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>{vitamin.name}</Text>
                  
                  {/* Graph */}
                  <ProgressGraph recommended={vitamin.recommended}/>
                  <Text style={{color: '#fff'}}>Recommended: {vitamin.recommended}</Text>

                </View>
              )
            })
          }
          <View style={{width: 40}}></View>
          </ScrollView>
        </View>

        <View style={styles.macronutrientsContainer}>
          <View style={styles.title}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Minerals</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            macronutrients.map((macronutrient, index) => {
              return (
                <View key={index} style={styles.mineralsBox}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>{macronutrient.name}</Text>
                  {/* Graph */}
                  <ProgressGraph recommended={macronutrient.recommended}/>
                  <Text style={{color: '#fff'}}>Recommended: {macronutrient.recommended}</Text>
                </View>
              )
            })
          }
          <View style={{width: 40}}></View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  performanceContainer: {
    height: 200,
    width: '100%',
    paddingVertical: 5,
    paddingRight: 20,
  }, 

  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 25, 
  },

  performanceBox: {
    width: '93%',
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 10,
    marginLeft: 25,
    marginTop: 10,
    shadowColor: '#ccc',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.8,
  },
  macronutrientsContainer: {
    height: 200,
    width: '100%',
    paddingVertical: 5,
  }, 
  macronutrientBox: {
    backgroundColor: '#B46ED2',
    width: 250,
    height: 150, 
    margin: 5,
    padding: 15,
    right: 20,
    left: 20,
    borderRadius: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.8,
  }, 

  vitaminsBox: {
    backgroundColor: '#0CA',
    width: 250,
    height: 150, 
    margin: 5,
    padding: 15,
    right: 20,
    left: 20,
    borderRadius: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.8,
  }, 

  mineralsBox: {
    backgroundColor: '#006DB2',
    width: 250,
    height: 150, 
    margin: 5,
    padding: 15,
    right: 20,
    left: 20,
    borderRadius: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.8,
  }, 
  
  
})
export default Dashboard