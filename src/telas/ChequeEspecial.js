import React, { useState } from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import { conta } from '../../App';
export default function ChequeEspecial(){
    const [chequeEspecial, setChequeEspecial] = useState(conta.chequeEspecial);
    return(
        <View style={styles.container}>
            <Text>Cheque Especial</Text>
            <br></br>
            <Image style={styles.foto} source={require("../CESUBANK.png.jpg")}/>
            <br></br>
            <Text>{chequeEspecial}</Text>
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