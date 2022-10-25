import React, {useState, useRef, useContext} from 'react'
import { 
  SafeAreaView, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  View, Dimensions, 
  TextInput, 
  ScrollView, 
  Animated,
  useWindowDimensions,
  StatusBar,
  Platform
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import AlertSuccess from '../../components/AlertSuccess';

import RadioButtonGroup, {RadioButtonItem} from 'expo-radio-button';
import Paginator from '../../components/Paginator';
import AuthContext from '../../context/AuthContext';


const SignUpOne = ({navigation}) => {

  // Context API imports
  const {registerUser, registered} = useContext(AuthContext)
  const [visible, setVisible] = useState(registered)

  // Window Dimensions 
  const {width} = useWindowDimensions()

  // Slides Indicators and Buttons
  const scrollX = useRef(new Animated.Value(0)).current
  const goNextAnim = useRef(new Animated.Value(50)).current
  const fadeAnim = useRef(new Animated.Value(0)).current
  const signUpRef = useRef()
  const [offSet, SetOffSet] = useState(0)
  const [showLogin, setShowLogin] = useState(false)

  // Registration Credentials 
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState(null)
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)

  const updateOffset = (e) => {
    SetOffSet(e.nativeEvent.contentOffset.x)
    console.log(offSet, showLogin)
    if(offSet <= width - 50) {
      if(Platform.OS == 'ios') {
        setShowLogin(true)
      } else {
        setShowLogin(false)
      }
    } else if (offSet >= width - 50) {
      if(Platform.OS == 'ios') {
        setShowLogin(false)
      } else {
        setShowLogin(true)
      }
    }
  } 


  // Animation functions

  const goNext = () => {
    
    signUpRef.current.scrollToEnd()
    Animated.timing(goNextAnim, {
      toValue: 100, 
      useNativeDriver: false,
      duration: 1500,
    }).start()

    Animated.timing(fadeAnim, {
      toValue: 1, 
      useNativeDriver: false,
      duration: 1500,
    }).start()

    setShowLogin(true)
  
  }

  const goBack = () => {
    signUpRef.current.scrollTo({x: 0})
    Animated.timing(goNextAnim, {
      toValue: 50, 
      useNativeDriver: false,
      duration: 1000,
    }).start()

    Animated.timing(fadeAnim, {
      toValue: 0, 
      useNativeDriver: false,
      duration: 1500,
    }).start()
    setShowLogin(false)

  }

  const register = () => {
    registerUser(username, email, password, password2, age, gender, height, weight)
    setVisible(true)
  }
 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {
        showLogin &&
        <TouchableOpacity 
          style={{
            position: 'absolute',
            top: 35,
            left: 20, 
          }}
          onPress={goBack}
        >
          <Animated.View style={[styles.goBack, { opacity: showLogin ? fadeAnim : 0 }]}>
            <Ionicons name='arrow-back-outline' style={styles.back}/>
          </Animated.View>
        </TouchableOpacity>
      }
      <View style={styles.content}>
        <Text style={styles.screenLabel}>Create an account.</Text>
          <View>
            <ScrollView 
              ref={signUpRef}
              style={styles.slides}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              bounces={false}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}], 
                {useNativeDriver: false}
              )}
              scrollEventThrottle={16}
              onMomentumScrollEnd={updateOffset}
            >
        
{/*-------------------------------------Sign up - first slide* -------------------------------------*/}

              <Animated.View style={{...styles.slide}}>
                <View style={styles.form}>
                  <View style={styles.formControl}>
                    <Text style={styles.inputLabel}>Username</Text>
                    <TextInput style={styles.inputField}
                      onChangeText={(val) => setUserName(val)}
                    />
                    { false && <Text style={{color: 'red', fontWeight: 'bold'}}>** Username field cannot be empty.</Text> }
                  </View>

                  <View style={styles.formControl}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput 
                      style={styles.inputField}
                      onChangeText={(val) => setEmail(val)}
                    />
                    { false && <Text style={{color: 'red', fontWeight: 'bold'}}>** Please enter a valid email.</Text>}
                  </View>

                  <View style={styles.formControl}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput 
                      style={styles.inputField}
                      secureTextEntry
                      onChangeText={(val) => setPassword(val)}
                    />
                    { false && <Text style={{color: 'red', fontWeight: 'bold'}}>** Password does not match.</Text> }

                  </View>

                  <View style={styles.formControl}>
                    <Text style={styles.inputLabel}>Confirm password</Text>
                    <TextInput 
                      style={styles.inputField}
                      secureTextEntry
                      onChangeText={(val) => setPassword2(val)}
                    />
                    { false && <Text style={{color: 'red', fontWeight: 'bold'}}>** Password does not match.</Text>}
                  </View>

                </View>
              </Animated.View>

