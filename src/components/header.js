import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={styles.goPremiumContainer}>
            <Text style={{fontSize: 12, textAlign: 'center'}}>Go Premium</Text>
        </View>
        <View style={styles.midContainer}>
            <MaterialIcons name='chevron-left' size={40}/>
            <View style={styles.date}>
                <MaterialCommunityIcons name='calendar-today' size={30} color='green'/>
                <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>TODAY</Text>
                    <Text style={{fontSize: 12, color: 'green'}}>MON, January 19</Text>
                </View>
            </View>
            <MaterialIcons name='chevron-right' size={40} color='#cecece'/>
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
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row', 

    },

    goPremiumContainer: {
        width: '15%', 
        backgroundColor: '#cecece',
        padding: 5,
        borderRadius: 20,
        borderColor: 'green',
        borderWidth: 1,
        marginRight: 30,
    },

    midContainer: {
        
        width: '55%',
        height: '100%',
        left: -20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center'
    }, 
    date: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Header