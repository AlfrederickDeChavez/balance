//Navigation
import {NavigationContainer} from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';


//hooks 
import {useContext} from 'react';
 
//Async Storage 
import AsyncStorage from '@react-native-async-storage/async-storage';

// Navigation Stack
import ContentStack from './content_screens/ContentStack';
import AuthStack from './auth_screens/AuthStack'
import AuthContext from '../context/AuthContext';



export default function AppNavigation() {

  const {authtokens, user, loading} = useContext(AuthContext)
  
  return (
    
    /* 
     If there is a token in the AsyncStorage, meaning the user is logged in,
    the content screens will be shown.
    */

    <NavigationContainer>
        {/* { authtokens ? } */}
      {
        loading ? 

          <ActivityIndicator size='large' color='black' style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0

          }}/>

          : 

          !authtokens ? 

          <AuthStack />
          
          : 

          user ?

          <ContentStack /> :

          <AuthStack />


          
          
      }
        
       
      
    </NavigationContainer>
  )  
     
  }


  

