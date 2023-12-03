import React, { useState } from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import { conta } from './Debito';

export default function Poupanca(){
    const [percentual, setPercentual] = useState();
    const [feedback, setFeedback] = useState();
    const [valorPoupado, setValorPoupado] = useState(conta.getValorPoupado());
    function enviar() {
        conta.percentualPoupanca = percentual;
        setFeedback("O percentual enviado é " + conta.percentualPoupanca + "%");
    }
    return(
        <View>
            <Text>Poupanca</Text>
            <Text>Qual o percentual que você deseja guardar de cada depósito que você fizer?</Text>
            <TextInput onChangeText={(valor) => {setPercentual(valor)}}></TextInput>
            <Button title="Enviar" onPress={enviar}></Button>
            <Text>{feedback}</Text>
            <Text>Você tem um total de R${valorPoupado}</Text>
        </View>
    )
}
