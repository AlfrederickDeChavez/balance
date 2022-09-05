import { StyleSheet, View, Text, TextInput } from "react-native"

const VitaminsInput = () => {
  return (
    <>
        <View style={styles.vitaminsView}>
                <View style={styles.vitaminsContent}>
                    <View style={styles.leftView}>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Vitamin A</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0'

                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Vitamin D</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0'


                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Vitamin E</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0'


                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Vitamin K</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0'

                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Thiamin</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0'

                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Riboflavin</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0'


                            />
                        </View>
                    </View>
                    <View style={styles.rightView}>
                        <View style={styles.nutrientInputBox}>
                                <Text style={styles.nutrientName}>Niacin</Text>
                                <TextInput 
                                    style={styles.nutrientInput}
                                    keyboardType='numeric'
                                    placeholder='0.0'


                                />
                        </View>
                        <View style={styles.nutrientInputBox}>
                                <Text style={styles.nutrientName}>Vitamin B6</Text>
                                <TextInput 
                                    style={styles.nutrientInput}
                                    keyboardType='numeric'
                                    placeholder='0.0'


                                />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Vitamin B12</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0'


                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Folate</Text>
                            <TextInput 
                                style={styles.nutrientInput}
                                keyboardType='numeric'
                                placeholder='0.0'


                            />
                        </View>
                        <View style={styles.nutrientInputBox}>
                            <Text style={styles.nutrientName}>Vitamin C</Text>
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
    vitaminsView: {
        width: '100%',
        marginVertical: 10, 

    },

    vitaminsLabel: {
        width: '100%',
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: '#063b00',
        paddingHorizontal: 15,
        paddingVertical: 5,

    },

    vitaminsContent: {
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

export default VitaminsInput