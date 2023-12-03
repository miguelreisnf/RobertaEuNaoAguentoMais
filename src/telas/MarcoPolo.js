import React, { useState } from 'react'
import {View, Text, TextInput, Button, Image, StyleSheet} from 'react-native'

export default function MarcoPolo(){
    const [tentativa, setTentativa] = useState(3);
    const [numero, setNumero] = useState()
    const [texto, setTexto] = useState("")
    const [sorteado,setSorteado] = useState(Math.floor(Math.random()*11))

    function descobrir(params) {
        console.log(sorteado);
        if (tentativa>0) {
         if (numero==sorteado) {
            setTexto("Você acertou o número")
        }
         else if (numero>sorteado) {
            setTexto("O seu palpite é maior que o número")    
            setTentativa(tentativa-1)
            
        }
         else if (numero<sorteado) {
           setTexto("O seu palpite é menor que o número")  
        setTentativa(tentativa-1)
        }
        }
        if (tentativa==0) {
            setTexto("Você perdeu... o número era: " + sorteado)
        }}

        function reiniciar(params) {
            setSorteado(Math.floor(Math.random()*11))
            setTentativa(3);
            setTexto("")
        }
    
    return(
        <View style={styles.container}>
            <Text>MARCO POLO!!!!!!!!!!</Text>
            <br></br>
            <Image style={styles.foto} source={require("../CESUBANK.png.jpg")}/>
            <br></br>
            <Text>Tente adivinhar o número! Você tem {tentativa} tentativas restantes</Text>
            <TextInput onChangeText={setNumero} style={styles.input}></TextInput>
            <Button title='Verificar' onPress={descobrir}></Button>
            <br></br>
            <Text>{texto}</Text>
            <br></br><br></br>
            <Button title='Reiniciar' onPress={reiniciar}></Button>
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