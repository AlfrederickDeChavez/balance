import { Ionicons } from '@expo/vector-icons';
import React , {useContext, useState } from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, Text} from 'react-native';
import InsertFood from './InsertFood';
import SearchResult from './SearchResult';
import SelectFood from './SelectFood'; 
import { foods } from '../database/food';

import ContentContext from '../context/ContentContext';
import AuthContext from '../context/AuthContext';
import Scanner from './Scanner';

const AddFood = () => {

    //NUTRIENTS STATE 
    const [foodName, setFoodName] = useState('')
    const [foodCategory, setFoodCategory] = useState('')
    const [calories, setCalories] = useState(0)
    const [protein, setProtein] = useState(0)
    const [fiber, setFiber] = useState(0)
    const [vitaminA, setVitaminA] = useState(0)
    const [vitaminD, setVitaminD] = useState(0)
    const [vitaminE, setVitaminE] = useState(0)
    const [vitaminK, setVitaminK] = useState(0)
    const [thiamin, setThiamin] = useState(0)
    const [riboflavin, setRiboflavin] = useState(0)
    const [niacin, setNiacin] = useState(0)
    const [vitaminB6, setVitaminB6] = useState(0)
    const [vitamin12, setVitamin12] = useState(0)
    const [folate, setFolate] = useState(0)
    const [vitaminC, setVitaminC] = useState(0)
    const [iron, setIron] = useState(0)
    const [zinc, setZinc] = useState(0)
    const [selenium, setSelenium] = useState(0)
    const [iodine, setIodine] = useState(0)
    const [calcium, setCalcium] = useState(0)
    const [magnesium, setMagnesium] = useState(0)
    const [phosphorus, setPhosphorus] = useState(0)
    const [flouride, setFlouride] = useState(0)
    const [sodium, setSodium] = useState(0)
    const [chloride, setChloride] = useState(0)
    const [potassium, setPotassium] = useState(0)

    // MEASURE
    const [amount, setAmount] = useState(0)
    const [quantity, setQuantity] = useState(0)

    // CONTEXT DATA
    const {addFood, getFoods} = useContext(ContentContext)
    const {authtokens} = useContext(AuthContext)

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

    // FOOD TO ADD STAT
    const [foodToAdd, setFoodToAdd] = useState()
    const [selectedCategory, setSelectedCategory] = useState('') 
    const [selectedFood, setSelectedFood] = useState(null) 

    // SEND FOOD
    const filterFoodToAdd = (category, name) => {
        const foodtoadd = foods.filter(food => food.Category == String(category) && food.Name == String(name))[0]
        console.log({...foodtoadd, quantity: quantity, amount: amount})  
    }

    return (
        <View style={styles.container}>

            {/* Search for food to input */}

            <View>
                <TextInput 
                    style={{
                        width: '100%',
                        height: 40,
                        paddingHorizontal: 10,
                        paddingVertical: 12,
                        marginBottom: 15,
                        backgroundColor: 'green',
                        color: '#fff'
                    }}
                    placeholder='Search food'  
                    onFocus={focusSearch}
                    
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
                            />
            }

            {/* Inserting food to input */}
            {
                insertFood && <InsertFood/>
            }

            {/* Scan Barcode to input */}
            {
                scanBarcode && 
                
                <View style={styles.scanBarcodeView}>

                    {
                        openCamera ? 
                        <Scanner setOpenCamera={setOpenCamera}/> : 
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
                searching && <SearchResult />
            }

            {
                // <FoodDetails />
            }


            {/* Add Button - Sends a POST Request to the Server */}

            <TouchableOpacity 
                style={styles.addFoodBtn}
                onPress={() => sendFood()}
            >
                <Text style={styles.addFoodText}>Add</Text>
            </TouchableOpacity>
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
    },

    navigationBtn: {
        width: '33.33333%',
        alignItems: 'center',
        paddingVertical: 10, 
        borderWidth: 3,
        borderColor: '#fff'
    },

    navigationBtnActive: {
        backgroundColor: '#dedede',
    },

    navigationText: {
        color: '#0CA036',
        fontWeight: 'bold'
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