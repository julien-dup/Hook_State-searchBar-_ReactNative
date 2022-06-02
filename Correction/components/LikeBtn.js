import { View, Text, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import {IconButton} from 'react-native-paper'

const LikeBtn = (props) => {

    const {likes} = props

    const [liked, setLiked] = useState(0)
    const [isLiked, setIsLiked] = useState(false)

    const likation =(like) => {

        if(isLiked == false) {
            like++
            setLiked(like)
            setIsLiked(true)
        }
        else {
            like--
            setLiked(like)
            setIsLiked(false)
        }

    }

    useEffect(() => {
        setLiked(likes)
    }, [])

  return (
    <View style={styles.container}>
        <IconButton
            icon={!isLiked ? 'heart-outline' : 'heart'}
            color="#2699FB"
            size={20}
            animated={true}
            onPress={() => likation(liked)}
        />
      <Text style={styles.like}>{liked}</Text>
    </View>
  )
}

export default LikeBtn


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    like: {
        color: "#2699FB",
        fontSize: 19,
        fontWeight: 'bold',
        alignSelf: 'center'
    }

})