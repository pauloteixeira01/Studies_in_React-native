import React from 'react';
import { View, StyleSheet } from 'react-native';
import Primeiro from './components/Primeiro';
import X, { Comp1, Comp2 } from './components/Multi';

export default () => (
    <View style={style.App}>
        <X />
        <Comp1 />
        <Comp2 />
        <Primeiro />
    </View>
)

const  style = StyleSheet.create({
    App: {
        //backgroundColor:'#F00',
        flexGrow:1,
        justifyContent:"center",
        alignItems: "center"
        }
})