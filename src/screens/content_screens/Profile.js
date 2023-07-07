import { SafeAreaView, View, Text , StyleSheet, TouchableOpacity,TextInput, StatusBar, Dimensions, Keyboard, TouchableWithoutFeedback} from 'react-native'
import {useContext, useRef, useState, useEffect} from 'react'
import AuthContext from '../../context/AuthContext'
import ContentContext from '../../context/ContentContext';
import RBSheet from 'react-native-raw-bottom-sheet';
import EditProfile from '../../components/EditProfile';
import SignOut from '../../components/SignOut';
import { MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import { calculateBMR, calculateTDEE } from '../../functions/TDEE';
import TargetWeight from '../../components/TargetWeight';


const Profile = () => {

  useEffect(() => {
    let BMR = calculateBMR(user.gender, user.weight, user.height, user.age)
    setBmr(BMR)
  }, [])

  const {user} = useContext(AuthContext)
  const {calories} = useContext(ContentContext)
  const [bmr, setBmr] = useState(0)
  const [visible, setVisible] = useState(false)
  const [targetWeight, setTargetWeight] = useState()
  const [tdee, setTdee] = useState(0)
  const [selected, setSelected] = useState(false)
  const [rcalorie, setRcalorie] = useState(0)
  const [week, setWeek] = useState(1)
  const [showRecommended, setShowRecommended] = useState(false)

  const updateProfileRef = useRef()
  const screenHeight = Dimensions.get('window').height

  const [showPlan, setShowPlan] = useState(false)
  const activities = [
    'Sedentary (little to no exercise)',
    'Lightly Active (light exercise 1-3 days / week)',
    'Moderately Active (moderate exercise 3-5 days / week)',
    'Very Active (heavy exercise 6-7 days / week)',
    'Extremely Active (very heavy exercise)'
  ]

  const getTDEE = (activity) => {
    let t_dee = calculateTDEE(bmr, activity)
    setTdee(t_dee)
    setSelected(true)
  }

  const calculateCalories = () => {

    if (!targetWeight) {
      alert('Please enter your target weight.')
    } else if (!selected){
      alert('Please select your weekly activity level.')
    } else if(user.weight == targetWeight) {
      setRcalorie(tdee)
      setShowRecommended(true)
    } else if (user.weight > targetWeight) {
      setRcalorie(tdee - (tdee * 0.1))
      setWeek(user.weight - targetWeight)
      setShowRecommended(true)
    } else if (user.weight < targetWeight){
      setRcalorie(tdee + (tdee * 0.1))
      setWeek(targetWeight - user.weight)
      setShowRecommended(true)
    }
    setSelected(false)
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.header}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'green'}}>Profile</Text>
      </View>
      <View style={styles.profileContent}>
        <View style={styles.profileBox}>
          <View>
            <Text style={styles.username}>{user.username}</Text>
            <Text style={styles.personalInfo}>{user.gender} ** {user.age} years old</Text>
            <View style={{flexDirection: 'row', width: '100%', marginTop: 15, alignItems: 'center'}}>
              <TouchableOpacity 
                style={styles.editProfile}
                onPress={() => updateProfileRef.current.open()}
              >
                <Text style={styles.editText}>Edit Profile</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.signOutBtn}
                onPress={() => setVisible(true)}
              >
                <Text style={styles.signOutText}>Sign out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.targetBox}>
          <Text style={styles.setTargetText}>Manage weight</Text>
          <View style={styles.box}>
            <View style={styles.setWeightPlanBox}>
              <MaterialCommunityIcons name='note-edit' color='#0CA036' size={20}/>
              <Text style={{color: '#333', fontWeight: 'bold', marginLeft: 5, fontSize: 16,}}>Set weight plan</Text> 

            </View>
            <TouchableOpacity 
              style={styles.weightPlanBtn}
              onPress={() => setShowPlan(!showPlan)}
            >
              { showPlan ? 
                <MaterialIcons name='arrow-drop-up' size={24} color='#fff'/> : 
                <MaterialIcons name='arrow-drop-down' size={24} color='#fff'/>
              }
              
            </TouchableOpacity>
          </View>
        </View>

        {
          showPlan && 
          <View onPress={() => Keyboard.dismiss()} style={styles.planForm}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View>
              <View style={styles.formControl}>
                <Text style={{color: '#333'}}>Current Weight</Text>
                <TextInput 
                  style={styles.currentWeight}
                  editable={false}
                  value={String(user.weight) + ' kg'}
                />
              </View>
              <View style={styles.formControl}>
                <Text style={{color: '#333'}}>Target Weight</Text>
                <TextInput 
                  style={styles.targetWeight}
                  placeholder='Enter your target weight (kg)'
                  keyboardType='numeric'
                  onChangeText={(val) => setTargetWeight(val)}
                />
              </View>
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.formControl}>
              <Text style={{color: '#333'}}>Activity</Text>
              <SelectDropdown
                data={activities}
                onSelect={(selectedItem, index) => {
                    getTDEE(selectedItem)
                }}
                defaultButtonText={<View style={styles.defaultButtonText}><Text>Select your weekly activity level</Text><MaterialIcons name='keyboard-arrow-down'/></View>}
                buttonStyle={styles.activityDrop}
                buttonTextStyle={{color: '#aaa', fontSize: 12, }}
                rowStyle={styles.rowStyle}
                rowTextStyle={styles.rowTextStyle}
                dropdownStyle={{backgroundColor: '#fff'}}
              >
                
              </SelectDropdown>
            </View>
            <TouchableOpacity style={styles.calculateBtn} 
              onPress={() => calculateCalories()}
            >
              <Text style={{fontWeight: 'bold', fontSize: 14, color: '#fff'}}>SET TARGET</Text>
            </TouchableOpacity>
          </View>
          
  
        }

      </View>
       

      <RBSheet
        ref={updateProfileRef}
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
        <EditProfile />
      </RBSheet>

      <SignOut 
        visible={visible}
        setVisible={setVisible}
      />

      <TargetWeight 
        visible={showRecommended}
        setVisible={setShowRecommended}
        weeks={week}
        rcalories={rcalorie}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60, 
    backgroundColor: '#fff',
    borderBottomColor: 'rgba(20, 20, 20, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
  },

  profileContent: {
    flex: 1,
    padding: 20,
  },

  profileBox: {
    width: '100%',
    height: 150,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.8,
    paddingHorizontal: 25,
    paddingVertical: 20,

  },

  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0CA036'
  },
  
  personalInfo: {
    fontSize: 16,
    color: '#777'
  },

  editProfile: {
    width: '40%',
    backgroundColor: '#0CA036',
    padding: 10, 
    borderRadius: 10,
  },

  editText: {
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },

  signOutText: {
    color: '#0CA036',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },

  signOutBtn: {
    width: '40%',
    padding: 10, 
    borderRadius: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#CCC'
  }, 

  targetBox: {
    width: '100%', 
    height: 100, 
    marginTop: 20
  },

  setTargetText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    marginLeft: 5,
    marginBottom: 10,
  },

  box: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 3,
    shadowColor: '#ccc',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.8,
    paddingHorizontal: 15,
    paddingVertical: 5,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  setWeightPlanBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  weightPlanBtn: {
    width: 70,
    backgroundColor: '#0CA036',
    padding: 5, 
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  planForm: {
    width: '100%',
    minHeight: 50,
    alignSelf: 'center',
  },

  currentWeight: {
    width: '100%',
    height: 30,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 5,
    color: '#ccc'
  },
  formControl: {
    marginBottom: 10,
  },

  targetWeight: {
    width: '100%',
    height: 30,
    paddingHorizontal: 10,
    borderColor: '#aaa',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 5,
    color: '#aaa'
  },

  activityDrop: {
    width: '100%',
    height: 30,
    borderColor: '#aaa',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 5,
    color: '#aaa',
    textAlign: 'left',
    paddingTop: 5,
  },

  defaultButtonText: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rowStyle: {
    backgroundColor: '#fff',
    height: 30,
  },

  rowTextStyle: {
    fontSize: 12,
    color: '#a0a0a0'
  },

  calculateBtn: {
    width: '100%',
    height: 40,
    paddingVertical: 10,
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: '#0ca036',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }


})
export default Profile