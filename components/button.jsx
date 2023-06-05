import React from 'react'
import { View,Text,Pressable } from 'react-native'
import globalStyles from '../src/styles/global'

const Button = ({onPress}) => {
    return (
        <Pressable onPress={onPress}>
            <View style={globalStyles.Button}>
                <Text>Press me!</Text>
            </View>
        </Pressable>
    )
}

export default Button