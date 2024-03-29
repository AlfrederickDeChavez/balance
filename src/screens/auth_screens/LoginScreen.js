import React, {useState, useContext, useEffect} from 'react'
import { SafeAreaView, Text , Dimensions, StyleSheet, View, TextInput, TouchableOpacity, StatusBar, Image, ActivityIndicator} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import AuthContext from '../../context/AuthContext'

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {loginUser, loggingIn, disabled} = useContext(AuthContext)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <View style={styles.titleContainer}>
            <View style={styles.title}>
              <Image source={require('../.././assets/images/greenLogo.png')} style={{width: 40, height: 40}}/>
              <Text style={styles.titleName}>balance.</Text>
            </View>
      </View>
      <LinearGradient
        colors={['#37EF68', '#0CA036']}
        style={styles.content}
      >
        <View style={styles.greetingsContainer}>
          <Text style={styles.welcome}>Welcome!</Text>
          <Text style={styles.instruction}>Login to your account.</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.formControl}>
            <Text style={styles.label}>Email</Text>
            <TextInput 
              style={styles.inputField}
              onChangeText={(val) => setEmail(val)}

            /> 
          </View>
          <View style={styles.formControl}>
            <Text style={styles.label}>Password</Text>
            <TextInput 
              style={styles.inputField}
              secureTextEntry
              onChangeText={(val) => setPassword(val)}
            /> 
          </View>
        </View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            loginUser(email, password)
          }}
          disabled={disabled}
        >
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
 
        <View style={styles.signUpLink}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpOne')}> 
            <Text style={{color: 'white'}} >  Create an account.</Text>
          </TouchableOpacity> 
        </View>

        {
          loggingIn && 
          <ActivityIndicator size='large' color='green' style={{
            position: 'absolute',
            top: 0,
            bottom: '70%',
            left: 0,
            right: 0
          }}/>
        }
      </LinearGradient>
    </SafeAreaView>
  )
}

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex:1, 
  },

  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleName: {
    fontSize: 40,
    fontWeight: "700",
    color: '#0CA036',
    marginLeft: 5,
  },

  content: {
    flex: 4,
    backgroundColor: '#0CA036',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  greetingsContainer: {
    width: screenWidth * 0.7,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 20,
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    margin: 5,
  }, 

  instruction: {
    color: 'white',
    fontSize: 12,
  },

  form: {
    alignSelf: 'center',
    width: screenWidth * 0.7,
  },

  formControl: {
    width: '100%',
    marginVertical: 10,
  },

  label: {
    color: 'white',
    marginBottom: 5,
  }, 
  inputField: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 10,
    height: 28,
  },

  loginBtn: {
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 70,
    paddingVertical: 10,
    marginVertical: 30,
    borderRadius: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'

  },

  loginText: {
    color: '#0CA036',
    fontWeight: '800',
    textTransform: 'uppercase',
  },

  signUpLink: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 20,
  }


})

export default LoginScreen