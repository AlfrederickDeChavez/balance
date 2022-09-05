import React, {useState} from 'react'
import { 
  SafeAreaView, 
  Text, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions,
  TextInput,
  Keyboard,
  useWindowDimensions
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

import RadioButtonGroup, {RadioButtonItem} from 'expo-radio-button';

const SignUpTwo = ({navigation}) => {
 
  const [gender, setGender] = useState('')
  const [age, setAge] = useState(null)
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('SignUpOne')}>
        <Ionicons name='arrow-back-outline' style={styles.goBack}/>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.screenLabel}>Create an account.</Text>

        <View style={styles.form}>
          <View style={styles.formControl}>
            <Text style={styles.inputLabel}>Gender</Text>
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

          <View style={styles.formControl}>
                <Text style={styles.inputLabel}>Age</Text>
                <TextInput 
                  keyboardType='numeric'
                  maxLength={3}
                  style={styles.ageInput}
                  onChangeText={(value) => setAge(value)}
                  
                />
                
          </View>

          <View style={styles.bodyHW}>
              <View style={{width: '50%'}}>
                <Text style={styles.inputLabel}>Height</Text>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <TextInput 
                    keyboardType='numeric'
                    maxLength={3}
                    style={styles.heightInput}
                    onEndEditing={Keyboard.dismiss()}
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
                    onEndEditing={Keyboard.dismiss()}
                    onChangeText={(value) => setWeight(value)}
                  />
                  <Text>kg</Text>
                </View>
              </View>     
          </View>

          <View style={styles.indicatorBox}>
            <View style={styles.indicator}></View>
            <View style={styles.indicator}></View>
          </View>

          <TouchableOpacity  style={styles.signUpBtn} onPress={() => console.log({ 'Gender': gender, 'Age': age, 'Height': height, 'Weight': weight})}>
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>
          
        <View style={styles.loginLink}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}> 
            <Text style={{color: '#0CA036'}}>  Sign in.</Text>
          </TouchableOpacity> 
        </View>
        
      </View>
    </SafeAreaView>
  )
}

const screenHeight = Dimensions.get('window').height
const screenWidth= Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37EF68',
  },

  goBack: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
  },

  content: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },

  screenLabel: {
    alignSelf: 'center',
    margin: 15, 
    fontSize: 24,
    color: '#37EF68',
  },

  form: {
    width: screenWidth * 0.7,
    alignSelf: 'center',
  },

  formControl : {
    width: '100%',
    marginVertical: 15,
  },

  inputLabel: {
    color: 'black',
    marginBottom: 10,
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
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: '25%',
    justifyContent: 'center',

  },

  heightInput: {
    backgroundColor: '#efefef',
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: '50%',
    justifyContent: 'center',
    marginRight: 5,

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

  signUpBtn: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#37EF68',
    paddingHorizontal: 70,
    paddingVertical: 10,
    marginVertical: 30,
    borderRadius: 40,
  }, 

  signUpText: {
    color: 'white',
    fontWeight: '800',
    textTransform: 'uppercase',
  },

  loginLink: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 20,
  }
})

export default SignUpTwo