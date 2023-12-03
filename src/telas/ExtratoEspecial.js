import React, { useState } from 'react'
import {View, Text} from 'react-native'

export default function ExtratoEspecial(){
    const [extratoDeposito, setExtratoDeposito] = useState([]);
    const [extratoSaque, setExtratoSaque] = useState([]);
    return(
        <View>
            <Text>Extrato Especial, aqui você vê seus saques e depósitos organizados e ordenados</Text>
            <Text>Depósitos:</Text>
            <br></br>
            <Text></Text>
            <br></br>
            <Text>Saques:</Text>
        </View>
    )
}