import { View, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from 'react-native-vector-icons'

const SearchBar = (props) => {

    const { searchText } = props

  return (
    <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Rechercher' onChangeText={(text) => searchText(text)} inlineImageLeft='search_icon' />
      <Ionicons  style={styles.icon} name="search" size={24} color="black" />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 10,
        height: 50,
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        marginTop: 5,
        justifyContent: 'space-between'
    }
})