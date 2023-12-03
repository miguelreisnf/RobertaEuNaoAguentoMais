import React, { useState } from 'react'
import {View, Text} from 'react-native'
import { conta } from './Debito';

export default function ExtratoEspecial(){
    const [extratoDeposito, setExtratoDeposito] = useState([]);
    const [extratoSaque, setExtratoSaque] = useState([]);
    return(
        <View>
            <Text>Extrato Especial, aqui você vê seus saques e depósitos organizados e ordenados</Text>
            <Text>Depósitos:</Text>
            <br>{extratoDeposito}</br>
            <Text></Text>
            <br></br>
            <Text>Saques:</Text>
            <Text>{extratoSaque}</Text>
        </View>
    )
}