import { useState } from 'react'
import { SafeAreaView, View, Text , StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const Recommendations = () => {

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'green'}}>Recommendations</Text>
      </View>
      <ScrollView>
        <LinearGradient 
          colors={['red', '#0CA036']} 
          style={styles.food} 
          start={{x: 0, y: 0.5}} 
          end={{x: 0.8, y: 0.5}} 
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
      width: '100%',
      height: 60, 
      backgroundColor: '#fff',
      borderBottomColor: 'rgba(20, 20, 20, 0.8)',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row', 
      
  },

  food: {
    width: '100%',
    height: 50,
  }
})
export default Recommendations