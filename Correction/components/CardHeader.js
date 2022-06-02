import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const CardHeader = (props) =>{

     const {
        price
    } = props
    
    return(
        <View style={styles.container}>
        <Text style={styles.text}>{price}€</Text>
        </View>
    )
}
export default CardHeader

const styles = StyleSheet.create({
    container:{
        height: 30,
        borderBottomWidth: 1
    },
    text:{
        textAlign: 'right',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#707070'
    }

})