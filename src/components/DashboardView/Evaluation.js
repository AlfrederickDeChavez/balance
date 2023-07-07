import {ScrollView, View, Text, StyleSheet} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import EvaluationBar from './EvaluationBar'
import { useContext } from 'react'
import ContentContext from '../../context/ContentContext'

const Evaluation = () => {

    const { 
        calories, 
        protein, 
        fiber,
        vitaminA,
        vitaminD,
        vitaminE,
        vitaminK,
        thiamin,
        riboflavin,
        niacin,
        vitaminB6,
        vitaminB12,
        folate,
        vitaminC,
        iron,
        zinc,
        selenium,
        iodine,
        calcium,
        magnesium,
        phosphorus,
        flouride,
        sodium,
        chloride,
        potassium

    } = useContext(ContentContext)

    return (
        <ScrollView style={{ marginBottom: 200, backgroundColor: '#ddd'}}>
            
            <Text style={styles.title}>Macronutrients</Text>
            
                {/* <View>
                    <EvaluationBar 
                        name='Calories' 
                        intake={calories.intake}
                        estimated={calories.estimated} 
                        recommended={calories.recommended}
                        upperlimit={vitaminA.upperlimit}
                    />
                </View> */}

                <View>
                    <EvaluationBar 
                        name='Protein' 
                        intake={protein.intake} 
                        estimated={protein.estimated} 
                        recommended={protein.recommended}
                        upperlimit={protein.upperlimit}
                    />
                </View>

                <View>
                    <EvaluationBar 
                        name='Dietary Fiber' 
                        intake={fiber.intake} 
                        estimated={fiber.estimated} 
                        recommended={fiber.recommended}
                        upperlimit={fiber.upperlimit}
                    />
                </View>

            <Text style={styles.title}>Vitamins</Text>

                <View>
                    <EvaluationBar 
                        name='Vitamin A' 
                        intake={vitaminA.intake} 
                        estimated={vitaminA.estimated} 
                        recommended={vitaminA.recommended}
                        upperlimit={vitaminA.upperlimit}
                    />
                </View>

                <View>
                    <EvaluationBar 
                        name='Vitamin D' 
                        intake={vitaminD.intake} 
                        estimated={vitaminD.estimated} 
                        recommended={vitaminD.recommended}
                        upperlimit={vitaminD.upperlimit}
                    />
                </View>

                <View>
                    <EvaluationBar 
                        name='Vitamin E' 
                        intake={vitaminE.intake} 
                        estimated={vitaminE.estimated} 
                        recommended={vitaminE.recommended}
                        upperlimit={vitaminE.upperlimit}
                    />
                </View>

                <View>
                    <EvaluationBar 
                        name='Vitamin K' 
                        intake={vitaminK.intake} 
                        estimated={vitaminK.estimated} 
                        recommended={vitaminK.recommended}
                        upperlimit={vitaminK.upperlimit}
                    />
                </View>

                <View>
                    <EvaluationBar 
                        name='Thiamin' 
                        intake={thiamin.intake} 
                        estimated={thiamin.estimated} 
                        recommended={thiamin.recommended}
                        upperlimit={thiamin.upperlimit}
                    />
                </View>

                <View>
                    <EvaluationBar 
                        name='Riboflavin' 
                        intake={riboflavin.intake}
                        estimated={riboflavin.estimated} 
                        recommended={riboflavin.recommended}
                        upperlimit={riboflavin.upperlimit}
                    />
                </View>

                <View>
                    <EvaluationBar 
                        name='Niacin' 
                        intake={niacin.intake} 
                        estimated={niacin.estimated} 
                        recommended={niacin.recommended}
                        upperlimit={niacin.upperlimit}
                    />
                </View>

                <View>
                    <EvaluationBar 
                        name='Vitamin B6' 
                        intake={vitaminB6.intake}
                        estimated={vitaminB6.estimated} 
                        recommended={vitaminB6.recommended}
                        upperlimit={vitaminB6.upperlimit}
                    />
                </View>

                <View>
                    <EvaluationBar 
                        name='Vitamin B12' 
                        intake={vitaminB12.intake}
                        estimated={vitaminB12.estimated} 
                        recommended={vitaminB12.recommended}
                        upperlimit={vitaminB12.upperlimit}
                    />
                </View>

                <View>
                    <EvaluationBar 
                        name='Folate' 
                        intake={folate.intake} 
                        estimated={folate.estimated} 
                        recommended={folate.recommended}
                        upperlimit={folate.upperlimit}
                    />
                </View>

                <View>
                    <EvaluationBar 
                        name='Vitamin C' 
                        intake={vitaminC.intake} 
                        estimated={vitaminC.estimated} 
                        recommended={vitaminC.recommended}
                        upperlimit={vitaminC.upperlimit}
                    />
                </View>
            


            <Text style={styles.title}>Minerals</Text>

            <View>
                <EvaluationBar 
                    name='Iron' 
                    intake={iron.intake} 
                    estimated={iron.estimated} 
                    recommended={iron.recommended}
                    upperlimit={iron.upperlimit}
                />
            </View>

            <View>
                <EvaluationBar 
                    name='Zinc' 
                    intake={zinc.intake} 
                    estimated={zinc.estimated} 
                    recommended={zinc.recommended}
                    upperlimit={zinc.upperlimit}
                />
            </View>

            <View>
                <EvaluationBar 
                    name='Selenium' 
                    intake={selenium.intake} 
                    estimated={selenium.estimated} 
                    recommended={selenium.recommended}
                    upperlimit={selenium.upperlimit}
                />
            </View>

            <View>
                <EvaluationBar 
                    name='Iodine' 
                    intake={iodine.intake} 
                    estimated={iodine.estimated} 
                    recommended={iodine.recommended}
                    upperlimit={iodine.upperlimit}
                />
            </View>

            <View>
                <EvaluationBar 
                    name='Calcium' 
                    intake={calcium.intake} 
                    estimated={calcium.estimated} 
                    recommended={calcium.recommended}
                    upperlimit={calcium.upperlimit}
                />
            </View>

            <View>
                <EvaluationBar 
                    name='Magnesium' 
                    intake={magnesium.intake} 
                    estimated={magnesium.estimated} 
                    recommended={magnesium.recommended}
                    upperlimit={magnesium.upperlimit}
                />
            </View>

            <View>
                <EvaluationBar 
                    name='Phosphorus' 
                    intake={phosphorus.intake} 
                    estimated={phosphorus.estimated} 
                    recommended={phosphorus.recommended}
                    upperlimit={phosphorus.upperlimit}
                />
            </View>

            <View>
                <EvaluationBar 
                    name='Flouride' 
                    intake={flouride.intake} 
                    estimated={flouride.estimated} 
                    recommended={flouride.recommended}
                    upperlimit={flouride.upperlimit}
                />
            </View>

            <View>
                <EvaluationBar 
                    name='Sodium' 
                    intake={sodium.intake} 
                    estimated={sodium.estimated} 
                    recommended={sodium.recommended}
                    upperlimit={sodium.upperlimit}
                />
            </View>

            <View>
                <EvaluationBar 
                    name='Chloride' 
                    intake={chloride.intake}
                    estimated={chloride.estimated} 
                    recommended={chloride.recommended}
                    upperlimit={chloride.upperlimit}
                />
            </View>

            <View>
                <EvaluationBar 
                    name='Potassium' 
                    intake={potassium.intake} 
                    estimated={potassium.estimated} 
                    recommended={potassium.recommended}
                    upperlimit={potassium.upperlimit}
                />
            </View>
            
            
            


            <View style={{height: 50}}></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    
    title: {
        width: '100%',
        backgroundColor: '#bbb',
        paddingHorizontal: 25,
        paddingVertical: 3,
        marginTop: 15,
        marginBottom: 10,
        fontSize: 14,
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