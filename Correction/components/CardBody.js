import React from 'react'
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native'

const CardBody = (props) => {

    const {
        photo,
        brand,
        title,
        desc
    } = props

    return (
        <View style={styles.container}>
            <Image source={photo} style={styles.image} />
            <Text style={styles.title}>{brand} {title}</Text>
            <ScrollView>
                <Text numberOfLines={3}>{desc}</Text>
            </ScrollView>
        </View>
    )
}
export default CardBody

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        marginVertical: 10,
        width: '100%',
        height: 150
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
    }
})