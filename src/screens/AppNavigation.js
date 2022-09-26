//Navigation
import {NavigationContainer} from '@react-navigation/native';

//hooks 
import {useContext} from 'react';

//Async Storage 
import AsyncStorage from '@react-native-async-storage/async-storage';

// Navigation Stack
import ContentStack from './content_screens/ContentStack';
import AuthStack from './auth_screens/AuthStack'
import AuthContext from '../context/AuthContext';



export default function AppNavigation() {

  const {authtokens} = useContext(AuthContext)
  
  return (
    
    /* 
     If there is a token in the AsyncStorage, meaning the user is logged in,
    the content screens will be shown.
    */

    <NavigationContainer>
        { true ? <ContentStack /> : <AuthStack />}
    </NavigationContainer>
  )  
     
  }


  

