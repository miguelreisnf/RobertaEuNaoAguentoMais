import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { conta } from '../../App';

export default function Principal({navigation}) {
  const [saldo, setSaldo] = useState(conta.getSaldo());
  const [cliques1, setCliques1] = useState(0);
  const [cliques2, setCliques2] = useState(0)
  const [link, setLink] = useState(null)

  function atualizarSaldo(){
    setSaldo(conta.getSaldo());
  }

  function clicar1(){
    let novoClique = cliques1 + 1;
    setCliques1(novoClique);

    if (novoClique === 13) {
      navigation.navigate('MarcoPolo')
      setCliques1(0);
    }
    console.log(novoClique);
  }

  function clicar2(){
    let novoClique = cliques2 + 1;
    setCliques2(novoClique);

    if (novoClique === 3) {
      setLink("https://www.cesupa.br/")
      setCliques2(0);
    }
    console.log(novoClique);
  }

  return (
    <TouchableOpacity onPress={clicar1} style={styles.container}>
      <View >
        <TouchableOpacity onPress={clicar2}>
          <a href={link}>
          <Image style={styles.foto} source={require("../CESUBANK.png.jpg")}/>
          </a>
        </TouchableOpacity>
        <br></br>
        <Text>Seu saldo: {saldo}</Text>
        <br></br>
        <Button title="Atualizar saldo" onPress={atualizarSaldo}></Button>
        <br></br>
        <Button title="Depositar" onPress={()=> navigation.navigate('Deposito')} style={styles.button}></Button>
        <br></br>
        <Button title="Debitar" onPress={()=> navigation.navigate('Debito')} style={styles.button}></Button>
        <br></br>
        <Button title="Extrato" onPress={()=> navigation.navigate('Extrato')} style={styles.button}></Button>
        <br></br>
        <Button title="Extrato Especial" onPress={()=> navigation.navigate('Extrato Especial')} style={styles.button}></Button>
        <br></br>
        <Button title="Cheque Especial" onPress={()=> navigation.navigate('Cheque Especial')} style={styles.button}></Button>
        <br></br>
        <Button title="Poupança" onPress={()=> navigation.navigate('Poupanca')} style={styles.button}></Button>
        <StatusBar style="auto" />
      </View>
    </TouchableOpacity>
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
  },
  foto:{
    width: 130,
    height: 130,
    borderRadius: 50,
  }
});