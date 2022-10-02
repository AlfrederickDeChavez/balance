import {ScrollView, View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { macronutrients } from '../../database/nutrients'
import EvaluationBar from './EvaluationBar'

const Evaluation = () => {
    return (
        <ScrollView style={{ marginBottom: 200, backgroundColor: '#ddd'}}>
            
            
            <Text style={styles.title}>Macronutrients</Text>
            {
                macronutrients.map((nutrient, index) => {
                    return(
                        <View key={index}>
                            <EvaluationBar 
                                name={nutrient.name} 
                                intakeAmount={nutrient.intake} 
                                recommendedAmount={nutrient.recommended}
                            />
                        </View>
                    )
                })
                        
            } 

<Text style={styles.title}>Vitamins</Text>
            {
                [1, 1, 1].map((_, index) => {
                    return(
                        <View style={styles.evaluationContainer} key={index}>
                            <Text>nutrient.name</Text>
                            <MaterialCommunityIcons name='map-marker-down' style={styles.marker}/>
                            <View style={styles.evaluationBar}>
                                <LinearGradient 
                                    colors={['red', '#0CA036']} 
                                    style={styles.EAR} 
                                    start={{x: 0, y: 0.5}} 
                                    end={{x: 0.8, y: 0.5}} 
                                />
                                <View style={styles.RDA}>
                                    
                                </View>
                                <LinearGradient 
                                    colors={['#0CA036', 'red']} 
                                    style={styles.TUL} 
                                    start={{x: 0, y: 0.5}} 
                                    end={{x: 1, y: 0.5}} 
                                />
                            </View>
                        </View>
                    )
                })
                        
            } 

<Text style={styles.title}>Macronutrients</Text>
            {
                [1, 1, 1].map((_, index) => {
                    return(
                        <View key={index}>
                            <EvaluationBar />
                        </View>
                    )
                })
                        
            } 

            <View style={{height: 50}}></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    
    title: {
        width: '100%',
        backgroundColor: '#bbb',
        paddingHorizontal: 25,
        paddingVertical: 5,
        marginTop: 15,
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },

    marker: {
        fontSize: 18,
        color: 'red',
        left: '0%'
    },
    evaluationContainer: {
        width: '100%',
        paddingHorizontal: 25,
        paddingVertical: 5,
    },
    evaluationBar: {
        width: '100%',
        height: 18,
        flexDirection: 'row',

    },

    evaluationLabel: {
        width: '100%',
        flexDirection: 'row',
        marginVertical: 5,
    },

    EAR: {
        width: '30%',
        height: '100%',
        backgroundColor: 'red',

    },

    RDA: {
        width: '40%',
        height: '100%',
        backgroundColor: '#0CA036',
        marginHorizontal: 1,

    },

    TUL: {
        width: '30%',
        height: '100%',
        backgroundColor: 'red',
    },
})

export default Evaluation