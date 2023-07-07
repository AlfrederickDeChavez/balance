import { Ionicons } from '@expo/vector-icons';
import React, { useState} from 'react'
import {View, StyleSheet, TextInput, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Foods } from '../../database/FoodNutrientContent';
import { Foods100g } from '../../database/food';


const SelectFood = ({filterFoodToAdd, measure, setMeasure, measurement, setMeasurement}) => {

    const [selectedCategory, setSelectedCategory] = useState('') 
    const [selectedFood, setSelectedFood] = useState(null) 
    const [foodNames, setFoodNames] = useState([])
    const foodCategories = [
        'Filipino Food',
        'Fruits',
        'Vegetables',
        'Proteins',
        'Dairy Products', 
        'Spices and Herbs',
        'Fats and Oils',
        'Poultry Products',
        'Nut and Seed Products',
        'Beverages',
        'Baked Products',
        'Snacks',
        'Sausage and Luncheon Meats',
        'Cereal Grains and Pasta',
        'Sweets'
    ]

    const foodCategories100g = [
        'Fruits',
        'Vegetables',
        'Proteins',
        'Dairy Products', 
        'Spices and Herbs',
        'Fats and Oils',
        'Poultry Products',
        'Nut and Seed Products',
        'Beverages',
        'Baked Products',
        'Snacks',
        'Sausage and Luncheon Meats',
        'Cereal Grains and Pasta',
        'Sweets'
    ]

    const filterFoods = (item) => {
        setSelectedCategory(item)
      
        const filteredFood = Foods.filter(food => food.Category == item)
        const names = []
        filteredFood.map(food => names.unshift(food.Name))
        setFoodNames(names)    
    }

    const filterFoods100 = (item) => {
        setSelectedCategory(item)
        const filteredFood = Foods100g.filter(food => food.Category == item)
        const names = []
        filteredFood.map(food => names.unshift(food.Name))
        setFoodNames(names)
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>

            <View style={styles.dropdownContainer}>

                {/* Food Category Options */}

                <Text style={styles.nameText}>Select Measurement</Text>
                <SelectDropdown
                    data={['Per serving', 'Per 100 grams']}
                    onSelect={(selectedItem, index) => {
                        setSelectedCategory('')
                        setSelectedFood(null)
                        setMeasurement(selectedItem)
                    }}
                    defaultButtonText={<View style={styles.dFlex}><Text style={{fontSize: 12, color: '#0CA036', fontWeight: 'bold'}}>Per serving</Text><Ionicons name='caret-down-outline' style={{fontSize: 12, color: '#0CA036'}}/></View>}
                    buttonStyle={styles.nameBtn}
                    buttonTextStyle={{color: '#0CA036', fontSize: 12, fontWeight: 'bold'}}
                    rowStyle={styles.rowStyle}
                    rowTextStyle={styles.rowTextStyle}
                    dropdownStyle={styles.dropdownStyle}
                >
                    <Ionicons name='arrow-right'/>
                </SelectDropdown>
            </View>
            <View style={styles.dropdownContainer}>

                {/* Food Category Options */}

                <Text style={styles.nameText}>Food Category</Text>
                <SelectDropdown
                    data={measurement == 'Per serving' ? foodCategories : foodCategories100g}
                    onSelect={(selectedItem, index) => {
                        if(measurement == 'Per serving') {
                            filterFoods(selectedItem)
                        } else {
                            filterFoods100(selectedItem)
                        }
                        
                    }}
                    defaultButtonText={<View style={styles.dFlex}><Text style={{fontSize: 12, color: '#0CA036', fontWeight: 'bold'}}>Food Category</Text><Ionicons name='caret-down-outline' style={{fontSize: 12, color: '#0CA036'}}/></View>}
                    buttonStyle={styles.nameBtn}
                    buttonTextStyle={{color: '#0CA036', fontSize: 12, fontWeight: 'bold'}}
                    rowStyle={styles.rowStyle}
                    rowTextStyle={styles.rowTextStyle}
                    dropdownStyle={styles.dropdownStyle}
                >
                    <Ionicons name='arrow-right'/>
                </SelectDropdown>
            </View>
            <View style={styles.dropdownContainer}>

                {/* Food Name options */}

                <Text style={styles.nameText}>Food Name</Text>
                <SelectDropdown
                    data={foodNames}
                    onSelect={(selectedItem, index) => {
                        setSelectedFood(selectedItem)
                        filterFoodToAdd(selectedCategory, selectedItem)
                    }}
                    defaultButtonText={<View style={styles.dFlex}><Text style={{fontSize: 12, color: '#0CA036', fontWeight: 'bold'}}>Food Name</Text><Ionicons name='caret-down-outline' style={{fontSize: 12, color: '#0CA036'}}/></View>}
                    buttonStyle={styles.nameBtn}
                    buttonTextStyle={{color: '#0CA036', fontSize: 12, fontWeight: 'bold'}}
                    rowStyle={styles.rowStyle}
                    rowTextStyle={styles.rowTextStyle}
                    dropdownStyle={styles.dropdownStyle}
                >
                    <Ionicons name='arrow-right'/>
                </SelectDropdown>
            </View>

           

            {
                measurement == 'Per 100 grams' && 
                    <View>
                        <Text style={{color: '#ddd', fontSize: 16, marginBottom: 5 }}>Amount</Text>
                        <TextInput
                            style={{
                                width: '100%',
                                height: 30,
                                paddingVertical: 5,
                                paddingHorizontal: 10,
                                color: '#fff',
                                borderRadius: 3,
                                backgroundColor: 'green'
                            }}

                            placeholder='Enter amount in grams (g)'
                            keyboardType='numeric'
                            onChangeText={(val) => setMeasure(parseFloat(val))}
                        />
                    </View>
                
            }
            
        </View>  
    </TouchableWithoutFeedback>
  )

 
}


// STYLES
 
const styles = StyleSheet.create({
    dropdownContainer: {
        marginVertical: 15,
    },

    nameText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
        textTransform: 'uppercase',
        width: '100%',
        backgroundColor: '#063b00',
        padding: 5,
    }, 

    measureText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
        textTransform: 'uppercase',
        width: '50%',
        padding: 5,
    },

    amountText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
        textTransform: 'uppercase',
        width: '50%',
        padding: 5,
    },

    nameBtn: {
        backgroundColor: '#fff', 
        width: '100%', 
        height: 25, 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
    },

    rowStyle: {
        paddingVertical: 5,
        height: 35,
        alignItems: 'center',
        backgroundColor: '#0CA036'
    },

    rowTextStyle: {
        fontSize: 12, 
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'capitalize'
    },

    dropdownStyle: {
        backgroundColor: '#0CA036',
        paddingVertical: 5,
    },

    dFlex: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },


    searchContainer: {
        width: '100%',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
    }, 

    searchInput: {
        width: '100%',
        height: 20,
        backgroundColor: 'green',
        paddingHorizontal: 15,
        paddingVertical: 20,
    },

    numericInputFormControl: {
        width: '100%',
        flexDirection: 'row', 
        marginBottom: 20,
    },

    numericInputContainer: {
        width: '50%',
    },

    measureInput: {
        backgroundColor: 'green',
        width: '70%',
        height: 35,
        paddingHorizontal: 15, 
        color: '#fff'
    },

    amountInput: {
        backgroundColor: 'green',
        width: '70%',
        height: 30,
        paddingHorizontal: 15, 
        color: '#fff'
    },

    quantityInput: {

    },


  })

export default SelectFood