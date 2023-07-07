import { Text, View, Modal, StyleSheet, Animated, TouchableOpacity, Dimensions, Image} from "react-native"
import { useState, useEffect, useRef, useContext} from "react"
import ContentContext from "../context/ContentContext"
import { exercises } from "../database/exercises"

const ConfirmExercise = ({visible, setVisible, exercise, duration, intensity}) => {

    const {addExercise} = useContext(ContentContext)
    const [showAlert, setShowAlert] = useState(visible)
    const scaleValue = useRef(new Animated.Value(0)).current

    useEffect(() => {
        toggleModal()
    }, [visible])

    const toggleModal = () => {
        if (visible) {
            setShowAlert(true)
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true      
            }).start()
        } else {
            setTimeout(() => setShowAlert(false), 200)
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true      
            }).start()
        }
    }

    const confirm = () => {
        addExercise({
            exercise: exercise,
            intensity: intensity,
            duration: duration,
        })

        setTimeout(() => {
            setVisible(false)
        }, 1000)
    }

    return(
        <Modal transparent visible={showAlert}>
            <View style={styles.modal_bg}>
                <Animated.View style={[styles.modal_container, {transform: [{scale: scaleValue}]}]}>
                    <View style={styles.exerciseView}>
                        <View style={styles.iconBg}>
                            <Image source={require('../assets/exercises/cardio.png')} style={styles.exerciseIcon}/>
                        </View>    
                        <View style={styles.detailsView}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#333'}}>{exercise}</Text>
                            <Text style={{color: '#555', fontSize: 10}}>Duration: {duration} minutes</Text>
                            <Text style={{color: '#555', fontSize: 10}}>Intensity: {intensity}</Text>
                        </View>            
                    </View>
                    <TouchableOpacity onPress={() => confirm()} style={styles.confirmBtn}>
                        <Text style={{color: '#FFF', fontSize: 16, fontWeight: 'bold', textTransform: 'uppercase'}}>Confirm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setVisible(false)} style={styles.cancelBtn}>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </Modal>
    )
}

const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    modal_bg: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    modal_container: {
        width: '85%',
        maxHeight: screenHeight,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15,
        elevation: 20,
        borderRadius: 5,
    },

    confirmBtn: {
        width: '100%',
        height: 40,
        backgroundColor: '#0CA', 
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    cancelBtn: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    exerciseView: {
        width: '100%',
        height: 100,
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row'
    }, 

    iconBg: {
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        opacity: 0.8,
        borderRadius: 5,
    },

    exerciseIcon: {
        width: 60,
        height: 60,
        opacity: 0.5,
        padding: 5,
    },

    detailsView: {
        height: 90,
        paddingLeft: 15,
        paddingTop: 5,
    }
})

export default ConfirmExercise