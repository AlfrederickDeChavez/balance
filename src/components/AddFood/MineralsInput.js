import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform } from "react-native"

const MineralsInput = ({foodToAdd, setFoodToAdd}) => {
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.mineralsView}>
                <View style={styles.mineralsContent}>
                    <View style={styles.leftView}>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Iron</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0mg'
                                value={foodToAdd.Iron}
                                onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Iron: val}) : setFoodToAdd({...foodToAdd, Iron: 0})}}
                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Zinc</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0mg'
                                value={foodToAdd.Zinc}
                                onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Zinc: val}) : setFoodToAdd({...foodToAdd, Zinc: 0})}}
                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Selenium</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0mg'
                                value={foodToAdd.Selenium}
                                onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Selenium: val}) : setFoodToAdd({...foodToAdd, Selenium: 0})}}
                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                                <Text style={styles.nutrientName}>Iodine</Text>
                                <TextInput 
                                    style={styles.nutrientInput}
                                    keyboardType='numeric'
                                    placeholder='0.0mg'
                                    value={foodToAdd.Iodine}
                                    onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Iodine: val}) : setFoodToAdd({...foodToAdd, Iodine: 0})}}
                                />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Calcium</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0mg'
                                value={foodToAdd.Calcium}
                                onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Calcium: val}) : setFoodToAdd({...foodToAdd, Calcium: 0})}}
                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Magnesium</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0mg'
                                value={foodToAdd.Magnesium}
                                onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Magnesium: val}) : setFoodToAdd({...foodToAdd, Magnesium: 0})}}
                            />
                        </View>
                    </View>
                    <View style={styles.rightView}>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Phosphorus</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0mg'
                                value={foodToAdd.Phosphorus}
                                onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Phosphorus: val}) : setFoodToAdd({...foodToAdd, Phosphorus: 0})}}
                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Flouride</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0mg'
                                value={foodToAdd.Flouride}
                                onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Flouride: val}) : setFoodToAdd({...foodToAdd, Flouride: 0})}}
                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Sodium</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0mg'
                                value={foodToAdd.Sodium}
                                onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Sodium: val}) : setFoodToAdd({...foodToAdd, Sodium: 0})}}
                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                                <Text style={styles.nutrientName}>Chloride</Text>
                                <TextInput 
                                    style={styles.nutrientInput}
                                    keyboardType='numeric'
                                    placeholder='0.0mg'
                                    value={foodToAdd.Chloride}
                                    onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Chloride: val}) : setFoodToAdd({...foodToAdd, Chloride: 0})}}
                                />
                        </View>
                        <View style={styles.nutrientInputBox}>
                                <Text style={styles.nutrientName}>Potassium</Text>
                                <TextInput 
                                    style={styles.nutrientInput}
                                    keyboardType='numeric'
                                    placeholder='0.0mg'
                                    value={foodToAdd.Potassium}
                                    onChangeText={(val) => { val ? setFoodToAdd({...foodToAdd, Potassium: val}) : setFoodToAdd({...foodToAdd, Potassium: 0})}}
                                />
                        </View>
                    </View>
                </View>      
            </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    mineralsView: {
        width: '100%',
        marginVertical: 10,
        paddingBottom: 15,

    },

    mineralsLabel: {
        width: '100%',
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: '#063b00',
        paddingHorizontal: 15,
        paddingVertical: 5,

    },

    mineralsContent: {
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
        color: '#FFF',
        height: 25,
        fontSize: 10
    },

    nutrientName: {
        textAlign: 'right',
        marginRight: 5,
        color: '#fff',
        fontSize: 10,
        textTransform: 'capitalize'

    }
})

export default MineralsInput