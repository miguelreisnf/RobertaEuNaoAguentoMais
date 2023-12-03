import React, { useState } from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import ContaBancaria from '../ContaBancaria'

export default function Deposito(){
    const[deposito, setDeposito] = useState('')
    const[saldo, setSaldo] = useState('')

    let conta = new ContaBancaria

    function depositar(){
        conta.depositar(deposito)
        setSaldo(conta.saldoConta)
    }


    return(
        <View>
            <Text>Deposito</Text>
            <br></br>
            <Text>Insira quanto você quer depositar:</Text>
            <TextInput onChangeText={(deposito) => setDeposito(deposito)}></TextInput>
            <Button onPress={depositar} title='Depositar'></Button>

            <Text>Saldo: {saldo}</Text>
        </View>
    )
}