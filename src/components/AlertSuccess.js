import { Text, View, Modal, StyleSheet, Animated, TouchableOpacity, ActivityIndicator} from "react-native"
import { useState, useEffect, useRef, useContext} from "react"
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import AuthContext from "../context/AuthContext"

const AlertSuccess = ({visible, setVisible}) => {

    const {response, setRegistered, deleteResponse} = useContext(AuthContext)
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

    const close = () => {
        setVisible(false)
        deleteResponse()
    }

    return(
        <Modal transparent visible={showAlert}>
            <View style={styles.modal_bg}>
                <Animated.View style={[styles.modal_container, {transform: [{scale: scaleValue}]}]}>
                    {
                        response.response == 'success' ? 
                        
                        <View>
                            <Ionicons name='checkmark-circle' style={[styles.success_vector]}/>
                            <Text style={[styles.account_created, {color: '#0CA036'}]}>{response.message}</Text> 
                        </View>
                        : 

                        response.response == 'error' ?

                        <View>
                            <MaterialIcons name='error' style={[styles.success_vector, {color: 'red'} ]}/>
                            <Text style={[styles.account_created, {color: 'red'}]}>{response.message}</Text>
                        </View>

                        : 
                        
                        <View>
                            <ActivityIndicator size='large' style={{alignSelf: 'center'}}/>
                        </View>
                        
                    }
                    <TouchableOpacity 
                    onPress={close}
                    style={styles.ok_btn}
                    >
                    <Text style={styles.ok_text}>CLOSE</Text>
                    </TouchableOpacity>
                
                </Animated.View>
            </View>
        </Modal> 
    )
}

const styles = StyleSheet.create({
    modal_bg: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    modal_container: {
        width: '80%',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },

    success_vector: {
        fontSize: 120,
        color: '#0CA036',
        alignSelf: 'center'
    },

    account_created: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center'
    },

    ok_btn: {
        borderTopColor: '#222',
        borderTopWidth: 1,
        width: '100%',
        alignSelf: 'center',
        marginTop: 30,
        paddingVertical: 15,
    },

    ok_text: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#222'
    }
})

export default AlertSuccess