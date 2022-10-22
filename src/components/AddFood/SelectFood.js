import { Ionicons } from '@expo/vector-icons';
import React, { useState} from 'react'
import {View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Foods } from '../../database/FoodNutrientContent';


const SelectFood = ({filterFoodToAdd}) => {

    const [selectedCategory, setSelectedCategory] = useState('') 
    const [selectedFood, setSelectedFood] = useState(null) 

    const [foodNames, setFoodNames] = useState([])
    const foodCategories = [
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

  return (
    <>
    <View style={styles.dropdownContainer}>

                {/* Food Category Options */}

                <Text style={styles.nameText}>Category</Text>
                <SelectDropdown
                    data={foodCategories}
                    onSelect={(selectedItem, index) => {
                        filterFoods(selectedItem)
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

                <Text style={styles.nameText}>Name</Text>
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
            <View style={styles.numericInputFormControl}>
                <View style={styles.numericInputContainer}> 

                    {/* Amount of food - grams */}

                    <Text style={styles.amountText}>Amount</Text>
                    <View style={
                        {
                        flexDirection: 'row',
                        alignItems: 'flex-end'
                        }}>
                        <TextInput 
                            keyboardType='numeric'
                            style={styles.amountInput}
                            placeholder='0.0'
                        />
                         <Text style={{
                            color: '#fff',
                            marginLeft: 3,
                        }}>grams</Text>
                    </View>

                </View>
            </View>
            <View style={styles.numericInputContainer}>

                {/* Food Quantity */}

                <Text style={styles.amountText}>Quantity</Text>
                <TextInput 
                    keyboardType='numeric'
                    style={styles.amountInput}
                    placeholder='0'
                />
            </View>
    </>
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