import { View, Text ,StyleSheet, Image} from 'react-native'
import React from 'react'
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

const Header = () => {

    const date = new Date().toLocaleDateString('en-us', {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'})

  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/greenLogo.png')} style={styles.logo}/>
        <View style={styles.midContainer}>
            {/* <MaterialIcons name='chevron-left' size={40}/> */}
            <View style={styles.date}>
                <MaterialCommunityIcons name='calendar-today' size={30} color='green'/>
                <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>TODAY</Text>
                    <Text style={{fontSize: 12, color: 'green'}}>{date}</Text>
                </View>
            </View>
            {/* <MaterialIcons name='chevron-right' size={40} color='#cecece'/> */}
        </View>
        <View style={{
            width: 40,
            height: 40, 
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#dedede',
            borderRadius: 20, 
        }}>
            <Ionicons name='person-circle-outline' size={35} color='#fff'/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60, 
        backgroundColor: '#fff',
        borderBottomColor: 'rgba(20, 20, 20, 0.8)',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row', 
        paddingHorizontal: 30,
        paddingVertical: 5, 
    },

    midContainer: {
        width: '55%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',

    }, 

    date: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    logo: {
        width: 40,
        height: 40,
    }
})

export default Header