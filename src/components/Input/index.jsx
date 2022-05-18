import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import {useForm, Control, Controller, useController} from 'react-hook-form';

export type InputProps = {
  icon: string;
  value?: string;
}

// Um Input estilizado, para ser usado para o ControlledInput
export function Input({icon, value, ...rest}: InputProps) {
  return (
    <View style={[styles.container]}>
      <Icon name={icon || "md-mail"} style={styles.iconStyle}></Icon>
      <TextInput
        value={value}
        placeholderTextColor="#a1a1a1"
        style={styles.inputStyle}
        {...rest}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    paddingTop: 10,
    paddingLeft: 5,
    justifyContent: 'center',
    height: '100%',
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
  },
  inputStyle: {
    color: "#fff",
    marginLeft: 16,
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    paddingTop: 14,
    paddingBottom: 8,
  }
});
