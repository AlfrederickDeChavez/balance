import { useState } from 'react'
import {StyleSheet, Text, View} from 'react-native'

const ProgressGraph = ({recommended, intake}) => {
    
    const progressBarWidth = (recommended/recommended) * 100

    return (
        <View style={styles.container}>
        <View style={[styles.progressBar, {width: `${progressBarWidth}%`}]}>
            <View style={[styles.progress, {width: `${(intake.toFixed(1) / recommended) * 100}%`}]}></View>
        </View>
        <Text style={styles.progressText}>{((intake.toFixed(1)/recommended) * 100).toFixed(1)}%</Text>
        <Text style={{color: '#FFF', fontSize: 14, fontWeight: 'bold', marginBottom: 5}}>My Intake: {intake.toFixed(1)}</Text>
        <Text style={{color: '#FFF', fontSize: 14, fontWeight: 'bold'}}>Recommended: {recommended}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        marginVertical: 5,
    },
    progressBar: {
        height: 25,
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