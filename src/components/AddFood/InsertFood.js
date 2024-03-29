import { useState } from "react"
import { View, StyleSheet, TextInput, Text ,TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform} from "react-native"
import MacronutrientsInput from "./MacronutrientsInput"
import MineralsInput from "./MineralsInput"
import VitaminsInput from "./VitaminsInput"

const InsertFood = ({foodToAdd, setFoodToAdd}) => {

    const [inputMacros, setInputMacros] = useState(true)
    const [inputVitamins, setInputVitamins] = useState(false)
    const [inputMinerals, setInputMinerals] = useState(false)


    const activateMacros = () => {
        setInputMacros(true)
        setInputVitamins(false)
        setInputMinerals(false)
    }

    const activateVitamins = () => {
        setInputMacros(false)
        setInputVitamins(true)
        setInputMinerals(false)
    }

    const activateMinerals = () => {
        setInputMacros(false)
        setInputVitamins(false)
        setInputMinerals(true)
    }
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <View>
            <TextInput
                style={styles.foodNameInput}
                placeholder='Enter food name'
                onChangeText={(val) => setFoodToAdd({...foodToAdd, Name: `${val}`})}
                value={String(foodToAdd.Name)}
            />

            <Text style={styles.nutritionLabel}>Nutritional Content</Text>

            <View style={styles.nutrientsNavigation}>
                <TouchableOpacity
                    style={[styles.nutrientsNavigationBtn, inputMacros && styles.nutrientsNavigationBtnActive]}
                    onPress={activateMacros}
                >
                    <Text style={styles.nutrientsNavigationText}>Macronutrients</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.nutrientsNavigationBtn, {marginHorizontal: 0.5,}, inputVitamins && styles.nutrientsNavigationBtnActive]}
                    onPress={activateVitamins}
                >
                    <Text style={styles.nutrientsNavigationText}>Vitamins</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.nutrientsNavigationBtn, inputMinerals && styles.nutrientsNavigationBtnActive]}
                    onPress={activateMinerals}
                >
                    <Text style={styles.nutrientsNavigationText}>Minerals</Text>
                </TouchableOpacity>
            </View>
            {
                inputMacros && <MacronutrientsInput setFoodToAdd={setFoodToAdd} foodToAdd={foodToAdd}/>
            }
                
            {
                inputVitamins && <VitaminsInput setFoodToAdd={setFoodToAdd} foodToAdd={foodToAdd}/>
            }
            
            {
                inputMinerals && <MineralsInput setFoodToAdd={setFoodToAdd} foodToAdd={foodToAdd} />
            }
        </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({

    foodNameInput: {
        width: '100%',
        height: 30,
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: 'green',
        marginVertical: 10,
        color: '#FFF',
    },

    nutritionLabel: {
        width: '100%',
        backgroundColor: '#063b00',
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        paddingVertical: 5,
        paddingHorizontal: 15,
    },

    nutrientsNavigation: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 10,
    },

    nutrientsNavigationBtn: {
        width: '33.33333%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#063b00'
    },

    nutrientsNavigationBtnActive: {
        backgroundColor: '#063b00'
    },

    nutrientsNavigationText: {
        color: '#fff',
    }
    
})

export default InsertFood
