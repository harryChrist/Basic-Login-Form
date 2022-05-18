import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

// Uso do Navigation
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// Paginação
import Welcome from '../pages/Welcome';
import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';

export default function Routes({ login }) {
  return (
    <Stack.Navigator initialRouteName={login}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
          }}
      />
      <Stack.Screen
        name="SingIn"
        component={SingIn}
        options={{
          title:false,
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="SingUp"
        component={SingUp}
        options={{
          title:false,
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}
