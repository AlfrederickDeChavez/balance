import { useState, useContext, useEffect } from 'react'
import { SafeAreaView, View, Text , StyleSheet, TouchableOpacity, ScrollView, Image, StatusBar} from 'react-native'
import FoodBenefits from '../../components/FoodBenefits'
import { foods } from '../../database/benefits'
import ContentContext from '../../context/ContentContext'

const Recommendations = () => {

  const {reached, calories, checkedIfReached} = useContext(ContentContext)
  const [visible, setVisible] = useState(false)
  const [food, setFood] = useState(
    {
      benefits: []
    },

  )

  useEffect(() => {
    console.log('checked')
    checkedIfReached()
  }, [calories.intake, calories.recommended])

  const showFood = (thisFood) => {
    setFood(thisFood)
    setVisible(true)
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.header}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'green'}}>Recommendations</Text>
      </View>
      <View style={styles.container}>

        <Text style={{
          width: '100%',
          paddingLeft: 25,
          paddingVertical: 5,
          fontSize: 16,
          fontWeight: '700',
          backgroundColor: '#ddd', 
          marginBottom: 15,
        }}>Foods</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          
          {
            foods.map((food, index) => {

              if(reached.includes(food.main)) {
                return null
              } else { 
                return (
                  <View style={styles.foodContainer} key={index}>
                    <View style={styles.foodDetails}>
                      <Image source={food.image} style={styles.foodImage}/>
                      <Text style={{color: 'green', fontWeight: 'bold', fontSize: 14, marginTop: 5}}>{food.name}</Text>
                      <Text style={{color: '#323232',  fontSize: 10,}}>{food.category}</Text>
                    </View> 
                    <TouchableOpacity style={styles.foodBenefits} onPress={() => showFood(food)}>
                      <Text style={{color: '#FFF', fontWeight: 'bold'}}>Benefits</Text>
                    </TouchableOpacity>
                  </View> 
                )
              }
              
            })
          }
          
          <View style={{width: 35}}></View>
        </ScrollView>
        
        <FoodBenefits 
          visible={visible}
          setVisible={setVisible}
          food={food}
        />
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

  container: {
    width: '100%',
    height: '100%',
    paddingVertical: 20,
  },

  foodContainer: {
    width: 100,
    height: 130,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: '#ccc',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.8,
    marginRight: 10,
    left: 25,
  },

  foodImage: {
    height: 40,
    width: 40,
  },

  foodDetails: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  foodBenefits: {
    width: '100%',
    height: '20%',
    backgroundColor: '#0ca036',
    bottom: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

})
export default Recommendations