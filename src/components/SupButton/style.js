import styled from 'styled-components/native';

export const SupButton = styled.TouchableOpacity`
  height: 45;
  width: 244;
  marginTop: 25;
  justify-content: center;
  alignItems: center;
  border-radius: 100;
  minWidth: 88;
  borderWidth: 1;
  border-style: solid;
  shadow-color: rgba(0,0,0,1);
  box-shadow: 3px 3px 5px rgba(0,0,0,1);
  font-size: 18;
  elevation: 5;
  background: ${props => props.second ? "rgba(230, 230, 230,0)" : 'rgba(47,6,124,1)'}
`