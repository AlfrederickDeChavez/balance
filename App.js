
//Navigation
import {NavigationContainer} from '@react-navigation/native';

//hooks 
import {useState} from 'react';
import AuthStack from './src/screens/auth_screens/AuthStack';
import ContentStack from './src/screens/content_screens/ContentStack';


  
export default function App() {

  const [token, setToken] = useState('')

  if (token) { 
  return (
    
    /*  If there is a token in the AsyncStorage, meaning the user is logged in,
    the content screens will be shown.
    */

    <NavigationContainer>
      <ContentStack />
    </NavigationContainer>
  ) }
  else  {
    return (

      /*
      Otherwise, if there is no token in the AsyncStorage, 
      the user has not logged in yet, authentication screens will be presented.
      */

      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
      
    )
    
  }


  
}
