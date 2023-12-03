import React, { useState } from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import { conta } from './Debito';
export default function Deposito(){
    const[deposito, setDeposito] = useState('');
    const[saldo, setSaldo] = useState('');

    function depositar(){
        conta.depositar(Number(deposito));
        setSaldo(conta.saldo);
    }


    return(
        <View>
            <Text>Depósito</Text>
            <br></br>
            <Text>Insira quanto você quer depositar:</Text>
            <br></br>
            <TextInput onChangeText={(deposito) => setDeposito(deposito)}></TextInput>
            <br></br>
            <Button onPress={depositar} title='Depositar'></Button>
            <br></br>
            <Text>O valor depositado será: {deposito}</Text>
            <Text>Agora seu saldo tem: {saldo}</Text>
        </View>
    )
}