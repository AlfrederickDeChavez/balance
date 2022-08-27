import React from 'react'
import { Text, StyleSheet, Dimensions, View, StatusBar, TouchableOpacity, Image} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Ionicons from '@expo/vector-icons/Ionicons';

const LandingScreen = ({navigation}) => {
  return (
    <View>
      <StatusBar />
      <LinearGradient
        colors={['#37EF68', '#0CA036']}
        style={styles.backGround}
      >
        <View style={styles.container}>
          <View>
            <Image source={require('../.././assets/images/diet.png')} style={{width: 100, height: 100, alignSelf: 'center'}}/>
            <View style={styles.logoContainer}>
              <Image source={require('../.././assets/images/whiteLogo.png')} style={{width: 60, height: 60}}/>
              <Text style={styles.title}>balance.</Text>
            </View>
            <Text style={styles.punchLine}>Until it becomes a habit.</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={styles.navBtn}
          >
            <Text style={styles.getStarted}>Get Started</Text>
            <Ionicons name='arrow-forward-outline' style={styles.goRight}/>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  )
}

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  backGround: {
    width: screenWidth,
    height: screenHeight,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: 'space-evenly',
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  title: {
    fontSize: 50,
    fontWeight: '800',
    color: 'white',
    marginLeft: 5,
  },

  punchLine: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
  },
  navBtn: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 30,
    justifyContent: 'space-evenly',

  },

  getStarted: {
    color: '#0CA036',
    fontSize: 20,
    fontWeight: '700',
    marginRight: 2,
  },

  goRight: {
    color: '#0CA036',
    fontSize: 20,
  }
})


export default LandingScreen