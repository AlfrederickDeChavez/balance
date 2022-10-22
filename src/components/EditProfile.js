import { useContext, useState } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions} from 'react-native'
import AuthContext from '../context/AuthContext'
import RadioButtonGroup, {RadioButtonItem} from 'expo-radio-button';

const EditProfile = () => {

    const {user, updateProfile} = useContext(AuthContext)
    const [username, setUsername] = useState(user.username)
    const [gender, setGender] = useState(user.gender)
    const [age, setAge] = useState(user.age)
    const [height, setHeight] = useState(user.height)
    const [weight, setWeight] = useState(user.weight)
    
    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={{color: '#ccc', alignSelf: 'center', }}>Edit your profile</Text>
            </View>

            <View style={styles.form}>
                <View style={styles.formControl}>
                    <Text style={{color: '#ccc', marginBottom: 10}}>Email</Text>
                    <TextInput 
                        value={user.email}
                        editable={false}
                        style={styles.emailInput}
                    />
                </View>
                <View style={styles.formControl}>
                    <Text style={{color: '#ccc', marginBottom: 10}}>Edit username</Text>
                    <TextInput 
                        style={styles.usernameInput}
                        value={username}
                        onChangeText={(value) => setUsername(value)}
                    />
                </View>
                <View style={styles.formControl}>
                    <Text style={{color: '#ccc', marginBottom: 10}}>Sex</Text>
                    <View>
                      <RadioButtonGroup
                        containerStyle={styles.genderInput}
                        radioBackground='#37EF68'
                        selected={gender}
                        onSelected={(value) => setGender(value)}
                      >
                          <RadioButtonItem
                            label={<Text style={styles.genderLabel}>Male</Text>}
                            value='Male'
                            style={styles.genderOption}
                          />
                          <RadioButtonItem
                            label={<Text style={styles.genderLabel}>Female</Text>}
                            value='Female'
                            style={styles.genderOption}
                          />
                      </RadioButtonGroup>
                    </View>
                </View>

                <View style={styles.formControl}>
                    <Text style={{color: '#ccc', marginBottom: 10}}>Age</Text>
                    <TextInput 
                        style={styles.ageInput}
                        value={age}
                        keyboardType='numeric'
                        onChangeText={(value) => setAge(value)}
                    />
                </View>
                <View style={{flexDirection: 'row', width: '100%'}}>
                    <View style={{marginTop: 15, width: '50%',}}>
                        <Text style={{color: '#ccc', marginBottom: 10}}>Height</Text>
                        <TextInput 
                            style={styles.heightInput}
                            value={height}
                            keyboardType='numeric'
                            onChangeText={(value) => setHeight(value)}
                        />
                    </View>

                    <View style={{marginTop: 15, width: '50%'}}>
                    <Text style={{color: '#ccc', marginBottom: 10}}>Weight</Text>
                    <TextInput 
                        style={styles.weightInput}
                        value={weight}
                        keyboardType='numeric'
                        onChangeText={(value) => setWeight(value)}
                    />
                </View>
                </View>
            </View> 

            <TouchableOpacity style={styles.updateBtn}
                onPress={() => updateProfile(username, gender, age, height, weight)}
            >
                <Text style={{color: 'green', fontWeight: 'bold', textTransform: 'uppercase'}}>Update profile</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 20,
    },

    titleView: {
        width: '100%',
        paddingVertical: 5,
        backgroundColor: '#063b00',
        
    },

    form: {
        marginBottom: 50
    },

    formControl: {
        marginTop: 15,
    },
    
    emailInput: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: 'green',
        color: '#a0a0a0',
        height: 30,
    },

    usernameInput: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: 'green',
        color: '#ccc',
        height: 30,

    },

    genderInput: {
    flexDirection: 'row', 
    },

    genderOption: {
    marginRight: 5,
    },

    genderLabel: {
    marginRight: 15,
    color: '#ccc'
    },

    ageInput: {
        width: '40%',
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: 'green',
        color: '#ccc',
        height: 30,

    },

    weightInput: {
        width: '80%',
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: 'green',
        color: '#ccc',
        height: 30,

    },

    heightInput: {
        width: '80%',
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: 'green',
        color: '#ccc',
        height: 30,

    },

    updateBtn: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEE',
        borderRadius: 5,
        paddingVertical: 10,
        alignSelf: 'center',

    }
})

export default EditProfile