import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback , Keyboard} from "react-native";
import SelectDropdown from 'react-native-select-dropdown';
import { useState } from "react";
import { exerciseList } from "../database/exerciseList";
import ConfirmExercise from "./ConfirmExercise";
import { Ionicons } from "@expo/vector-icons";

const AddExercise = () => {

    const [exercise, setExercise] = useState('Walking')
    const [duration, setDuration] = useState(0)
    const [intensity, setIntensity] = useState('Moderate')
    const [visible, setVisible] = useState(false)

    const intensityList = [
        'Very Light',
        'Light',  
        'Moderate',
        'Moderately Vigorous',
        'Vigorous',
        'Extremely Vigorous'
    ]
  
    // 1.5
    // 2.0
    // 3.5
    // 4.5  
    // 6
    // 10

    const add = () => {
        setVisible(true)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.typeText}>Type</Text>
            <SelectDropdown
                data={exerciseList}
                onSelect={(item, index) => {
                    setExercise(item)
                }}
                defaultButtonText={<View style={styles.dFlex}><Text style={{fontSize: 12, color: '#0CA036', fontWeight: 'bold'}}>Walking</Text><Ionicons name='caret-down-outline' style={{fontSize: 12, color: '#0CA036'}}/></View>}
                buttonStyle={styles.nameBtn}
                buttonTextStyle={{color: '#0CA036', fontSize: 12, fontWeight: 'bold'}}
                rowStyle={styles.rowStyle}
                rowTextStyle={styles.rowTextStyle}
                dropdownStyle={styles.dropdownStyle}
            >
                
            </SelectDropdown>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>

            <View style={{width: '100%', flexDirection: 'row', marginTop: 50}}>
                <View style={styles.durationView}>
                    <Text style={styles.durationText}>Duration</Text>
                    <TextInput 
                        style={styles.durationInput}
                        placeholder='minutes'
                        keyboardType="numeric"
                        onChangeText={(val) => setDuration(parseFloat(val))}
                    />

                </View>
                <View style={styles.intensityView}>
                    <Text style={styles.intensityText}>Intensity</Text>
                    <SelectDropdown
                        data={intensityList}
                        onSelect={(selectedItem, index) => {
                            setIntensity(selectedItem) 
                        }}
                        defaultButtonText={<View style={styles.dFlex}><Text style={{fontSize: 12, color: '#0CA036', fontWeight: 'bold'}}>Moderate</Text><Ionicons name='caret-down-outline' style={{fontSize: 12, color: '#0CA036'}}/></View>}
                        buttonStyle={styles.nameBtn}
                        buttonTextStyle={{color: '#0CA036', fontSize: 12, fontWeight: 'bold'}}
                        rowStyle={styles.rowStyle}
                        rowTextStyle={styles.rowTextStyle}
                        dropdownStyle={styles.dropdownStyle}
                    >
                        
                    </SelectDropdown>
                </View>
            </View>
            </View>
            </TouchableWithoutFeedback>

            <TouchableOpacity 
                style={styles.addBtn}
                onPress={() => add()}
            >
                <Text style={styles.addText}>Add</Text>
            </TouchableOpacity>

            <ConfirmExercise 
                visible={visible}
                setVisible={setVisible}
                exercise={exercise}
                duration={duration}
                intensity={intensity}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 20,
    },

    typeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
        textTransform: 'uppercase',
        width: '100%',
        backgroundColor: '#063b00',
        padding: 5,
    }, 

    durationText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
        textTransform: 'uppercase',
        width: '100%',
        backgroundColor: '#063b00',
        padding: 5,
    }, 

    intensityText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
        textTransform: 'uppercase',
        width: '100%',
        backgroundColor: '#063b00',
        padding: 5,
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

    nameBtn: {
        backgroundColor: '#fff', 
        width: '100%', 
        height: 25, 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        justifyContent: 'center'
    },

    dFlex: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
    },

    durationView: {
        width: '50%',
        paddingEnd: 15,
    }, 

    intensityView: {
        width: '50%',
        paddingStart: 15
    },

    addBtn: {
        position: 'absolute',
        bottom: 100,
        width: '90%',
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignSelf: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },

    addText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0CA036',
        textTransform: 'uppercase'
    },

    durationInput: {
        width: '100%',
        height: 30,
        borderColor: '#aaa',
        borderWidth: 1,
        color: '#fff',
        paddingHorizontal: 5,
        backgroundColor: 'green'
    }

})

export default AddExercise