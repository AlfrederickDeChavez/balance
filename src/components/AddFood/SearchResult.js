import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SearchResult = () => {
  return (
    <>
        <View style={styles.container}>
            <Text style={styles.resultsText}>Results</Text>

            {/* If there is no result */}
            {
                <View style={styles.noResults}>
                    <Ionicons name='close-circle' style={styles.noResultsIcon}/>
                    <Text style={styles.noFound}>No results found.</Text>
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
    }


})

export default SearchResult