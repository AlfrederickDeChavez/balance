import { useRef, useState } from 'react'
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Dimensions, Text, ScrollView} from 'react-native'
import Header from '../../components/header'
import { achievements } from '../../database/achievements'
import { MaterialCommunityIcons, Ionicons, MaterialIcons } from '@expo/vector-icons'
// import { goals } from '../../database/goals'
import RBSheet from 'react-native-raw-bottom-sheet';
import AddGoal from '../../components/AddGoal'


const Plan = () => {

  const addGoalRef = useRef()

  const [goals, setGoals] = useState([])

  return (
    <SafeAreaView>
      <Header/>
      <View style={styles.container}>
        <View style={styles.achievementView}>
          <Text style={styles.achievementTitle}>Achievements</Text>
          <View style={styles.emptyView}>
              <MaterialIcons name='filter-none' size={30} color='#aaa'></MaterialIcons>
              <Text style={{fontSize: 18, color: '#aaa', marginTop: 5}}>No achievements yet</Text>
          </View>
          {/* {
            achievements.map((a, index) => {
              return (
                <View key={index} style={styles.achievementBox}>
                  <MaterialCommunityIcons name={a.icon} style={styles.achievementIcon}/>
                  <Text style={styles.achievementText}>{a.title}</Text>
                </View>
              )
            })
          } */}
        </View>
        <View style={styles.goalsView}>
          <Text style={styles.goalsTitle}>Daily Goals</Text>
          {
            goals < 1 ? 

            <View style={styles.emptyView}>
              <MaterialIcons name='filter-none' size={30} color='#aaa'></MaterialIcons>
              <Text style={{fontSize: 18, color: '#aaa', marginTop: 5}}>No goals yet</Text>
            </View> : 
          <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.goalList}
          >
          
          {
            goals.map((goal, index) => {
              return (
                <View key={index} style={styles.goalBox}>
                  <Text style={styles.goalText}>{goal}</Text>
                </View>
              )
            })
          } 
          <View style={{width: 35}}></View>
          </ScrollView>
          }
        </View>
        
      </View>
      <TouchableOpacity 
        style={styles.addGoalBtn}
        onPress={() => addGoalRef.current.open()}
      >
          <Ionicons name='add-circle' color='green' size={20}/>
          <Text style={styles.addGoalText}>ADD GOAL</Text>
      </TouchableOpacity>
      <RBSheet
        ref={addGoalRef}
        closeOnDragDown={true}
        height={screenHeight - 50}
        customStyles={{
          container: {
            backgroundColor: '#0CA036',
          },
          draggableIcon: {
            backgroundColor: 'green'
          }
        }}
      >
        <AddGoal goals={goals} setGoals={setGoals}/>
      </RBSheet>
    </SafeAreaView>
  )
}

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: screenWidth,
    height: screenHeight,
  },
  achievementView: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },

  achievementTitle: {
    fontSize: 20,
    fontWeight: 'bold'  
  },

  goalsView: {
    marginVertical: 10,
  },

  emptyView: {
    width: screenWidth,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  achievementBox: {
    width: '100%',
    backgroundColor: '#0CA036',
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row'
  },

  achievementText: {
    color: '#fff',
    marginLeft: 10,
  },
  achievementIcon: {
    color: '#fff',
    fontSize: 20,
  },

  goalList: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },

  goalsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20
  },

  goalBox: {
    width: 120,
    height: 100,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#0CA'
  },

  goalText: {
    color: '#0CA',
    textAlign: 'center'
  },

  addGoalBtn: {
    position: 'absolute',
    top: screenHeight - 120,
    width: screenWidth - 100,
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },

  addGoalText: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
})

export default Plan