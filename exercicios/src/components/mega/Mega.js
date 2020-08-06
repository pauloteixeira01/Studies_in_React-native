import React, { Component } from 'react';
import { Text, TextInput, Button } from 'react-native';
import Estilo from '../estilo';

export default class Mega extends Component {

    state = {
        qtDeNumeros: this.props.qtDeNumeros,
        numeros: [] 
    }
    
    alterarQtNumero = (qt) => {
        //Sempre que eu quiser alterar o estado do componente
        this.setState({ qtDeNumeros: +qt })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtDeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)],[])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    render () {
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena 
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}} 
                    placeholder="Quantidade de números" 
                    value={`${this.state.qtDeNumeros}`}
                    onChangeText={this.alterarQtNumero}
                />
                <Button 
                    title="Gerar"
                    onPress={this.gerarNumeros}
                />
                <Text>
                    {this.state.numeros.join(',')}
                </Text>
            </>
        )
    }
}