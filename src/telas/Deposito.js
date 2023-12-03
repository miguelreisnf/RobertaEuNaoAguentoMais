import React, { useState } from 'react'
import {View, Text, TextInput, Button, Image, StyleSheet} from 'react-native'
import { conta } from './Debito';
export default function Deposito(){
    const[deposito, setDeposito] = useState('');
    const[saldo, setSaldo] = useState('');

    function depositar(){
        conta.depositar(Number(deposito));
        setSaldo(conta.saldo);
    }


    return(
        <View style={styles.container}>
            <Text>Depósito</Text>
            <br></br>
            <Image style={styles.foto} source={require("../CESUBANK.png.jpg")}/>
            <br></br>
            <Text>Insira quanto você quer depositar:</Text>
            <br></br>
            <TextInput onChangeText={(deposito) => setDeposito(deposito)} style={styles.input}></TextInput>
            <br></br>
            <Button onPress={depositar} title='Depositar'></Button>
            <br></br>
            <Text>O valor depositado será: {deposito}</Text>
            <Text>Agora seu saldo tem: {saldo}</Text>
            
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