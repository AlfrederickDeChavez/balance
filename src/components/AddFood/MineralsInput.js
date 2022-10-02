import { StyleSheet, View, Text, TextInput } from "react-native"

const MineralsInput = () => {
  return (
    <>
        <View style={styles.mineralsView}>
                <View style={styles.mineralsContent}>
                    <View style={styles.leftView}>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Iron</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0'
                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Zinc</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0'

                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Selenium</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0'

                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                                <Text style={styles.nutrientName}>Iodine</Text>
                                <TextInput 
                                    style={styles.nutrientInput}
                                    keyboardType='numeric'
                                    placeholder='0.0'

                                />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Calcium</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0'

                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Magnesium</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0'

                            />
                        </View>
                    </View>
                    <View style={styles.rightView}>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Phosphorus</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0'
                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Flouride</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0'

                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Sodium</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0'

                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                                <Text style={styles.nutrientName}>Chloride</Text>
                                <TextInput 
                                    style={styles.nutrientInput}
                                    keyboardType='numeric'
                                    placeholder='0.0'

                                />
                        </View>
                        <View style={styles.nutrientInputBox}>
                                <Text style={styles.nutrientName}>Potassium</Text>
                                <TextInput 
                                    style={styles.nutrientInput}
                                    keyboardType='numeric'
                                    placeholder='0.0'

                                />
                        </View>
                    </View>
                </View>      
            </View>
    </>
  )
}

const styles = StyleSheet.create({
    mineralsView: {
        width: '100%',
        marginVertical: 10,
        paddingBottom: 15,

    },

    mineralsLabel: {
        width: '100%',
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: '#063b00',
        paddingHorizontal: 15,
        paddingVertical: 5,

    },

    mineralsContent: {
        flexDirection: 'row'
    },

    leftView: {
        width: '50%',
    },

    rightView: {
        width: '50%',
    },

    nutrientInputBox: {
        flexDirection: 'row',
        width: '100%',
        padding: 5,
        justifyContent: 'flex-end',
        alignItems: 'baseline',
        marginBottom: 5,
    },

    nutrientInput: {
        backgroundColor: 'green',
        width: '40%',
        paddingHorizontal: 5,
        paddingVertical: 8,
    },

    nutrientName: {
        textAlign: 'right',
        marginRight: 5,
        color: '#fff',
        fontSize: 14,
        textTransform: 'capitalize'

    }
})

export default MineralsInput