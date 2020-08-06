import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Estilo from '../estilo'

export default ({num}) => {
    return (
        <View style={style.Container}>
            <Text style={[Estilo.txtG, style.Num]}>
                {num}
            </Text>
        </View>   
    )
}

const style = StyleSheet.create({
    Container: {
        height: 70,
        width: 70,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 35,
        justifyContent: 'center', 
    },
    Num: {
        color: '#fff'
    }
})