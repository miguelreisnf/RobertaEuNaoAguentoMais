import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ContaBancaria from '../ContaBancaria';

export default function Principal({navigation}) {
  let conta = new ContaBancaria


  return (
    <View style={styles.container}>
      <br></br>
      <Text>Seu saldo: {conta.saldoConta}</Text>
      <br></br>
      <Button title="Depositar" onPress={()=> navigation.navigate('Deposito')} style={styles.button}></Button>
      <br></br>
      <Button title="Debitar" onPress={()=> navigation.navigate('Debito')} style={styles.button}></Button>
      <br></br>
      <Button title="Extrato" onPress={()=> navigation.navigate('Extrato')} style={styles.button}></Button>
      <br></br>
      <Button title="Extrato Especial" onPress={()=> navigation.navigate('ExtratoEspecial')} style={styles.button}></Button>
      <br></br>
      <Button title="Cheque Especial" onPress={()=> navigation.navigate('ChequeEspecial')} style={styles.button}></Button>
      <br></br>
      <Button title="Poupança" onPress={()=> navigation.navigate('Poupanca')} style={styles.button}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1111',
    alignItems: 'center',
    justifyContent: 'center',
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
  }
});