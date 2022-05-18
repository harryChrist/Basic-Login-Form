import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { SupButton } from './style'

// Um Buttão Estilizado
function SuperButton({title, ...rest}) {
  const navigation = useNavigation();
  return (
    <SupButton {...rest}>
      <Text style={styles.login}>{title}</Text>
    </SupButton>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: 244,
    borderRadius: 100,
    backgroundColor: "#3F51B5",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  login: {
    color: "#fff",
    fontSize: 18
  }
});

export default SuperButton;