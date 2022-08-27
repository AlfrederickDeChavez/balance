import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './LandingScreen';
import LoginScreen from './LoginScreen';
import SignUpOne from './SignUpOne';
import SignUpTwo from './SignUpTwo';

import { AuthProvider } from '../../context/AuthContext';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <AuthProvider>
      <Stack.Navigator 
          initialRouteName='LandingScreen'
          screenOptions={{
                  headerShown: false
          }}
      
      >
        <Stack.Screen name="LandingScreen" component={LandingScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpOne" component={SignUpOne} />
        <Stack.Screen name="SignUpTwo" component={SignUpTwo} />
      </Stack.Navigator>
    </AuthProvider>
  );
}

export default AuthStack