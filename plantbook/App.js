import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Login from './src/screens/Login/Login';
import Contacto from './src/screens/Contactanos/Contactanos';
import Principal from './src/screens/Principal/Principal';
import Registro from './src/screens/Registro/Registro';
import Options from './src/screens/Options/Options';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Login'>
        <Stack.Screen
          options = {{ headerStyle: {
            backgroundColor: '#2CF000'
          } } }
            name= 'Login'
            component={Login} />
            <Stack.Screen
          options = {{ headerStyle: {
            backgroundColor: '#2CF000'
          } } }
            name= 'Contacto'
            component={Contacto} />
            <Stack.Screen
          options = {{ headerStyle: {
            backgroundColor: '#2CF000'
          } } }
            name= 'Principal'
            component={Principal} />
            <Stack.Screen
          options = {{ headerStyle: {
            backgroundColor: '#2CF000'
          } } }
            name= 'Registro'
            component={Registro} />
            <Stack.Screen
          options = {{ headerStyle: {
            backgroundColor: '#2CF000'
          } } }
            name= 'Options'
            component={Options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}