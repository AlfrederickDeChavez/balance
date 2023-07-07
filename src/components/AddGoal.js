import { useState } from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddGoal = ({goals, setGoals}) => {
    
    const [goal, setGoal] = useState('')

    const submitGoal = () => {

        if(goal != ''){ 
            setGoals([...goals, {date: new Date().toLocaleDateString(), goal: goal}])
            AsyncStorage.setItem('goals', JSON.stringify([...goals, {date: new Date().toLocaleDateString(), goal: goal}]))
            setGoal('')
        }
    }

    return (
    <View style={styles.addGoalContainer}>
        <Text style={styles.goalTitle}>Set a Goal</Text>
        <TextInput 
            placeholder="Add Title"
            style={styles.goalInput}
            onChangeText={(val) => setGoal(val)}
            value={goal}
        />
        <TouchableOpacity 
            style={styles.submitGoal}
            onPress={() => submitGoal()}
        >
            <Text style={styles.saveGoal}>Save Goal</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    addGoalContainer: {
        width: '100%',
        height: '100%',
        padding: 20,
    },

    goalTitle: {
        width: '100%',
        backgroundColor: '#063b00',
        fontSize: 20,
        fontWeight: '700',
        textTransform: 'uppercase',
        color: '#fff', 
        paddingHorizontal: 10,
        paddingVertical: 5,
        textAlign: 'center'
    }, 

    goalInput: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: 'green',
        color: '#fff',
        marginVertical: 15,
        height: 30,
    },

    submitGoal: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 70,
        width: '70%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#0ca'
    },

    saveGoal: {
        fontSize: 18,
        fontWeight: '800',
        color: '#0CA',
        textTransform: 'uppercase'
    }
})

export default AddGoal