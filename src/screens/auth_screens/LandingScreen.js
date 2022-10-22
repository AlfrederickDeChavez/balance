import React, { useContext, useEffect } from 'react'
import { Text, StyleSheet, Dimensions, View, StatusBar, TouchableOpacity, Image, useWindowDimensions} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Ionicons from '@expo/vector-icons/Ionicons';
import AuthContext from '../../context/AuthContext';

const LandingScreen = ({navigation}) => {

  return (
    <View>
      <StatusBar />
      <LinearGradient
        colors={['#37EF68', '#0CA036']}
        style={styles.backGround}
      >
        <View style={styles.container}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../.././assets/images/diet.png')} style={{width: 90, height: 90, alignSelf: 'center'}}/>
            <View style={styles.logoContainer}>
              <Image source={require('../.././assets/images/whiteLogo.png')} style={{width: 50, height: 50}}/>
              <Text style={styles.title}>balance.</Text>
            </View>
            <Text style={styles.punchLine}>Until proper diet becomes a habit.</Text>
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
    fontSize: 40,
    fontWeight: '800',
    color: 'white',
    marginLeft: 5,
  },

  punchLine: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
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