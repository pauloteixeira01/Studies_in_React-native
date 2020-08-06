import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

//import UsuarioLogado from './components/UsuarioLogado';
//import Familia from './components/relacao/Familia';
//import Membro from './components/relacao/Membro';
//import ParImpar from './components/ParImpar';
//import Diferenciar from './components/Diferenciar';
//import ContadorV2 from './components/contador/ContadorV2';
//import Pai from './components/indireta/Pai';
//import Contador from './components/Contador';
//import Botao from './components/Botao';
//import Titulo from './components/Titulo';
//import Aleatorio from './components/Aleatorio';
//import MinMax from './components/MinMax';
//import CompPadrao, { Comp1, Comp2 } from './components/Multi';
//import Primeiro from './components/Primeiro';
//import ListaProdutos from './components/produtos/ListaProdutos'
//import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
//import DigiteSeuNome from './components/DigiteSeuNome'
//import FlexboxV1 from './components/layout/FlexboxV1';
//import FlexboxV2 from './components/layout/FlexboxV2';
//import FlexboxV3 from './components/layout/FlexboxV3';
//import FlexboxV4 from './components/layout/FlexboxV4';
import Mega from './components/mega/Mega';

export default () => (
    <SafeAreaView style={style.App}>

        <Mega qtDeNumeros={1} />

        {/*
            <FlexboxV4 />
            <FlexboxV3 />
            <FlexboxV2 />
            <FlexboxV1 />
            <DigiteSeuNome />
            <ListaProdutosV2 />
            <ListaProdutos />
            <UsuarioLogado usuario={{nome: "Paulo", email: "contato@paulotx.com.br" }}/>
            <Familia>
                <Membro name="Mary" lastName="Lobo"/>
                <Membro name="Danielle" lastName="Lobo"/>
                <Membro name="Michelle" lastName="Lobo"/>
                <Membro name="Cherlle" lastName="Lobo"/>
                <Membro name="Júlia" lastName="Lobo"/>
            </Familia>
            <Familia>
                <Membro name="João" lastName="Arruda"/>
                <Membro name="Carla" lastName="Arruda"/>
            </Familia>
            <ParImpar />
            <Diferenciar />
            <ContadorV2 />
            <Pai />
            <Pai />
            <Contador inicial={100} passo={13}/> 
            <Contador /> 
            <Botao />
            <Aleatorio min={0} max={10}/>
            <Titulo  principal="Cadastro Produto" secundario="Tela de Cadastro do Produto"/>
            <Aleatorio min={0} max={10}/>
            <Aleatorio min={0} max={10}/>
            <Aleatorio min={0} max={10}/>
            <Aleatorio min={0} max={10}/>
            <MinMax min="3" max="20"/>
            <MinMax min="1" max="94"/>
            <CompPadrao />
            <Comp1 />
            <Comp2 />
            <Primeiro />
        */}    
    </SafeAreaView>
)

const  style = StyleSheet.create({
    App: {
        //backgroundColor:'#F00',
        color: '#F00',
        flexGrow:1,
        justifyContent:"center",
        alignItems: "center",
        padding: 20
        }
})