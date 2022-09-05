import { SafeAreaView, View, Text , StyleSheet} from 'react-native'
import React from 'react'

const More = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'green'}}>More</Text>
      </View>
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
})
export default More