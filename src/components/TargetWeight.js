import { Text, View, Modal, StyleSheet, Animated, TouchableOpacity, Dimensions, Image} from "react-native"
import { useState, useEffect, useRef, useContext} from "react"
import AuthContext from "../context/AuthContext"
import ContentContext from "../context/ContentContext"
import AsyncStorage from "@react-native-async-storage/async-storage"


const TargetWeight = ({visible, setVisible, weeks, rcalories}) => {


    const {logoutUser} = useContext(AuthContext)
    const {calories, setCalories} = useContext(ContentContext)
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

    const OK = () => {
        setCalories({...calories, recommended: rcalories.toFixed(0)})
        setVisible(false)
        AsyncStorage.setItem('calories', JSON.stringify(rcalories.toFixed(0)))
    }

    return(
        <Modal transparent visible={showAlert}>
            <View style={styles.modal_bg}>
                <Animated.View style={[styles.modal_container, {transform: [{scale: scaleValue}]}]}>
                    <Text style={{width: '100%', textAlign: 'center', marginBottom: 15, backgroundColor: '#0CA', paddingVertical: 5, color: '#fff', fontWeight: 'bold'}}>YOUR TARGET</Text>
                    <Text style={styles.confirmText}>CALORIES: {rcalories.toFixed(1)} kcal</Text>
                    <Text style={styles.confirmText}>DURATION: {weeks} week/s</Text>

                    <View style={{width: '100%', alignItems: 'center', justifyContent: 'space-evenly'}}>

                        <TouchableOpacity onPress={OK} style={styles.cancelBtn}>
                            <Text>OK</Text>
                        </TouchableOpacity>
                        
                    </View>
                    
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

    cancelBtn: {
        width: '100%',
        alignSelf: 'center',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    confirmText: {
        fontSize: 20,
        color: '#0ca036',
        marginBottom: 10,
    }
   
})

export default TargetWeight