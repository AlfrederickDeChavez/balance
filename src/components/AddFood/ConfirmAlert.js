import { Text, View, Modal, StyleSheet, Animated, TouchableOpacity, ActivityIndicator, Dimensions} from "react-native"
import { useState, useEffect, useRef, useContext} from "react"
import AuthContext from "../../context/AuthContext"
import ContentContext from "../../context/ContentContext"

const ConfirmAlert = ({visible, setVisible, food, setFood}) => {

    // CONTEXT DATA
    const {addFood, getFoods, isLoading, showConfirm, setShowConfirm} = useContext(ContentContext)
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
                    <View style={styles.foodDetailContainer}>
                        <Text style={styles.title}>Food Details</Text>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{food.Name}</Text>
                        <Text style={{fontWeight: 'bold', marginVertical: 5,}}>Macronutrients</Text>
                        <Text>Calories: {food.Calories} kcal</Text>
                        <Text>Protein: {food.Protein} g</Text>
                        <Text>Dietary Fiber: {food.DietaryFiber} g</Text>

                        <Text style={{fontWeight: 'bold', marginVertical: 5,}}>Vitamins</Text>

                        <Text>Vitamin A: {food.Vitamin_A} mg</Text>
                        <Text>Vitamin D: {food.Vitamin_D} mg</Text>
                        <Text>Vitamin E: {food.Vitamin_E} mg</Text>
                        <Text>Vitamin K: {food.Vitamin_K} mg</Text>
                        <Text>Thiamin: {food.Thiamin} mg</Text>
                        <Text>Riboflavin: {food.Riboflavin} mg</Text>
                        <Text>Niacin: {food.Niacin} mg</Text>
                        <Text>Vitamin B6: {food.Vitamin_B6} mg</Text>
                        <Text>Vitamin B12: {food.Vitamin_B12} mg</Text>
                        <Text>Folate: {food.Folate} mg</Text>
                        <Text>Vitamin C: {food.Vitamin_C} mg</Text>

                        <Text style={{fontWeight: 'bold', marginVertical: 5,}}>Minerals</Text>

                        <Text>Iron: {food.Iron} mg</Text>
                        <Text>Zinc: {food.Zinc} mg</Text>
                        <Text>Selenium: {food.Selenium} mg</Text>
                        <Text>Iodine: {food.Iodine} mg</Text>
                        <Text>Calcium: {food.Calcium} mg</Text>
                        <Text>Magnesium: {food.Magnesium} mg</Text>
                        <Text>Phosphorus: {food.Phosphorus} mg</Text>
                        <Text>Flouride: {food.Flouride} mg</Text>
                        <Text>Sodium: {food.Sodium} mg</Text>
                        <Text>Chloride: {food.Chloride} mg</Text>
                        <Text>Potassium: {food.Potassium} mg</Text>
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
                        <Text style={styles.cancel_text}>CANCEL</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
            {/* {
                isLoading && 
                <ActivityIndicator size='large'
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                    }}
                />
            } */}
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

    confirm_btn: {
        width: '100%',
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        marginBottom: 10,
    },

    cancel_btn: {
        width: '100%',
        paddingVertical: 8,
        borderColor: 'green',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',

    },

    confirm_text: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
    },

    cancel_text: {
        color: 'green',
        fontSize: 16,
        fontWeight: 'bold'
    },

    foodDetailContainer: {
        width: '100%',
        marginBottom: 10
    },

    title: {
        width: '100%',
        paddingVertical: 5,
        textAlign: 'center',
        color: '#FFF',
        backgroundColor: '#444',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 10,
    }
    
})

export default ConfirmAlert