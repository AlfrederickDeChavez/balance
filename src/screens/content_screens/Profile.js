import { SafeAreaView, View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import {useContext} from 'react'
import AuthContext from '../../context/AuthContext'

const Profile = ({navigation}) => {

  const {user} = useContext(AuthContext)
  const username = user.username
  const gender = user.gender
  const age = user.age

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'green'}}>Profile</Text>
      </View>
      <View style={styles.profileContent}>
        <View style={styles.profileBox}>
          <View>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.personalInfo}>{gender} ** {age} years old</Text>
            <TouchableOpacity 
              style={styles.editProfile}
              onPress={() => console.log('Edit Profile Clicked')}
            >
              <Text style={styles.editText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
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

  profileContent: {
    flex: 1,
    padding: 20,
  },

  profileBox: {
    width: '100%',
    height: 150,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.8,
    padding: 25,

  },

  username: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0CA036'
  },
  
  personalInfo: {
    fontSize: 18,
    color: '#777'
  },

  editProfile: {
    width: '40%',
    backgroundColor: '#0CA036',
    padding: 10, 
    marginVertical: 5,
    borderRadius: 10,
  },

  editText: {
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  }
})
export default Profile