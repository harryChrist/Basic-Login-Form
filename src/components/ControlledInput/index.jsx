import React from "react";
import { Control, Controller, FieldError } from 'react-hook-form';
import { Input, InputProps } from '../Input/index.jsx'
import styled from 'styled-components/native';
import * as yup from 'yup'


type Props = InputProps & {
  control: Control<any>;
  name: string;
  error?: FieldError;
}

// Sistema de erro: usando @hookform/resolvers/yup
export const InputSchema = yup.object({
  user: yup.string().required("Inform your username!"),
  email: yup.string().email("E-mail invalid!").required("Inform your E-mail!"),
  password: yup.string().min(6, "The password requires min six digits!").required("Inform your password!"),
  password_confirm: yup.string().oneOf([yup.ref('password'), null], "Passwords isn't the same!")
})

export function ControlledInput({control, name, error, ...rest}: Props) {
  return(
    <>
    <Controller
    name={name}
    control={control}
    render={({ field: {onChange, value}})=> (
      <Input
        onChangeText={onChange}
        value={value}
        {...rest}
      />
    )}
    />
    {
      error && <Error>{error.message}</Error>
    }
    </>
  )
}

const Error = styled.Text`
  color: rgb(255, 51, 51);
  fontSize: 16;
  text-align: center;
  marginTop: 6`