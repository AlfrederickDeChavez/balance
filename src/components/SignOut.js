import { Text, View, Modal, StyleSheet, Animated, TouchableOpacity, Dimensions, Image} from "react-native"
import { useState, useEffect, useRef, useContext} from "react"
import AuthContext from "../context/AuthContext"


const SignOut = ({visible, setVisible}) => {


    const {logoutUser} = useContext(AuthContext)
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

    return(
        <Modal transparent visible={showAlert}>
            <View style={styles.modal_bg}>
                <Animated.View style={[styles.modal_container, {transform: [{scale: scaleValue}]}]}>
                    <Text style={styles.confirmText}>Are you sure you want to sign out?</Text>

                    <View style={{flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-evenly'}}>

                        <TouchableOpacity onPress={() => setVisible(false)} style={styles.cancelBtn}>
                            <Text>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => logoutUser()} style={styles.confirmBtn}>
                            <Text style={{color: '#FFF', fontSize: 16, fontWeight: 'bold', textTransform: 'uppercase'}}>YES</Text>
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

    confirmText: {
        width: '100%',
        alignSelf: 'center',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
        
    },

    confirmBtn: {
        width: '40%',
        height: 40,
        backgroundColor: '#0CA', 
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    cancelBtn: {
        width: '40%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

   
})

export default SignOut