import React, { useState } from 'react'
import {View, Text} from 'react-native'
import { conta } from './Debito';

export default function ExtratoEspecial(){
    const [extratoDeposito, setExtratoDeposito] = useState(conta.extratoDepositoEspecial());
    const [extratoSaque, setExtratoSaque] = useState(conta.extratoSaqueEspecial());
    return(
        <View>
            <Text>Extrato Especial, aqui você vê seus saques e depósitos organizados e ordenados</Text>
            <Text>Depósitos:</Text>
            <Text>{extratoDeposito}</Text>
            <Text></Text>
            <br></br>
            <Text>Saques:</Text>
            <Text>{extratoSaque}</Text>
        </View>
    )
}