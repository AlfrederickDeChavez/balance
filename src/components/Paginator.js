import React from 'react'
import {View, StyleSheet, Animated, useWindowDimensions} from 'react-native'

const Paginator = ({scrollX}) => {

    const {width} = useWindowDimensions()

  return (
    <View style={{flexDirection: 'row', alignSelf: 'center', marginVertical: 20,}}>
            {
              ['_', '_'].map((_, i) => {                
                const dotWidth = i === 0 ? scrollX.interpolate({
                    inputRange: [i * width, (i + 1) * width],
                    outputRange: [ 30, 15],
                    extrapolate: 'clamp'
                }) : scrollX.interpolate({
                    inputRange: [i * width, (i + 1) * width],
                    outputRange: [ 15, 25],
                    extrapolate: 'clamp' 
                })

                const opacity = scrollX.interpolate({
                    inputRange: [i * width, (i + 1) * width], 
                    outputRange: [1, 0.2],
                    extrapolate: 'clamp'
                })
                return <Animated.View style={[styles.dot, {width: dotWidth, opacity: opacity}]} key={i}></Animated.View>
              })
            }
    </View>
    
  )
}

const styles = StyleSheet.create({
    dotContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center'
    },

    dot: {
        height: 15,  
        borderRadius: 7.5,
        backgroundColor: '#37EF68',
        marginHorizontal: 4,
    }
})

export default Paginator