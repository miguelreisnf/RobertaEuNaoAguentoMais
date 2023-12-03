import React, { useState } from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import ContaBancaria from '../ContaBancaria'
let conta = new ContaBancaria();

export default function Debito(){
    const[saque,setSaque] = useState();
    const[saldo, setSaldo] = useState();
    const[aviso, setAviso] = useState('');

    function debitar(){
        let result = conta.debitar(Number(saque));
        setAviso(result.erro);
        setSaldo(result.saldo);
    }


    return(
        <View>
            <Text>Debito</Text>
            <br></br>
            <Text>Insira quanto você quer sacar:</Text>
            <TextInput onChangeText={(saque) => setSaque(saque)}></TextInput>
            <Button onPress={debitar} title='Sacar'></Button>

            <Text>O valor debitado será de: {saque}</Text>
            <Text>O saldo agora é de {saldo}</Text>
            <Text>{aviso}</Text>
        </View>
    )
}