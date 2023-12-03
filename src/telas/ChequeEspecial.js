import React, { useState } from 'react'
import {View, Text} from 'react-native'
import { conta } from './Debito';
export default function ChequeEspecial(){
    const [chequeEspecial, setChequeEspecial] = useState(conta.chequeEspecial);
    return(
        <View>
            <Text>Cheque Especial</Text>
            <Text>{chequeEspecial}</Text>
        </View>
    )
}