import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './LandingScreen';
import LoginScreen from './LoginScreen';
import SignUpOne from './SignUpOne';
import { useState, useContext } from 'react'

const Stack = createStackNavigator();

const AuthStack = () => {

  const [routeName, setRouteName] = useState('LandingScreen')
  return (

      <Stack.Navigator 
          initialRouteName={routeName}
          screenOptions={{
                  headerShown: false
          }}
      
      >
        <Stack.Screen name="LandingScreen" component={LandingScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="SignUpOne" component={SignUpOne} />
      </Stack.Navigator>
  );
}

export default AuthStack