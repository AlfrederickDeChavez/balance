import { useState, useEffect } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const EvaluationBar = ({name, intake, recommended, estimated, upperlimit}) => {

    const [position, setPosition] = useState(0)

    const EsAvRe = estimated
    const ReDaAl = recommended 
    const ToUpLi = upperlimit

    useEffect(() => {
        moveMarker()
    }, [intake])
    
    const moveMarker = () => {
        if (intake <= EsAvRe) {
            const pos = ((intake / EsAvRe) * 0.25) * 93
            setPosition(pos)
        } else if (intake > EsAvRe && intake <= ReDaAl) {
            const low = intake - EsAvRe
            const high = ReDaAl - EsAvRe
            setPosition((((low / high) * 0.25) * 93) + 25)
        } else if (intake > ReDaAl && intake <= ToUpLi) {
            const low = intake - ReDaAl
            const high = ToUpLi - ReDaAl
            setPosition((((low / high) * 0.25) * 93) + 50)
        } else if (intake > ToUpLi) {
            const overCon = intake - ToUpLi
            const pos = (((overCon / 5) * 0.25) * 93) + 75
            const finalPos = pos > 98 ? 98 : pos
            setPosition(finalPos)
        }
    } 
    
    return (
        <View style={styles.evaluationContainer}>
            <Text style={{fontWeight: 'bold', fontSize: 12,}}>{name}</Text>
            <MaterialCommunityIcons name='map-marker-down' style={[styles.marker, {left: `${position}%`}]}/>
            <View style={styles.evaluationBar}>
            <LinearGradient 
                    colors={['red', '#F76601']} 
                    style={styles.EAR} 
                    start={{x: 0, y: 0.5}} 
                    end={{x: 1, y: 0.5}} 
                />
                <LinearGradient 
                    colors={['#F76601', '#0CA036', '#0CA036']}
                    style={[styles.RDA, {marginLeft: 0.5, marginRight: 0.5}]} 
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
                    end={{x: 0.9, y: 0.5}} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    marker: {
        fontSize: 16,
        color: '#A2410F'
    },
    evaluationContainer: {
        width: '100%',
        paddingHorizontal: 25,
        paddingVertical: 5,
    },

    evaluationBar: {
        width: '100%',
        height: 16,
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
        marginHorizontal: 1,

    },

    TUL: {
        width: '25%',
        height: '100%',
        backgroundColor: 'red',
    },
})

export default EvaluationBar