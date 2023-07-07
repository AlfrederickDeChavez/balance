import {View, Text, StyleSheet} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'


const EvaluationGuide = () => {
    return (
        <View style={styles.container}>
            <View style={styles.evaluationBar}>
                <LinearGradient 
                    colors={['red', '#F76601']} 
                    style={styles.EAR} 
                    start={{x: 0, y: 0.5}} 
                    end={{x: 1, y: 0.5}} 
                />
                <LinearGradient 
                    colors={['#F76601', '#0CA036', '#0CA036']} 
                    style={[styles.RDA, {marginLeft: 1, marginRight: 0.5}]} 
                    start={{x: 0, y: 0.5}} 
                    end={{x: 1, y: 0.5}} 
                />
                <LinearGradient 
                    colors={['#0CA036', '#0CA036','#F76601']} 
                    style={[styles.RDA, {marginLeft: 0.5, marginRight: 1}]} 
                    start={{x: 0, y: 0.5}} 
                    end={{x: 1, y: 0.5}} 
                />
                <LinearGradient 
                    colors={['#F76601', 'red']} 
                    style={styles.TUL} 
                    start={{x: 0, y: 0.5}} 
                    end={{x: 0.7, y: 0.5}} 
                />
            </View>
            <View style={styles.evaluationLabel}>
                <Text style={styles.under}>Low</Text>
                <Text style={styles.safety}>balance</Text>
                <Text style={styles.toxic}>High</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 25,
        paddingVertical: 10,
        paddingBottom: 10,
    },

    evaluationBar: {
        width: '100%',
        height: 20,
        flexDirection: 'row',
    },

    evaluationLabel: {
        width: '100%',
        flexDirection: 'row',
        marginVertical: 5,
    },

    EAR: {
        width: '25%',
        height: '100%',
        backgroundColor: 'red',

    },

    RDA: {
        width: '25%',
        height: '100%',
        backgroundColor: '#0CA036',
    },

    TUL: {
        width: '25%',
        height: '100%',
        backgroundColor: 'red',
    },

    under: {
        textAlign: 'left',
        width: '33%',
        fontSize: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'brown'
    },

    safety: {
        textAlign: 'center',
        width: '34%',
        fontSize: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'green'
    },

    toxic: {
        textAlign: 'right',
        width: '33%',
        fontSize: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'brown'
    },





})

export default EvaluationGuide