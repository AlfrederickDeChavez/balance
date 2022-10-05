import {ScrollView, View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {  vitamins} from '../../database/nutrients'
import ProgressGraph from '../../components/ProgressGraph'
import { useContext } from 'react'
import ContentContext from '../../context/ContentContext'

const Summary = () => {

    const { macronutrients } = useContext(ContentContext)
    return (
        
        <ScrollView style={{marginBottom: 200, backgroundColor: '#ddd'}}>

            <View style={styles.macronutrientsContainer}>
            <View style={styles.title}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Macronutrients</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                macronutrients.map((macronutrient, index) => {
                return (
                    <View key={index} style={[styles.macronutrientBox, {backgroundColor: '#795C34'}]}>
                    
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>{macronutrient.name}</Text>
                        {/* Graph */}
                        <ProgressGraph recommended={macronutrient.recommended} intake={macronutrient.intake}/>
                    </View>
                )
                })
            }
            
            <View style={{width: 40}}></View>
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
                    <View key={index} style={styles.vitaminsBox}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>{vitamin.name}</Text>
                    
                    {/* Graph */}
                    <ProgressGraph recommended={vitamin.recommended} intake={10}/>
                    </View>
                )
                })
            }
            <View style={{width: 40}}></View>
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
                        <View key={index} style={styles.mineralsBox}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>{macronutrient.name}</Text>
                        {/* Graph */}
                        <ProgressGraph recommended={macronutrient.recommended} intake={23}/>
                        <Text style={{color: '#fff'}}>Recommended: {macronutrient.recommended}</Text>
                        </View>
                    )
                    })
                }
                <View style={{width: 40}}></View>
                </ScrollView>
            </View>

            <View style={styles.deficit}>
                <View style={styles.title}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Deficiency</Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}></ScrollView>
            </View>

            <View style={styles.overconsumption}>
                <View style={styles.title}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Overconsumption</Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        [1, 2, 3, 4, 5].map((nutrient, index) => {
                            return (
                                <View key={index} style={styles.overconsumptionBox}>
                                    <Text>{nutrient}</Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
            <View style={{height: 40}}></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    title: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
      marginHorizontal: 25, 
    },
  
    macronutrientsContainer: {
      height: 200,
      width: '100%',
      paddingVertical: 5,
    }, 
  
    macronutrientBox: {
      width: 250,
      height: 150, 
      margin: 5,
      padding: 15,
      right: 20,
      left: 20,
      borderRadius: 15,
      shadowColor: '#ccc',
      shadowOffset: {width: 4, height: 4},
      shadowOpacity: 0.8,
    }, 
  
    vitaminsBox: {
      backgroundColor: '#0CA',
      width: 250,
      height: 150, 
      margin: 5,
      padding: 15,
      right: 20,
      left: 20,
      borderRadius: 15,
      shadowColor: '#ccc',
      shadowOffset: {width: 4, height: 4},
      shadowOpacity: 0.8,
    }, 
  
    mineralsBox: {
      backgroundColor: '#00B7EB',
      width: 250,
      height: 150, 
      margin: 5,
      padding: 15,
      right: 20,
      left: 20,
      borderRadius: 15,
      shadowColor: '#ccc',
      shadowOffset: {width: 4, height: 4},
      shadowOpacity: 0.8,
    }, 

    overconsumptionBox: {
      backgroundColor: '#006DB2',
      width: 250,
      height: 150, 
      margin: 5,
      padding: 15,
      right: 20,
      left: 20,
      borderRadius: 15,
      shadowColor: '#ccc',
      shadowOffset: {width: 4, height: 4},
      shadowOpacity: 0.8,
    }
  
    
  })
  export default Summary