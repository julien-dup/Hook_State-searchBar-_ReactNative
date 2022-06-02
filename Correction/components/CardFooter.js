import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LikeBtn from './LikeBtn'

const CardFooter = (props) => {

    const {
        size,
        likes
    } = props

    return (
        <View style={styles.container}>
            <Text style={styles.size}>Taille : {size}</Text>
            <LikeBtn likes={likes} />
        </View>
    )
}
export default CardFooter

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        height: 30,
    },
    size:{
        fontSize: 17,
        alignSelf: 'center'
    }
    
})