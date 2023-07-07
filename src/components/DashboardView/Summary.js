import {ScrollView, View, Text, StyleSheet, Image, Dimensions} from 'react-native'
import ProgressGraph from '../../components/ProgressGraph'
import { useContext } from 'react'
import ContentContext from '../../context/ContentContext'

const Summary = () => {

    const { 
        calories, 
        protein, 
        fiber,
        vitaminA,
        vitaminD,
        vitaminE,
        vitaminK,
        thiamin,
        riboflavin,
        niacin,
        vitaminB6,
        vitaminB12,
        folate,
        vitaminC,
        iron,
        zinc,
        selenium,
        iodine,
        calcium,
        magnesium,
        phosphorus,
        flouride,
        sodium,
        chloride,
        potassium,
        foods,
        exercises,
        caloriesBurn
    } = useContext(ContentContext)

    return (
        
        <ScrollView style={{marginBottom: 200, backgroundColor: '#ddd'}}>

            <View style={styles.macronutrientsContainer}>
            <View style={styles.title}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Macronutrients</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            
                 <View style={[styles.macronutrientBox, {backgroundColor: '#795C34'}]}>   
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Calories</Text>
                        {/* Graph */}
                    <ProgressGraph recommended={calories.recommended} intake={calories.intake} label={calories.label}/> 
               </View> 

                <View style={[styles.macronutrientBox, {backgroundColor: '#795C34'}]}>   
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Protein</Text>
                        {/* Graph */}
                    <ProgressGraph recommended={protein.recommended} intake={protein.intake} label={protein.label}/>
                </View>

                <View style={[styles.macronutrientBox, {backgroundColor: '#795C34'}]}>   
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Dietary Fiber</Text>
                        {/* Graph */}
                    <ProgressGraph recommended={fiber.recommended} intake={fiber.intake} label={fiber.label}/>
                </View>
            
            <View style={{width: 40}}></View>
            </ScrollView>
            </View>

            <View style={styles.macronutrientsContainer}>
            <View style={styles.title}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Vitamins</Text>
            </View>


            {/* VITAMINS */}
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} bounces={true}>

                <View style={styles.vitaminsBox}>   
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Vitamin A</Text>
                        {/* Graph */}
                    <ProgressGraph recommended={vitaminA.recommended} intake={vitaminA.intake} label={vitaminA.label}/>
                </View>

                <View style={styles.vitaminsBox}>   
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Vitamin D</Text>
                        {/* Graph */}
                    <ProgressGraph recommended={vitaminD.recommended} intake={vitaminD.intake} label={vitaminD.label}/>
                </View>

                <View style={styles.vitaminsBox}>   
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Vitamin E</Text>
                        {/* Graph */}
                    <ProgressGraph recommended={vitaminE.recommended} intake={vitaminE.intake} label={vitaminE.label}/>
                </View>

                <View style={styles.vitaminsBox}>   
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Vitamin K</Text>
                        {/* Graph */}
                    <ProgressGraph recommended={vitaminK.recommended} intake={vitaminK.intake} label={vitaminK.label}/>
                </View>

                <View style={styles.vitaminsBox}>   
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Thiamin</Text>
                        {/* Graph */} 
                    <ProgressGraph recommended={thiamin.recommended} intake={thiamin.intake} label={thiamin.label}/>
                </View>

                <View style={styles.vitaminsBox}>   
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Riboflavin</Text>
                        {/* Graph */}
                    <ProgressGraph recommended={riboflavin.recommended} intake={riboflavin.intake} label={riboflavin.label}/>
                </View>

                <View style={styles.vitaminsBox}>   
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Niacin</Text>
                        {/* Graph */}
                    <ProgressGraph recommended={niacin.recommended} intake={niacin.intake} label={niacin.label}/>
                </View>

                <View style={styles.vitaminsBox}>   
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Vitamin B6</Text>
                        {/* Graph */}
                    <ProgressGraph recommended={vitaminB6.recommended} intake={vitaminB6.intake} label={vitaminB6.label}/>
                </View>

                <View style={styles.vitaminsBox}>   
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Vitamin B12</Text>
                        {/* Graph */}
                    <ProgressGraph recommended={vitaminB12.recommended} intake={vitaminB12.intake} label={vitaminB12.label}/>
                </View>

                <View style={styles.vitaminsBox}>   
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Folate</Text>
                        {/* Graph */}
                    <ProgressGraph recommended={folate.recommended} intake={folate.intake} label={folate.label}/>
                </View>

                <View style={styles.vitaminsBox}>   
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Vitamin C</Text>
                        {/* Graph */}
                    <ProgressGraph recommended={vitaminC.recommended} intake={vitaminC.intake} label={vitaminC.label}/>
                </View>

                <View style={{width: 40}}></View>
            </ScrollView>
            </View>


            {/* MINERALS */}

            <View style={styles.macronutrientsContainer}>
                <View style={styles.title}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Minerals</Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                    <View style={styles.mineralsBox}>   
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>Iron</Text>
                            {/* Graph */}
                        <ProgressGraph recommended={iron.recommended} intake={iron.intake} label={iron.label}/>
                    </View>

                    <View style={styles.mineralsBox}>   
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>Zinc</Text>
                            {/* Graph */}
                        <ProgressGraph recommended={zinc.recommended} intake={zinc.intake} label={zinc.label}/>
                    </View>

                    <View style={styles.mineralsBox}>   
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>Selenium</Text>
                            {/* Graph */}
                        <ProgressGraph recommended={selenium.recommended} intake={selenium.intake} label={selenium.label}/>
                    </View>

                    <View style={styles.mineralsBox}> 
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>Iodine</Text>
                            {/* Graph */}
                        <ProgressGraph recommended={iodine.recommended} intake={iodine.intake} label={iodine.label}/>
                    </View>

                    <View style={styles.mineralsBox}>   
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>Calcium</Text>
                            {/* Graph */}
                        <ProgressGraph recommended={calcium.recommended} intake={calcium.intake} label={calcium.label}/>
                    </View>

                    <View style={styles.mineralsBox}>   
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>Magnesium</Text>
                            {/* Graph */}
                        <ProgressGraph recommended={magnesium.recommended} intake={magnesium.intake} label={magnesium.label}/>
                    </View>

                    <View style={styles.mineralsBox}>   
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>Phosphorus</Text>
                            {/* Graph */}
                        <ProgressGraph recommended={phosphorus.recommended} intake={phosphorus.intake} label={phosphorus.label}/>
                    </View>

                    <View style={styles.mineralsBox}>   
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>Flouride</Text>
                            {/* Graph */}
                        <ProgressGraph recommended={flouride.recommended} intake={flouride.intake} label={flouride.label}/>
                    </View>

                    <View style={styles.mineralsBox}>   
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>Sodium</Text>
                            {/* Graph */}
                        <ProgressGraph recommended={sodium.recommended} intake={sodium.intake} label={sodium.label}/>
                    </View>

                    <View style={styles.mineralsBox}>   
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>Chloride</Text>
                            {/* Graph */}
                        <ProgressGraph recommended={chloride.recommended} intake={chloride.intake} label={chloride.label}/>
                    </View>

                    <View style={styles.mineralsBox}>   
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>Potassium</Text>
                            {/* Graph */}
                        <ProgressGraph recommended={potassium.recommended} intake={potassium.intake} label={potassium.label}/>
                    </View>
               
                    <View style={{width: 40}}></View>
                </ScrollView>
            </View>   

            <View style={{width: '100%', paddingVertical: 5}}>
                <View style={[styles.title, {marginBottom: 5}]}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Foods Today</Text>
                </View>

                {

                    foods.length < 1 ? 
                                        
                    <View
                        style={{
                            width: '100%',
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text style={{color: '#bebebe', fontSize: 14, fontWeight: 'bold'}}>No foods added</Text>
                        <Image source={require('../../assets/images/null.png')} style={styles.null}/>
                    </View> 
                    : 

                    <View>
                        {
                            foods.map((food, index) => {
                                return(
                                    <View style={styles.foodList} key={index}>
                                        <View style={{width: 40, height: 40, borderRadius: 3, backgroundColor: '#ddd', justifyContent: 'center', alignItems: 'center'}}>
                                            <Image source={require('../../assets/images/salad.png')} style={styles.icon} />
                                        </View>
                                        <View>
                                            <Text style={styles.foodText}>{food.name}</Text>
                                            <Text style={{color: '#333', fontSize: 10, marginLeft: 10, marginTop: 5}}>Calories: {food.calories * food.quantity}g | Protein: {food.protein * food.quantity}g ...</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }

                        <View style={styles.burnedBox}>
                            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'green'}}>{calories.intake.toFixed(1)} kcal</Text>
                            <Text>Total Calories Consumed</Text>
                        </View>

                        
                    </View>

                    


                }
                       
            </View>

            <View style={{width: '100%', paddingVertical: 5}}>
                <View style={[styles.title, {marginBottom: 5}]}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Exercises Today</Text>
                </View>

                {

                    exercises.length < 1 ? 
                                        
                    <View
                        style={{
                            width: '100%',
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text style={{color: '#bebebe', fontSize: 14, fontWeight: 'bold'}}>No exercises added</Text>
                        <Image source={require('../../assets/images/null.png')} style={styles.null}/>
                    </View> 

                    : 
                    
                    <View>
                        {
                            exercises.map((exercise, index) => {
                                return(
                                    <View style={styles.foodList} key={index}>
                                        <View style={{width: 40, height: 40, borderRadius: 3, backgroundColor: '#ddd', justifyContent: 'center', alignItems: 'center'}}>
                                            <Image source={require('../../assets/images/cardio.png')} style={styles.icon} />
                                        </View>
                                        <View>
                                            <Text style={styles.foodText}>{exercise.exercise}</Text>
                                            <Text style={{color: '#333', fontSize: 10, marginLeft: 10, marginTop: 5}}>Duration: {exercise.duration} minutes | Intensity: {exercise.intensity}</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }

                        <View style={styles.burnedBox}>
                            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'red'}}>{caloriesBurn} kcal</Text>
                            <Text>Total Calories Burned</Text>
                        </View>

                    </View>
                }
            </View>

            <View style={{height: 40}}></View>
        </ScrollView>
    )
}

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({

    title: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
      marginHorizontal: 25, 
    },
  
    macronutrientsContainer: {
      height: 190,
      width: '100%',
      paddingVertical: 5,
    }, 
  
    macronutrientBox: {
      width: 250,
      height: 140, 
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
      height: 140, 
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
      height: 140, 
      margin: 5,
      padding: 15,
      right: 20,
      left: 20,
      borderRadius: 15,
      shadowColor: '#ccc',
      shadowOffset: {width: 4, height: 4},
      shadowOpacity: 0.8,
    }, 

    foodList: {
        width: screenWidth - 50,
        height: 50,
        backgroundColor: '#FFF',
        marginVertical: 2,
        borderRadius: 2,
        alignSelf: 'center',
        padding: 5,

        flexDirection: 'row'

    },

    foodText: {
        fontSize: 14, 
        marginLeft: 10,
        color: '#0CA036',
        fontWeight: 'bold'
    },

    icon: {
        width: 25, 
        height: 25,
        opacity: 0.7
    }, 

    null: {
        width: 50,
        height: 50,
        opacity: 0.1,
        marginTop: 10
    },

    burnedBox: {
        width: '100%',
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }

    
  })
  export default Summary