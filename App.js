import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Principal from './src/telas/Principal'
import ChequeEspecial from './src/telas/ChequeEspecial'
import Debito from './src/telas/Debito'
import Deposito from './src/telas/Deposito'
import Extrato from './src/telas/Extrato'
import ExtratoEspecial from './src/telas/ExtratoEspecial'
import Poupanca from './src/telas/Poupanca'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='CesuBank'
          component={Principal}
        />
        <Stack.Screen
          name='Cheque Especial'
          component={ChequeEspecial}
        />
        <Stack.Screen
          name='Debito'
          component={Debito}
        />
        <Stack.Screen
          name='Deposito'
          component={Deposito}
        />
        <Stack.Screen
          name='Extrato'
          component={Extrato}
        />
        <Stack.Screen
          name='Extrato Especial'
          component={ExtratoEspecial}
        />
        <Stack.Screen
          name='Poupanca'
          component={Poupanca}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

