import React, { useState } from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import ContaBancaria from '../ContaBancaria';
import { conta } from './Debito';

export default function Extrato(){
    const [extrato, setExtrato] = useState(conta.buscarExtrato());
    return(
        <View style={styles.container}>
            <Text>Extrato</Text>
            <br></br>
            <Image style={styles.foto} source={require("../CESUBANK.png.jpg")}/>
            <br></br>
            <Text>{extrato}</Text>
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
      borderColor: 'red',
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