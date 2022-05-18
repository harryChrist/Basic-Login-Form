import * as React from 'react';
import { StatusBar } from 'react-native';
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components'
import Routes from './src/routes/index'

const cores= {
  bg:'#191a24',
};
export default function App() {
  return (
    <ThemeProvider theme={cores}>
    <NavigationContainer>
    <StatusBar backgroundColor="#38A69D" barStyle="light-content"/>
      <Routes login={'Welcome'}/>
    </NavigationContainer>
    </ThemeProvider>
  );
}