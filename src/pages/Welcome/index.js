import React, { Component } from "react";

// usar navegação
import { useNavigation } from '@react-navigation/native'
// Componentes Estilizados
import styles, {Container, SupButton, Imagem, Texto} from './style'

export default function Welcome(props) {
  const navigation = useNavigation();
  return (
    <Container>
        <Imagem
          source={require("../../assets/icons/killua.png")}
          resizeMode="contain"
        ></Imagem>
        <Texto title>Welcome</Texto>
        <SupButton second onPress={() => navigation.navigate('SingUp')}>
          <Texto>SING UP</Texto>
        </SupButton>
        <SupButton onPress={() => navigation.navigate('SingIn')}>
          <Texto>LOGIN</Texto>
        </SupButton>
    </Container>
  );
}