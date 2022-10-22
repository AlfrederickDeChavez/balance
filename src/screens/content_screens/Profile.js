import { SafeAreaView, View, Text , StyleSheet, TouchableOpacity, StatusBar, Dimensions} from 'react-native'
import {useContext, useRef} from 'react'
import AuthContext from '../../context/AuthContext'
import RBSheet from 'react-native-raw-bottom-sheet';
import EditProfile from '../../components/EditProfile';

const Profile = ({navigation}) => {

  const {user} = useContext(AuthContext)
  const updateProfileRef = useRef()
  const screenHeight = Dimensions.get('window').height

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.header}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'green'}}>Profile</Text>
      </View>
      <View style={styles.profileContent}>
        <View style={styles.profileBox}>
          <View>
            <Text style={styles.username}>{user.username}</Text>
            <Text style={styles.personalInfo}>{user.gender} ** {user.age} years old</Text>
            <TouchableOpacity 
              style={styles.editProfile}
              onPress={() => updateProfileRef.current.open()}
            >
              <Text style={styles.editText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <RBSheet
        ref={updateProfileRef}
        closeOnDragDown={true}
        height={screenHeight - 50}
        customStyles={{
          container: {
            backgroundColor: '#0CA036',
          },
          draggableIcon: {
            backgroundColor: 'green'
          }
        }}
      >
        <EditProfile />
      </RBSheet>
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
    paddingHorizontal: 25,
    paddingVertical: 20,

  },

  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0CA036'
  },
  
  personalInfo: {
    fontSize: 16,
    color: '#777'
  },

  editProfile: {
    width: '40%',
    backgroundColor: '#0CA036',
    padding: 10, 
    borderRadius: 10,
    marginTop: 10,
  },

  editText: {
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  }
})
export default Profile