import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Icons
import Ionicons from '@expo/vector-icons/Ionicons';
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'

//Screens
import Profile from './Profile'
import Dashboard from './Dashboard'
import HomeScreen from './HomeScreen'
import Plan from './Plan'
import More from './More'

const Tab = createBottomTabNavigator()

const ContentStack = () => {
    return (
        <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName; 
            
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'
              return <Ionicons name={iconName} size={30} color='#fff'/>
            } else if (route.name === 'Dashboard') {
              iconName = focused ? 'view-dashboard' : 'view-dashboard-outline'
              return <MaterialCommunityIcons name={iconName} size={30} color='#fff'/>
            } else if (route.name === 'Profile') {
              iconName = focused ? 'md-person-circle' : 'md-person-circle-outline'
              return <Ionicons name={iconName} size={30} color='#fff'/>
            } else if (route.name === 'Plan') {
              iconName = focused ? 'notebook' : 'notebook-outline'
              return <MaterialCommunityIcons name={iconName} size={30} color='#fff'/>
            } else if (route.name === 'More') {
              iconName = 'more-horiz'
              return <MaterialIcons name={iconName} size={30} color='#fff'/>
            }
          }, 
          headerShown: false,
          tabBarShowLabel: true, 
          tabBarStyle: {
            backgroundColor: '#0CA036', height: 55
          },
          tabBarLabelStyle: {
            color: '#fff',
            marginBottom: 3,
          }
        })}
          
      >
        <Tab.Screen name='Profile' component={Profile}/>
        <Tab.Screen name='Dashboard' component={Dashboard}/>
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Plan' component={Plan}/>
        <Tab.Screen name='More' component={More}/>
        
      </Tab.Navigator>
    );
}

export default ContentStack