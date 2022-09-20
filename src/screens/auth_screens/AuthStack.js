import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './LandingScreen';
import LoginScreen from './LoginScreen';
import SignUpOne from './SignUpOne';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
      <Stack.Navigator 
          initialRouteName='LandingScreen'
          screenOptions={{
                  headerShown: false
          }}
      
      >
        <Stack.Screen name="LandingScreen" component={LandingScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpOne" component={SignUpOne} />
      </Stack.Navigator>
  );
}

export default AuthStack