{/* -------------------------------------Sign up - second slide* -------------------------------------*/}
    
              <Animated.View style={{...styles.slide}}>
                <View style={styles.form}>
                  <View style={styles.formControl}>

                    {/* Gender Input */}

                    <Text style={[styles.inputLabel, {marginBottom: 10}]}>Sex</Text>
                    <View>
                      <RadioButtonGroup
                        containerStyle={styles.genderInput}
                        radioBackground='#37EF68'
                        selected={gender}
                        onSelected={(value) => setGender(value)}
                      >
                          <RadioButtonItem
                            label={<Text style={styles.genderLabel}>Male</Text>}
                            value='Male'
                            style={styles.genderOption}
                          />
                          <RadioButtonItem
                            label={<Text style={styles.genderLabel}>Female</Text>}
                            value='Female'
                            style={styles.genderOption}
                          />
                      </RadioButtonGroup>
                    </View>
                  </View>

                  {/* Age Input */}

                  <View style={styles.formControl}>
                    <Text style={styles.inputLabel}>Age</Text>
                    <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                    <TextInput 
                      keyboardType='numeric'
                      maxLength={3}
                      style={styles.ageInput}
                      onChangeText={(value) => setAge(value)}
                      
                    /> 
                    <Text>y/o</Text>
                    </View>
                  </View>

                  {/* Height and Weight Input */}

                  <View style={styles.bodyHW}>
                      <View style={{width: '50%'}}>
                        <Text style={styles.inputLabel}>Height</Text>
                        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                          <TextInput 
                            keyboardType='numeric'
                            maxLength={3}
                            style={styles.heightInput}
                            onChangeText={(value) => setHeight(value)}
                          />
                          <Text>cm</Text>
                        </View>
                      </View>
                      <View style={{width: '50%'}}>
                        <Text style={styles.inputLabel}>Weight</Text>
                        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                          <TextInput 
                            keyboardType='numeric'
                            maxLength={3}
                            style={styles.heightInput}
                            onChangeText={(value) => setWeight(value)}
                          />
                          <Text>kg</Text>
                        </View>
                      </View>     
                  </View>
                </View>
              </Animated.View>
            </ScrollView>

            <Paginator scrollX={scrollX}/>

            <TouchableOpacity 
              onPress={showLogin ? register : goNext}
            > 
            
              <Animated.View 
                style={[styles.nextbtn, {width: 100}]}
              >
              {
                showLogin ? 
                <Text style={styles.signUpText}>Sign up</Text> :
                <Ionicons name='arrow-forward-outline' style={styles.next}/>
              }
              </Animated.View>
              
            </TouchableOpacity>
        </View>
 
        <View style={styles.loginLink}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}> 
            <Text style={{color: '#0CA036'}}>  Log in.</Text>
          </TouchableOpacity> 
        </View>
        

      </View>

      <AlertSuccess visible={visible} setVisible={setVisible}></AlertSuccess>
    </SafeAreaView>
  )
}

// Screen Dimensions
const screenHeight = Dimensions.get('window').height
const screenWidth= Dimensions.get('window').width


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37EF68',
  },

  content: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 100,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 20,
  },

  screenLabel: {
    alignSelf: 'center',
    margin: 15,
    fontSize: 24,
    color: '#37EF68',
    marginBottom: 15,
  },

  slides: {

  },

  slide: {
    width: screenWidth,
  },

  form: {
    width: screenWidth * 0.7,
    alignSelf: 'center',
  },

  formControl : {
    width: '100%',
    marginVertical: 10,
  },

  inputLabel: {
    color: 'black',
    marginBottom: 5,
    fontSize: 14,
  },

  inputField: {
    backgroundColor: '#efefef',
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 30,
  },

  genderInput: {
    flexDirection: 'row', 
  },

  genderOption: {
    marginRight: 5,
  },

  genderLabel: {
    marginRight: 15,
  },

  ageInput: {
    backgroundColor: '#efefef',
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: '25%',
    justifyContent: 'center',
    height: 30,
    marginRight: 5
  },

  heightInput: {
    backgroundColor: '#efefef',
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: '50%',
    justifyContent: 'center',
    marginRight: 5,
    height: 30,
  },

  weightInput: {
    backgroundColor: '#efefef',
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '50%',
    justifyContent: 'center',
    marginRight: 5,
  },

  bodyHW: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 15,
    justifyContent: 'space-between'
  },


  indicatorBox: {
    flexDirection: 'row',
    alignSelf: 'center'
  },


  indicator: {
    width: 20, 
    height: 5, 
    backgroundColor: '#37EF68',
    borderRadius: 5, 
    marginHorizontal: 4,
  },

  indicator2: {
    width: 20, 
    height: 5, 
    backgroundColor: '#efefef',
    borderRadius: 5, 
    marginHorizontal: 4,
  },

  goBack: {
    width: 50,
    height: 50, 
    borderRadius: 25,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },


  nextbtn: {
    backgroundColor: '#37EF68',
    alignSelf: 'center',
    height: 50,
    marginBottom: 20,
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  back: {
    fontSize: 20,
    color: '#37EF68',
    alignSelf: 'center'
  },

  next: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },

  signUpText: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '700',
  },

  loginLink: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
  } 
  

})


export default SignUpOne