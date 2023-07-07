import { Text, View, Modal, StyleSheet, Animated, TouchableOpacity, Dimensions, Image} from "react-native"
import { useState, useEffect, useRef, useContext} from "react"
import { Ionicons } from "@expo/vector-icons"



const Disclaimer = ({visible, setVisible}) => {

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
                    
                        <Image source={require('../assets/images/information.png')} style={styles.disclaimerIcon}/>
                        <Text style={{fontWeight: 'bold', fontSize: 18, marginVertical: 10, alignSelf: 'center'}}>Disclaimer</Text>
                       
                    
                    
                    <Text style={{textAlign: "justify", marginBottom: 10}}>This application is intended to be used as a guide. It is not a substitute for professional nutritionist advice, treatment or any judgement. Although the calculations by this app were made with great care, it may contain errors or inaccuracies. Using the results of the evaluation is the responsibility of the user and the developers assumes no liability for the use of application.</Text>
          <Text style={{textAlign: "justify"}}>Please note that this application is only advisable to use by heathy individuals.</Text>
                    <TouchableOpacity onPress={() => setVisible(false)} style={styles.gotIt}>
                        <Text style={{fontSize: 14, color: '#aaa'}}>Got it!</Text>
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

    confirmText: {
        width: '100%',
        alignSelf: 'center',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
        
    },

    gotIt: {
        width: '40%',
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#aaa'
    },

    disclaimerIcon: {
        width: 40,
        height: 40,
        alignSelf: 'center',

    }

})

export default Disclaimer