import React from 'react'
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, View, Dimensions, TextInput} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';


const SignUpOne = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.screenLabel}>Create an account.</Text>

        <View style={styles.form}>
          <View style={styles.formControl}>
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput style={styles.inputField}/>
          </View>

          <View style={styles.formControl}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput style={styles.inputField}/>
          </View>

          <View style={styles.formControl}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput style={styles.inputField}/>
          </View>

          <View style={styles.formControl}>
            <Text style={styles.inputLabel}>Confirm password</Text>
            <TextInput style={styles.inputField}/>
          </View>

          <View style={styles.indicatorBox}>
            <View style={styles.indicator}></View>
            <View style={styles.indicator2}></View>
          </View>

          <TouchableOpacity style={styles.nextbtn} onPress={() => navigation.navigate('SignUpTwo')}>
            <Ionicons name='arrow-forward-outline' style={styles.next}/>
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

  content: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 100,
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
    marginVertical: 10,
  },

  inputLabel: {
    color: 'black',
    marginBottom: 5,
  },

  inputField: {
    backgroundColor: '#efefef',
    paddingVertical: 12,
    paddingHorizontal: 10,
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


  nextbtn: {
    backgroundColor: '#37EF68',
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignSelf: 'flex-end',
    width: screenWidth * 0.2,
    marginTop: 15,
    borderRadius: 20,
  },

  next: {
    fontSize: 30,
    color: 'white',
    alignSelf: 'center'
  },

  loginLink: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 20,
  }
  

})


export default SignUpOne