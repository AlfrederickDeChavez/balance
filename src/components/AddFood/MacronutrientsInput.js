import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from "react-native"
import { useState } from "react"

const MacronutrientsInput = ({foodToAdd, setFoodToAdd}) => {

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.macronutrientsView}>
                <View style={styles.macronutrientsContent}> 
                    <View style={styles.leftView}>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Calories</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0'
                                value={foodToAdd.Calories}
                                onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Calories: val}) : setFoodToAdd({...foodToAdd, Calories: 0})}}
                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Protein</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0'
                                value={foodToAdd.Protein}
                                onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Protein: val}) : setFoodToAdd({...foodToAdd, Protein: 0})}}
                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Dietary fiber</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0'
                                value={foodToAdd.DietaryFiber}
                                onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, DietaryFiber: val}) : setFoodToAdd({...foodToAdd, DietaryFiber: 0})}}
                            />
                        </View>
                    </View>
                </View>      
            </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    macronutrientsView: {
        width: '100%',
        marginVertical: 10,

    },

    macronutrientsLabel: {
        width: '100%',
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: '#063b00',
        paddingHorizontal: 15,
        paddingVertical: 5,

    },

    macronutrientsContent: {
        flexDirection: 'row'
    },

    leftView: {
        width: '50%',
    },

    rightView: {
        width: '50%',
    },

    nutrientInputBox: {
        flexDirection: 'row',
        width: '100%',
        padding: 5,
        justifyContent: 'flex-end',
        alignItems: 'baseline',
        marginBottom: 5,
    },

    nutrientInput: {
        backgroundColor: 'green',
        width: '40%',
        paddingHorizontal: 5,
        paddingVertical: 8,
        color: '#fff',
    },

    nutrientName: {
        textAlign: 'right',
        marginRight: 5,
        color: '#fff',
        fontSize: 14,
        textTransform: 'capitalize'

    }
})

export default MacronutrientsInput