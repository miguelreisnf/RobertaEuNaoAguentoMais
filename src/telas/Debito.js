import React, { useState } from 'react'
import {View, Text, TextInput, Button, Image, StyleSheet} from 'react-native'
import ContaBancaria from '../ContaBancaria'
let conta = new ContaBancaria();
export { conta };
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
        <View style={styles.container}>
            <Text>Debito</Text>
            <br></br>
            <Image style={styles.foto} source={require("../CESUBANK.png.jpg")}/>
            <br></br>
            <Text>Insira quanto você quer sacar:</Text>
            <TextInput onChangeText={(saque) => setSaque(saque)} style={styles.input}></TextInput>
            <Button onPress={debitar} title='Sacar'></Button>

            <Text>O valor debitado será de: {saque}</Text>
            <Text>O saldo agora é de {saldo}</Text>
            <Text>{aviso}</Text>
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