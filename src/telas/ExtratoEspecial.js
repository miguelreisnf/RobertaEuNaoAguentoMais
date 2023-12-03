import React, { useState } from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import { conta } from './Debito';

export default function ExtratoEspecial(){
    const [extratoDeposito, setExtratoDeposito] = useState(conta.extratoDepositoEspecial());
    const [extratoSaque, setExtratoSaque] = useState(conta.extratoSaqueEspecial());
    return(
        <View style={styles.container}>
            <Text>Extrato Especial, aqui você vê seus saques e depósitos organizados e ordenados</Text>
            <Text>Depósitos:</Text>
            <br></br>
            <Image style={styles.foto} source={require("../CESUBANK.png.jpg")}/>
            <br></br>
            <Text>{extratoDeposito}</Text>
            <Text></Text>
            <br></br>
            <Text>Saques:</Text>
            <Text>{extratoSaque}</Text>
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