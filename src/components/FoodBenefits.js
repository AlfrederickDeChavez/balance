import { Text, View, Modal, StyleSheet, Animated, TouchableOpacity, Image} from "react-native"
import { useState, useEffect, useRef} from "react"
import { Ionicons } from "@expo/vector-icons"
import { foods } from "../database/benefits"

const FoodBenefits = ({visible, setVisible, food}) => {

    const [showBenefits, setShowBenefits] = useState(visible)
    const scaleValue = useRef(new Animated.Value(0)).current

    useEffect(() => {
        toggleModal()
    }, [visible])

    const toggleModal = () => {
        if (visible) {
            setShowBenefits(true)
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true      
            }).start()
        } else {
            setTimeout(() => setShowBenefits(false), 200)
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true      
            }).start()
        }
    }
 
    const cancel = () => {
        setVisible(false)
    }
    return(
        <Modal transparent visible={showBenefits}>
            <View style={styles.modal_bg}>
                <Animated.View style={[styles.modal_container, {transform: [{scale: scaleValue}]}]}>
                    <View style={styles.foodDetailsView}>
                        <View style={styles.foodDetails}>
                            <Image source={food.image} style={styles.foodImage}/>
                        </View>
                        <View style={styles.foodDetailsInfo}>
                            <Text style={{color: 'green', fontSize: 24, fontWeight: 'bold'}}>{food.name}</Text>
                            <Text style={{color: '#333', fontSize: 12, marginVertical: 2, textTransform: 'uppercase'}}>{food.category}</Text>
                            <Text style={{color: '#aaa', fontSize: 12, marginTop: 2,}}>Good source of <Text style={{fontWeight: 'bold'}}>{food.nutrient}</Text></Text>
                        </View>
                        
                    </View>
                    <View>
                        {
                            food.benefits.map((benefit, index) => {
                                return (
                                    <View key={index} style={styles.benefitView}>
                                        <Ionicons name="checkbox" color='#FFF' size={25}/>
                                        <Text style={{color: '#FFF', marginLeft: 5, fontWeight: 'bold'}}>{benefit}</Text>
                                    </View>
                                )
                            })
                        }
                        
                    </View>
                    <TouchableOpacity onPress={() => setVisible(false)} style={styles.exit}><Text>Close</Text></TouchableOpacity>
                </Animated.View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal_bg: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 150,
    },

    modal_container: {
        width: '90%',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 15,
        elevation: 20,
        borderRadius: 5,
    },

    foodDetailsView: {
        width: '100%',
        flexDirection: 'row'
    },

    foodDetailsInfo: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    foodDetails: {
        width: 80,
        height: 80,
        backgroundColor: 'skyblue',
        padding: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    foodImage: {
        width: 60,
        height: 60
    },

    benefitView: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#0CA',
        borderRadius: 5,
        paddingVertical: 5,
        marginTop: 10,
        flexDirection: 'row'
    }, 

    exit: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#ccc'
    }

    
})

export default FoodBenefits