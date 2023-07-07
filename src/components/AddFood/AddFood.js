import { Ionicons } from '@expo/vector-icons';
import React , {useContext, useState } from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, Text} from 'react-native';
import InsertFood from './InsertFood';
import SearchResult from './SearchResult';
import SelectFood from './SelectFood'; 
import { Foods } from '../../database/FoodNutrientContent';
import { Foods100g } from '../../database/food';

import ContentContext from '../../context/ContentContext';
import AuthContext from '../../context/AuthContext';
import Scanner from './Scanner';
import ConfirmAlert from './ConfirmAlert';

const AddFood = () => {

    // CONTEXT
    const [visible, setVisible] = useState(false)

    
    const [quantity, setQuantity] = useState(1)
    const [measure, setMeasure] = useState(100)
    const [measurement, setMeasurement] = useState('Per serving')

    // FOOD
    const [foodToAdd, setFoodToAdd] = useState(
        {
            Calcium: 0,
            Calories: 0,
            Category: "",
            Chloride: 0,
            DietaryFiber: 0,
            Flouride: 0,
            Folate: 0,
            Iodine: 0,
            Iron: 0,
            Magnesium: 0,
            Name: "",
            Niacin: 0,
            Phosphorus: 0,
            Potassium: 0,
            Protein: 0,
            Riboflavin: 0,
            Selenium: 0,
            Sodium: 0,
            Thiamin: 0,
            Vitamin_A: 0,
            Vitamin_B12: 0,
            Vitamin_B6: 0,
            Vitamin_C: 0,
            Vitamin_D: 0,
            Vitamin_E: 0,
            Vitamin_K: 0,
            Zinc: 0,
            Quantity: 1,
        }
    )

    // NAVIGATION STATE
    const [selectFood, setSelectFood] = useState(true)
    const [insertFood, setInsertFood] = useState(false)
    const [scanBarcode, setScanBarcode] = useState(false)
    const [searching, setSearching] = useState(false)

    // NAVIGATION FUNCTIONS
    const focusSearch = () => {
        setSelectFood(false)
        setInsertFood(false)
        setScanBarcode(false)
        setSearching(true)
    }

    const activateSelectFood = () => {
        setSelectFood(true)
        setInsertFood(false)
        setScanBarcode(false)
        setSearching(false)

    }

    const activateInsertFood = () => {
        setSelectFood(false)
        setInsertFood(true)
        setScanBarcode(false)
        setSearching(false)

    }

    const activateScanBarcode = () => {
        setSelectFood(false)
        setInsertFood(false)
        setScanBarcode(true)
        setSearching(false)

    }

    const [openCamera, setOpenCamera] = useState(false)

    // SEND FOOD
    const filterFoodToAdd = (category, name) => {
        if(measurement == 'Per serving') {
            const foodtoadd = Foods.filter(food => food.Category == String(category) && food.Name == String(name))[0]
            setFoodToAdd({...foodtoadd, Quantity: quantity}) 
        } else {
            const foodtoadd = Foods100g.filter(food => food.Category == String(category) && food.Name == String(name))[0]
            setFoodToAdd({...foodtoadd, Quantity: quantity}) 
        }
        
    }
 
    const confirmFoodAdd = () => {

        if (foodToAdd.Name){
            if (measurement == 'Per serving') {
                setVisible(true)
            } else {
                setFoodToAdd({...foodToAdd, 
                    Calories: ((foodToAdd.Calories * measure) / 100).toFixed(1),
                    Chloride: ((foodToAdd.Chloride * measure) / 100).toFixed(1),
                    DietaryFiber: ((foodToAdd.DietaryFiber * measure) / 100).toFixed(1),
                    Flouride: ((foodToAdd.Flouride * measure) / 100).toFixed(1),
                    Folate: ((foodToAdd.Folate * measure) / 100).toFixed(1),
                    Iodine: ((foodToAdd.Iodine * measure) / 100).toFixed(1),
                    Iron: ((foodToAdd.Iron * measure) / 100).toFixed(1),
                    Magnesium: ((foodToAdd.Magnesium * measure) / 100).toFixed(1),
                    Niacin: ((foodToAdd.Niacin * measure) / 100).toFixed(1),
                    Phosphorus: ((foodToAdd.Phosphorus * measure) / 100).toFixed(1),
                    Potassium: ((foodToAdd.Potassium * measure) / 100).toFixed(1),
                    Protein: ((foodToAdd.Protein * measure) / 100).toFixed(1),
                    Riboflavin: ((foodToAdd.Riboflavin * measure) / 100).toFixed(1),
                    Selenium: ((foodToAdd.Selenium * measure) / 100).toFixed(1),
                    Sodium: ((foodToAdd.Sodium * measure) / 100).toFixed(1),
                    Thiamin: ((foodToAdd.Thiamin * measure) / 100).toFixed(1),
                    Vitamin_A: ((foodToAdd.Vitamin_A * measure) / 100).toFixed(1),
                    Vitamin_B12: ((foodToAdd.Vitamin_B12 * measure) / 100).toFixed(1),
                    Vitamin_B6: ((foodToAdd.Vitamin_B6 * measure) / 100).toFixed(1),
                    Vitamin_C: ((foodToAdd.Vitamin_C * measure) / 100).toFixed(1),
                    Vitamin_D: ((foodToAdd.Vitamin_D * measure) / 100).toFixed(1),
                    Vitamin_E: ((foodToAdd.Vitamin_E * measure) / 100).toFixed(1),
                    Vitamin_K: ((foodToAdd.Vitamin_K * measure) / 100).toFixed(1),
                    Zinc: ((foodToAdd.Zinc * measure) / 100).toFixed(1),
                    Quantity: quantity
                }) 
                setVisible(true)
            }
        }

        console.log(foodToAdd.Calories)
        
        
    }

    const foods = [
        'Fruits',
        'Vegetables',
        'Vegetarian',
        'Apple',
        'Orange'
    ]

    const [found, setFound] = useState([])

    const find = (val) => {
        setFound(Foods.filter((food) => {
            return food.Name.toLowerCase().startsWith(val.toLowerCase())
        }))
    }
        
    

    return (
        <View style={styles.container}>

            {/* Search for food to input */}

            <View>
                <TextInput 
                    style={{
                        width: '100%',
                        height: 30,
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        marginBottom: 15,
                        backgroundColor: 'green',
                        color: '#fff'
                    }}
                    placeholder='Search food'  
                    onFocus={focusSearch}
                    onChangeText={(val) => val.length == 0 ? setFound([]) : find(val)}
                />
            </View>

            {/* Navigation Tabs */}

            <View style={styles.navigationTab}>
                <TouchableOpacity style={[styles.navigationBtn, selectFood && styles.navigationBtnActive ]}
                    onPress={activateSelectFood}
                >
                    <Text style={styles.navigationText}>Select Food</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navigationBtn, insertFood && styles.navigationBtnActive ]}
                    onPress={activateInsertFood}
                >
                    <Text style={styles.navigationText}>Insert Food</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navigationBtn, scanBarcode && styles.navigationBtnActive ]}
                    onPress={activateScanBarcode}
                >
                    <Text style={styles.navigationText}>Scan Barcode</Text>
                </TouchableOpacity>
            </View>

            {/* Selecting food to input */}
            {
                selectFood && <SelectFood 
                                filterFoodToAdd={filterFoodToAdd}
                                measure={measure}
                                setMeasure={setMeasure}
                                measurement={measurement}
                                setMeasurement={setMeasurement}
                            />
            }

            {/* Inserting food to input */}
            {
                insertFood && <InsertFood foodToAdd={foodToAdd} setFoodToAdd={setFoodToAdd}/>
            }

            {/* Scan Barcode to input */}
            {
                scanBarcode && 
                
                <View style={styles.scanBarcodeView}>
 
                    {
                        openCamera ? 
                        <Scanner visible={visible} setVisible={setVisible} setOpenCamera={setOpenCamera} setFoodToAdd={setFoodToAdd}/> : 
                        <TouchableOpacity
                            style={styles.openCameraBtn}
                            onPress={() => setOpenCamera(true)}
                        >
                            <Ionicons name='scan' style={styles.cameraIcon}/>
                            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Open Camera</Text>
                        </TouchableOpacity>
                    }
                    
                </View>
            }

            

            
            
            {/* Searching for a food to input */}

            {
                searching && <SearchResult found={found} setFound={setFound} setFoodToAdd={setFoodToAdd} setVisible={setVisible}/>
            }

            {
                // <FoodDetails />
            }


            {/* Add Button - Sends a POST Request to the Server */}

            {
                ( selectFood || insertFood ) && 

                    <TouchableOpacity 
                    style={styles.addFoodBtn}
                    onPress={confirmFoodAdd}
                >
                    <Text style={styles.addFoodText}>Add</Text>
                </TouchableOpacity>
            }

             

            <ConfirmAlert 
                visible={visible}
                setVisible={setVisible}
                food={foodToAdd}
                setFood={setFoodToAdd}
                setQuantity={setQuantity}
                quantity={quantity}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: '5%',
        backgroundColor: '#0CA036',
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

    navigationTab: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 40,
    },

    navigationBtn: {
        width: '33.33333%',
        alignItems: 'center',
        paddingVertical: 5, 
        borderWidth: 3,
        borderColor: '#fff',
        justifyContent: 'center'
    },

    navigationBtnActive: {
        backgroundColor: '#dedede',
    },

    navigationText: {
        color: '#0CA036',
        fontWeight: 'bold',
        fontSize: 12,
    },

    dFlex: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    scanBarcodeView: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    cameraIcon: {
        alignSelf: 'center',
        marginBottom: 10,
        color: '#fff',
        fontSize: 80,
    },

    addFoodBtn: {
        position: 'absolute',
        bottom: 30,
        width: '90%',
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignSelf: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },

    addFoodText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0CA036',
        textTransform: 'uppercase'
    }

})

export default AddFood