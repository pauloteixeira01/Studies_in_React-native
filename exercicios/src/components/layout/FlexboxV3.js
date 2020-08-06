import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado';

export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado  lado={20}/>
            <Quadrado cor = '#F00' lado={30}/>
            <Quadrado cor = '#0F0' lado={40}/>
            <Quadrado cor = '#009' lado={50}/>
            <Quadrado cor = '#ff801a' lado={60}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        //No react-native o eixo principal (main axis) é a coluna
        flexDirection: 'row', //Mudar o padrão pra linha (main axis)
        justifyContent: "space-evenly",
        alignItems: 'flex-start',
        height: 350,
        width: '100%',
        backgroundColor: 'gray'
    }
})
