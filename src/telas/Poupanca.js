import React, { useState } from 'react'
import {View, Text, TextInput, Button, Image, StyleSheet} from 'react-native'
import { conta } from '../../App';

export default function Poupanca(){
    const [percentual, setPercentual] = useState();
    const [feedback, setFeedback] = useState();
    const [valorPoupado, setValorPoupado] = useState(conta.getValorPoupado());
    function enviar() {
        let n = Number(percentual);
        if(n > 100){
            setFeedback("Você não pode salvar mais do que 100% dos seus depósitos");
            return;
        }
        if(isNaN(percentual)){
            setFeedback("Formato inválido");
            return;
        }
        conta.percentualPoupanca = percentual;
        setFeedback("O percentual enviado é " + conta.percentualPoupanca + "%");
    }
    return(
        <View style={styles.container}>
            <Text>Poupanca</Text>
            <br></br>
            <Image style={styles.foto} source={require("../CESUBANK.png.jpg")}/>
            <br></br>
            <Text>Qual o percentual que você deseja guardar de cada depósito que você fizer?</Text>
            <TextInput onChangeText={(valor) => {setPercentual(valor)}} style={styles.input}></TextInput>
            <Button title="Enviar" onPress={enviar}></Button>
            <Text>{feedback}</Text>
            <Text>Você tem um total de R${valorPoupado}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1111',
      alignItems: 'center',
    },
    input: {
      borderColor: 'blue',
      borderWidth: 1,
    },
    button: {
      color: "#FFFF",
      backgroundColor: "#9966cc",
      width: 180,
      height: 32,
      alignItems: 'center',
      justifyContent: 'center',
    },
    foto:{
      width: 130,
      height: 130,
      borderRadius: 50,
    }
  });