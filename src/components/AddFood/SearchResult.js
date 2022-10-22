import { Ionicons } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'


const SearchResult = ({found, setFoodToAdd, setVisible}) => {

    const save = (food) => {
        setFoodToAdd(food)
        setVisible(true)
    }

  return (
    <>
        <View style={styles.container}>
            <Text style={styles.resultsText}>Results</Text>

            {/* If there is no result */}
            {

                found.length == 0 ?

                <View style={styles.noResults}>
                    <Ionicons name='close-circle' style={styles.noResultsIcon}/>
                    <Text style={styles.noFound}>No results found.</Text>
                </View>

                : 

                <View>
                    {
                        found.slice(0, 6).map((food, index) => (
                            <View key={index} style={styles.foodView}>

                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <FontAwesome5 name='utensils' color='green' size={32}/>
                                    <View style={{marginLeft: 20}}>
                                        <Text style={styles.foodName}>{food.Name}</Text>
                                        <Text style={{color: '#000', marginTop: 3, fontSize: 12,}}>{food.Category}</Text>
                                        <Text style={{color: '#555', fontSize: 10, marginTop: 3}}>Calories: {food.Calories}g - Protein: {food.Protein}g ...</Text>
                                    </View>
                                </View>
                                <TouchableOpacity  onPress={() => save(food)} style={styles.addBtn}>
                                    <Text style={styles.addText}>Add</Text>
                                </TouchableOpacity>
                            </View> 
                        ))
                    }

                    {
                        found.length > 5 &&
                        <MaterialIcons name='more-horiz' style={styles.more}/>
                    }
                    
                </View>

            }
             
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    resultsText: {
        width: '100%',
        backgroundColor: '#063b00',
        marginVertical: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
        fontWeight: 'bold',
        color: '#fff'
    },

    noResults: {
        alignSelf: 'center'
    }, 

    noResultsIcon: {
        fontSize: 50,
        color: '#000',
        opacity: 0.3,
        alignSelf: 'center'
    },

    noFound: {
        marginTop: 10,
        fontWeight: 'bold',
        opacity: 0.3,
    },

    foodView: {
        width: '100%',
        backgroundColor: '#EEE',
        height: 60,
        paddingHorizontal: 15,
        paddingVertical: 7,
        flexDirection: 'row',
        alignItems: 'center', 
        borderBottomColor: '#CCC',
        borderBottomWidth: 0.5,
        justifyContent: 'space-between',
        borderRadius: 15,
        marginBottom: 5,
    },

    foodName: {
        color: 'green',
        fontSize: 14,
        fontWeight: 'bold'
    },

    addBtn: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        width: 60,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'green',
        borderRadius: 5,
        justifyContent: 'center'
    },

    addText: {
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },

    more: {
        alignSelf: 'center',
        fontSize: 40,
        color: '#FFF'
    }


})

export default SearchResult