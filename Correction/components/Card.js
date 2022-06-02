import React from 'react'
import { View, StyleSheet } from 'react-native'
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'
import CardBody from './CardBody'

const Card = ({ item }) => {

   const {
        photo,
        brand,
        title,
        desc,
        price,
        size,
        likes
    } = item

    return (
        <View style={styles.container}>
            <CardHeader price={price} />
            <CardBody photo={photo} brand={brand} title={title} desc={desc} />
            <CardFooter size={size} likes={likes} />
        </View>
    )
}
export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        margin: 5,
        padding: 5,
        height: 350
    },
})