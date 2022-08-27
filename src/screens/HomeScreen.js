import { SafeAreaView,View, Text, ScrollView, StyleSheet, StatusBar} from 'react-native'
import React from 'react'
import Header from '../components/header'
import { MaterialIcons, FontAwesome5, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons'


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Header/>
      <ScrollView>
      <View style={styles.healthStatusContainer}>
        <View style={styles.title}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Health</Text>
          <MaterialIcons name='more-horiz' size={30}/>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.healthStatus}>

          </View>
          <View style={styles.calorieCount}>

          </View>
        </ScrollView>
      </View>

      <View style={styles.addContainer}>
        <View style={styles.title}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Food</Text>
          <MaterialIcons name='more-horiz' size={30}/>
        </View>
        <View style={styles.add}>
          <FontAwesome5 name='utensils' size={50} color='#b1b1b1' style={{marginLeft: 15}}/>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={{fontSize: 10, marginBottom: 5}}>Scan Food</Text>
            <MaterialCommunityIcons name='barcode-scan' size={25} color='green' onPress={() => alert('Scan food')}/>
            <View style={styles.addBtn}>
              <AntDesign name='pluscircle' size={15}/>
              <Text style={{marginLeft: 5, fontWeight: 'bold'}}>ADD FOOD</Text>
            </View>
          </View>
        </View>
      </View>
      
      <View style={{...styles.addContainer, marginBottom: 60}}>
        <View style={styles.title}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Exercise</Text>
          <MaterialIcons name='more-horiz' size={30}/>
        </View>
        <View style={styles.add}>
            <Ionicons name='barbell' size={50} color='#b1b1b1' style={{marginLeft: 15}}/>
              <View style={{...styles.addBtn, bottom: -25}}>
                <AntDesign name='pluscircle' size={15}/>
                <Text style={{marginLeft: 5, fontWeight: 'bold'}}>ADD EXERCISE</Text>
              </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  healthStatusContainer: {
    height: 200,
    width: '100%',
    
  }, 

  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal: 25,
  },

  healthStatus: {
    width: 250,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 10,
    marginLeft: 25,
    marginTop: 5,
  },

  calorieCount: {
    width: 250,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 25,
    marginTop: 5,
  }, 

  addContainer: {
    height: 220,
    width: '100%',  
  }, 

  add: {
    width: '88%',
    height: 170,
    backgroundColor: '#fff',
    marginHorizontal: 25,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 40,
  },

  addBtn: {
    width: 180, 
    height: 30,
    backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 1.5, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20, 
    marginTop: 10,
    shadowColor: '#444',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
})

export default HomeScreen