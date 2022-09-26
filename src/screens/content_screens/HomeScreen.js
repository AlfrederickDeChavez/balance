import { SafeAreaView,View, Text, ScrollView, StyleSheet, TouchableOpacity, StatusBar, Dimensions, Image} from 'react-native'
import React, {useRef, useContext} from 'react'

// Components 
import Header from '../../components/header'
import AddFood from '../../components/AddFood'

import { MaterialIcons, FontAwesome5, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons'
import RBSheet from 'react-native-raw-bottom-sheet';
import { calculateBMI, interpretBMI } from '../../functions/BMICalculator'
import AuthContext from '../../context/AuthContext'

const HomeScreen = () => {

  const {user, logoutUser} = useContext(AuthContext)

  const addFoodRef = useRef()
  const screenHeight = Dimensions.get('window').height

  const weight = 70
  const height = 170
  const gender = 'Male'
  const bmi = calculateBMI(weight, height)
  const userBMI = interpretBMI(bmi, gender)

  return (
    <SafeAreaView>
      <StatusBar />
      <Header/>
      <ScrollView showsVerticalScrollIndicator={false }>
      <View style={styles.healthStatusContainer}>
        <View style={styles.title}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Health</Text>
          <MaterialIcons name='more-horiz' size={30}/>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.healthStatus}>
            <Image 
              source={userBMI.imgSrc}
              style={styles.bmiVector}
            />
            <View style={styles.bmiDetailsView}>
              <Text style={[styles.bmiStatus, {color: userBMI.color, fontSize: userBMI.fontSize}]}>{userBMI.status}</Text>
              <Text style={styles.bmiHeight}>Height: <Text style={{color: userBMI.color, fontWeight: '800'}}>{height}</Text> cm</Text>
              <Text style={styles.bmiWeight}>Weight: <Text style={{color: userBMI.color, fontWeight: '800'}}>{weight}</Text> kg</Text>
              <Text style={styles.bmiResult}>BMI: <Text style={{color: userBMI.color}}>{bmi}</Text></Text>
            </View>
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
            <Text style={{fontSize: 10, marginBottom: 5}}>Scan Food Barcode</Text>
            <MaterialCommunityIcons name='barcode-scan' size={25} color='green' onPress={() => alert('Scan food')}/>
            <TouchableOpacity 
              style={styles.addBtn} 
              onPress={() => addFoodRef.current.open()}
            >
              <AntDesign name='pluscircle' size={15} color='#0CA036'/>
              <Text style={{marginLeft: 5, fontWeight: 'bold'}}>ADD FOOD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      <View style={styles.addContainer}>
        <View style={styles.title}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Exercise</Text>
          <MaterialIcons name='more-horiz' size={30}/>
        </View>
        <View style={styles.add}>
            <Ionicons name='bicycle' size={60} color='#b1b1b1' style={{marginLeft: 15}}/>
              <TouchableOpacity 
                style={styles.addBtn}
                onPress={() => logoutUser()}
              >
                <AntDesign name='pluscircle' size={15} color='#0CA036' />
                <Text style={{marginLeft: 5, fontWeight: 'bold'}}>ADD EXERCISE</Text>
              </TouchableOpacity>
        </View>
      </View>

      <View style={{height: 60}}></View>
      </ScrollView>

      <RBSheet
        ref={addFoodRef}
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
        <AddFood />
      </RBSheet>

    </SafeAreaView>
  )
}

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  healthStatusContainer: {
    height: 200,
    width: screenWidth,
    alignSelf: 'center'
  }, 

  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal: 25,
  },

  healthStatus: {
    width: screenWidth * 0.7,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 10,
    marginLeft: 25,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#ccc',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.8,
  },


  bmiVector: {
    resizeMode: 'contain',
    width: '30%',
    height: 100,
    flex: 2,
  },

  bmiDetailsView: {
    width: 100,
    height: 120,
    flex: 3,
    paddingVertical: 8,
  },

  bmiStatus: {
    fontWeight: '800',
    textTransform: 'uppercase'
  },

  bmiHeight: {
    fontSize: 14,
    color: '#333',
    marginVertical: 1,
  },
  bmiWeight: {
    fontSize: 14,
    marginVertical: 1,
    color: '#333',
  },

  bmiResult: {
    color: '#000',
    fontSize: 20,
    fontWeight: '800',
    marginVertical: 3,
  },

  calorieCount: {
    width: screenWidth * 0.6,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 25,
    marginTop: 5,
    shadowColor: '#ccc',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.8,
  }, 

  addContainer: {
    height: 220,
    width: '100%',
    paddingHorizontal: 20,  
  }, 

  add: {
    width: '100%',
    alignSelf: 'center',
    height: 170,
    backgroundColor: '#fff',
    marginHorizontal: 25,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 40,
    shadowColor: '#ccc',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.8,
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
    shadowColor: '#ccc',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.8,
  },
})

export default HomeScreen