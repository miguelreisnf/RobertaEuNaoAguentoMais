import React, { useState } from 'react'
import {View, Text} from 'react-native'
import ContaBancaria from '../ContaBancaria';
import { conta } from './Debito';

export default function Extrato(){
    const [extrato, setExtrato] = useState(conta.buscarExtrato());
    return(
        <View>
            <Text>Extrato</Text>
            <Text>{extrato}</Text>
        </View>
    )
}