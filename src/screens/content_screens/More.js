
import { useState } from 'react'
import { SafeAreaView, View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import AlertSuccess from '../../components/AlertSuccess'

const More = () => {

  const response = 'Account Created'
  const [visible, setVisible] = useState(false)
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'green'}}>More</Text>
      </View>
      <AlertSuccess visible={visible} setVisible={setVisible} response={response}></AlertSuccess>
      <TouchableOpacity 
          onPress={() => setVisible(true)}
      >
        <Text>Add</Text>
      </TouchableOpacity>
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