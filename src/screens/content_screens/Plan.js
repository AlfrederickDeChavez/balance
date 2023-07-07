import { useRef, useState, useEffect} from 'react'
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Dimensions, Text, ScrollView, StatusBar} from 'react-native'
import Header from '../../components/header'
import { MaterialCommunityIcons, Ionicons, MaterialIcons } from '@expo/vector-icons'
import RBSheet from 'react-native-raw-bottom-sheet';
import AddGoal from '../../components/AddGoal'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Plan = () => {

  const addGoalRef = useRef()

  

  useEffect(() => {
    const date = new Date().toLocaleDateString()
    AsyncStorage.getItem('goals').then((goals) => {
      if(goals) {
      
        const activeGoals = JSON.parse(goals).filter((goal) => goal.date == date)
        setGoals(activeGoals)

      } else {
        setGoals([])
      }
    }).catch((err) => {
      console.log(err)
    })

    AsyncStorage.getItem('achievements').then((achievements) => {
      if(achievements) {
        const activeAchievements = JSON.parse(achievements).filter((achievement) => achievement.date == date)
        setAchievements(activeAchievements)
      }else {
        setAchievements([])
      }
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  
  const [goals, setGoals] = useState([])
  const [achievements, setAchievements] = useState([])

  const finishGoal = (id) => {
    const achievement = goals[id]
    setAchievements([achievement, ...achievements])
    goals.splice(id)
    AsyncStorage.setItem('achievements', JSON.stringify([achievement, ...achievements]))
    AsyncStorage.setItem('goals', JSON.stringify(goals.splice(id)))
  } 

  const deleteGoal = (id) => {
    const newGoals = goals.filter((goal) => goal !== goals[id])
    setGoals(newGoals)
    AsyncStorage.setItem('goals', JSON.stringify(newGoals))
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Header/>
      <View style={styles.container}>
        <View style={styles.achievementView}>
          <Text style={styles.achievementTitle}>Achievements</Text>

          {
            achievements.length < 1 ? 

            <View style={[styles.emptyView, {alignSelf: 'center', height: '30%'}]}>
                <MaterialIcons name='filter-none' size={30} color='#aaa'></MaterialIcons>
                <Text style={{fontSize: 18, color: '#aaa', marginTop: 5}}>No achievements yet</Text>
            </View> : 

            <ScrollView style={styles.achievementScroll} showsVerticalScrollIndicator={false}>
              {
              achievements.map((achievement, index) => {
                return (
                  <View key={index} style={styles.achievementBox}>
                    <Ionicons name='flag-sharp' style={styles.achievementIcon}/>
                    <Text style={styles.achievementText}>{achievement.goal}</Text>
                  </View>
                )
              })
              }
            </ScrollView>
          }
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
                    <MaterialCommunityIcons name='target' style={styles.target}/>
                    <Text style={styles.goalText}>{goal.goal}</Text>
                    <View style={styles.goalBtnControl}>
                      <TouchableOpacity style={[styles.goalBtn, {backgroundColor: 'red'}]}
                        onPress={() => deleteGoal(index)}
                      >
                        <Ionicons name='trash' color='#fff' size={20}/>
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.goalBtn, {backgroundColor: '#0CA036'}]}
                        onPress={() => finishGoal(index)}
                      >
                        <Ionicons name='flag' color='#fff' size={20}/>
                      </TouchableOpacity>
                    </View>
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
    width: screenWidth,
  },

  achievementTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,   
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

  achievementScroll: {
    height: '30%',
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
    minWidth: 120,
    minHeight: 100,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#0CA'
  },

  target: {
    fontSize: 30, 
    fontWeight: '500',
    color: '#0CA',
    margin: 8,
  },

  goalText: {
    color: '#0CA',
    textAlign: 'center'
  },

  goalBtn: {
    minWidth: 40,
    minHeight: 40,
    padding: 8,
    borderRadius: 2,
    marginHorizontal: 5,
    marginTop: 10,
  },

  goalBtnControl: {
    flexDirection: 'row'
  },

  addGoalBtn: {
    position: 'absolute',
    top: screenHeight - 140,
    width: screenWidth - 100,
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
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