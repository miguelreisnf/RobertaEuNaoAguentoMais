import React, { useState } from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import ContaBancaria from '../ContaBancaria'

export default function Debito(){
    const[saque,setSaque] = useState('')
    const[saldo, setSaldo] = useState('')

    let conta = new ContaBancaria

    function deb(){
        conta.debitar(saque)
        setSaldo(conta.saldoConta)
    }


    return(
        <View>
            <Text>Debito</Text>
            <br></br>
            <Text>Insira quanto você quer sacar:</Text>
            <TextInput onChangeText={(saque) => setSaque(saque)}></TextInput>
            <Button onPress={deb} title='Sacar'></Button>

            <Text>Saldo: {saldo}</Text>
        </View>
    )
}