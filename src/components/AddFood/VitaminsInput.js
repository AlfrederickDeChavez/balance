import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from "react-native"

const VitaminsInput = ({foodToAdd, setFoodToAdd}) => {
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.vitaminsView}>
                <View style={styles.vitaminsContent}>
                    <View style={styles.leftView}>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Vitamin A</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0mg'
                                value={foodToAdd.Vitamin_A}
                                onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Vitamin_A: val}) : setFoodToAdd({...foodToAdd, Vitamin_A: 0})}}
                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Vitamin D</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0mg'
                                value={foodToAdd.Vitamin_D}
                                onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Vitamin_D: val}) : setFoodToAdd({...foodToAdd, Vitamin_D: 0})}}
                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Vitamin E</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0mg'
                                value={foodToAdd.Vitamin_E}
                                onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Vitamin_E: val}) : setFoodToAdd({...foodToAdd, Vitamin_E: 0})}}
                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Vitamin K</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0mg'
                                value={foodToAdd.Vitamin_K}
                                onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Vitamin_K: val}) : setFoodToAdd({...foodToAdd, Vitamin_K: 0})}}
                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Thiamin</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0mg'
                                value={foodToAdd.Thiamin}
                                onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Thiamin: val}) : setFoodToAdd({...foodToAdd, Thiamin: 0})}}

                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Riboflavin</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0mg'
                                value={foodToAdd.Riboflavin}
                                onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Riboflavin: val}) : setFoodToAdd({...foodToAdd, Riboflavin: 0})}}
                            />
                        </View>
                    </View>
                    <View style={styles.rightView}>
                        <View style={styles.nutrientInputBox}>
                                <Text style={styles.nutrientName}>Niacin</Text>
                                <TextInput 
                                    style={styles.nutrientInput}
                                    keyboardType='numeric'
                                    placeholder='0.0mg'
                                    value={foodToAdd.Niacin}
                                    onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Niacin: val}) : setFoodToAdd({...foodToAdd, Niacin: 0})}}
                                />
                        </View>
                        <View style={styles.nutrientInputBox}>
                                <Text style={styles.nutrientName}>Vitamin B6</Text>
                                <TextInput 
                                    style={styles.nutrientInput}
                                    keyboardType='numeric'
                                    placeholder='0.0mg'
                                    value={foodToAdd.Vitamin_B6}
                                    onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Vitamin_B6: val}) : setFoodToAdd({...foodToAdd, Vitamin_B6: 0})}}
                                />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Vitamin B12</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0mg'
                                value={foodToAdd.Vitamin_B12}
                                onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Vitamin_B12: val}) : setFoodToAdd({...foodToAdd, Vitamin_B12: 0})}}
                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Folate</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0mg'
                                value={foodToAdd.Folate}
                                onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Folate: val}) : setFoodToAdd({...foodToAdd, Folate: 0})}}
                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Vitamin C</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0mg'
                                value={foodToAdd.Vitamin_C}
                                onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Vitamin_C: val}) : setFoodToAdd({...foodToAdd, Vitamin_C: 0})}}
                            />
                        </View>
                    </View>
                </View>      
            </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    vitaminsView: {
        width: '100%',
        marginVertical: 10, 

    },

    vitaminsLabel: {
        width: '100%',
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: '#063b00',
        paddingHorizontal: 15,
        paddingVertical: 5,

    },

    vitaminsContent: {
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
        paddingVertical: 4,
        color: '#fff',
        height: 25,
        fontSize: 10,
    },

    nutrientName: {
        textAlign: 'right',
        marginRight: 5,
        color: '#fff',
        fontSize: 10,
        textTransform: 'capitalize'

    }
})

export default VitaminsInput