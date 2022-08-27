import { SafeAreaView,View, Text, ScrollView, StyleSheet, StatusBar} from 'react-native'
import React from 'react'
import Header from '../components/header'
import { MaterialIcons, FontAwesome5, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons'
import { macronutrients , vitamins} from '../database/nutrients'


const Dashboard = () => {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Header/>
      <ScrollView style={{marginBottom: 70}}>
        <View style={styles.performanceContainer}>
          <View style={styles.title}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Your Performance</Text>
          </View>
          <View style={styles.performanceBox}>

          </View>
        </View>
        <View style={styles.macronutrientsContainer}>
          <View style={styles.title}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Macronutrients</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            macronutrients.map((macronutrient, index) => {
              return (
                <View key={index} style={styles.macronutrientBox}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>{macronutrient.name}</Text>
                  <View style={{margin: 16, flexDirection: 'row',}}>
                    <View style={{width: 80, height: 80, borderRadius: 40, backgroundColor: '#cecece'}}></View>
                    <View style={{left: 25, top: 10}}>
                      <View style={{flexDirection: 'row', marginVertical: 5,  alignItems: 'center'}}>
                        <View style={{width: 10, height: 10, backgroundColor: '#cecece', marginRight: 5}}></View>
                        <Text style={{fontSize: 10}}>Recommended</Text>
                      </View>
                      <View style={{flexDirection: 'row', marginVertical: 5, alignItems: 'center'}}>
                        <View style={{width: 10, height: 10, backgroundColor: '#cecece', marginRight: 5}}></View>
                        <Text style={{fontSize: 10}}>Your Intake</Text>
                      </View>
                    </View>
                  </View>
                </View>
              )
            })
          }
          </ScrollView>
        </View>

        <View style={styles.macronutrientsContainer}>
          <View style={styles.title}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Vitamins</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} bounces={true}>
          {
            vitamins.map((vitamin, index) => {
              return (
                <View key={index} style={styles.macronutrientBox}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>{vitamin.name}</Text>
                  <View style={{margin: 16, flexDirection: 'row',}}>
                    <View style={{width: 80, height: 80, borderRadius: 40, backgroundColor: '#cecece'}}></View>
                    <View style={{left: 25, top: 10}}>
                      <View style={{flexDirection: 'row', marginVertical: 5,  alignItems: 'center'}}>
                        <View style={{width: 10, height: 10, backgroundColor: '#cecece', marginRight: 5}}></View>
                        <Text style={{fontSize: 10}}>Recommended</Text>
                      </View>
                      <View style={{flexDirection: 'row', marginVertical: 5, alignItems: 'center'}}>
                        <View style={{width: 10, height: 10, backgroundColor: '#cecece', marginRight: 5}}></View>
                        <Text style={{fontSize: 10}}>Your Intake</Text>
                      </View>
                    </View>
                  </View>
                </View>
              )
            })
          }
          </ScrollView>
        </View>

        <View style={styles.macronutrientsContainer}>
          <View style={styles.title}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Minerals</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            macronutrients.map((macronutrient, index) => {
              return (
                <View key={index} style={styles.macronutrientBox}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>{macronutrient.name}</Text>
                  <View style={{margin: 16, flexDirection: 'row'}}>
                    <View style={{width: 80, height: 80, borderRadius: 40, backgroundColor: '#cecece'}}></View>
                    <View style={{left: 25, top: 10}}>
                      <View style={{flexDirection: 'row', marginVertical: 5,  alignItems: 'center'}}>
                        <View style={{width: 10, height: 10, backgroundColor: '#cecece', marginRight: 5}}></View>
                        <Text style={{fontSize: 10}}>Recommended</Text>
                      </View>
                      <View style={{flexDirection: 'row', marginVertical: 5, alignItems: 'center'}}>
                        <View style={{width: 10, height: 10, backgroundColor: '#cecece', marginRight: 5}}></View>
                        <Text style={{fontSize: 10}}>Your Intake</Text>
                      </View>
                    </View>
                  </View>
                </View>
              )
            })
          }
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  performanceContainer: {
    height: 200,
    width: '100%',
    paddingVertical: 5,
    paddingRight: 20,
  }, 

  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 25,
  },

  performanceBox: {
    width: '93%',
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 10,
    marginLeft: 25,
    marginTop: 10,
    shadowColor: '#dedede',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.8,
  },
  macronutrientsContainer: {
    height: 200,
    width: '100%',
    paddingVertical: 5,
  }, 
  macronutrientBox: {
    backgroundColor: '#fff',
    width: 250,
    height: 150, 
    margin: 5,
    padding: 15,
    right: 20,
    left: 20,
    borderRadius: 15,
    shadowColor: '#dedede',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.8,
  }, 
  
  
})
export default Dashboard