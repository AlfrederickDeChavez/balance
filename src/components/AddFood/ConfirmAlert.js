import { Text, View, Modal, StyleSheet, Animated, TouchableOpacity, Image, Dimensions} from "react-native"
import { useState, useEffect, useRef, useContext} from "react"
import AuthContext from "../../context/AuthContext"
import ContentContext from "../../context/ContentContext"

const ConfirmAlert = ({visible, setVisible, food, setFood}) => {

    // CONTEXT DATA
    const {addFood} = useContext(ContentContext)
    const {authtokens} = useContext(AuthContext)

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

    const defaultFood = {
        Calcium: 0,
        Calories: 0,
        Category: "",
        Chloride: 0,
        DietaryFiber: 0,
        Flouride: 0,
        Folate: 0,
        Iodine: 0,
        Iron: 0,
        Magnesium: 0,
        Name: "",
        Niacin: 0,
        Phosphorus: 0,
        Potassium: 0,
        Protein: 0,
        Riboflavin: 0,
        Selenium: 0,
        Sodium: 0,
        Thiamin: 0,
        Vitamin_A: 0,
        Vitamin_B12: 0,
        Vitamin_B6: 0,
        Vitamin_C: 0,
        Vitamin_D: 0,
        Vitamin_E: 0,
        Vitamin_K: 0,
        Zinc: 0,
        Quantity: 1,
    }
 
    const confirm = () => {
        addFood(food, authtokens)
        setTimeout(() => {
            setVisible(false)
            setFood(defaultFood)
        }, 1000)    
    }

    const cancel = () => {
        setVisible(false)
        setFood(defaultFood) 
    }
    return(
        <Modal transparent visible={showAlert}>
            <View style={styles.modal_bg}>
                <Animated.View style={[styles.modal_container, {transform: [{scale: scaleValue}]}]}>
                <View style={styles.foodView}>
                        <View style={styles.iconBg}>
                            <Image source={require('../../assets/exercises/diet.png')} style={styles.exerciseIcon}/>
                        </View>    
                        <View style={styles.detailsView}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 5}}>{food.Name}</Text>
                            <Text style={{color: '#555', fontSize: 10,}}>Macronutrients: Calories - {food.Calories}, Protein ...</Text>
                            <Text style={{color: '#555', fontSize: 10,}}>Vitamins: Vitamin A - {food.Vitamin_A}, Vitamin D ...</Text>
                            <Text style={{color: '#555', fontSize: 10,}}>Minerals: Iron - {food.Iron}, Zinc ...</Text>
                        </View>            
                    </View>
                    <TouchableOpacity 
                        onPress={confirm}
                        style={styles.confirm_btn}
                    >
                        <Text style={styles.confirm_text}>CONFIRM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={cancel}
                        style={styles.cancel_btn}
                    >
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
            
        </Modal>
    )
}

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

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

    confirm_btn: {
        width: '100%',
        height: 40,
        backgroundColor: '#0CA', 
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    cancel_btn: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'

    },

    confirm_text: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
    },

    foodView: {
        width: '100%',
        height: 120,
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

export default ConfirmAlert