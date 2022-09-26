import { useState } from 'react'
import {StyleSheet, Text, View} from 'react-native'

const ProgressGraph = ({recommended}) => {
    
    const [intake, setIntake] = useState(1)
    const progressBarWidth = (recommended/recommended) * 100

    return (
        <View style={styles.container}>
        <Text style={styles.progressText}>{((intake/recommended) * 100).toFixed(1)}%</Text>
        <View style={[styles.progressBar, {width: `${progressBarWidth}%`}]}>
            <View style={[styles.progress, {width: `${(intake / recommended) * 100}%`}]}></View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        marginVertical: 5,
    },
    progressBar: {
        height: 30,
        borderWidth: 2,
        borderColor: '#fff',
        padding: 2,
        alignSelf: 'center'

    },

    progress: {
        height: '100%',
        maxWidth: '100%',
        backgroundColor: '#fff'
    },

    progressText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
        color: '#fff'
    }


})

export default ProgressGraph