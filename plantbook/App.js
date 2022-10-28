import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Login from './src/screens/Login/Login';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Login'>
        <Stack.Screen
          options = {{ headerStyle: {
            backgroundColor: '#ffffff'
          } } }
            name= 'Login'
            component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}