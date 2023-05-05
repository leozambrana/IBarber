import styled from "styled-components/native";
import theme from '../../global/styles/theme';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin: 0 20px 40px 20px;
`

export const Title = styled.Text`
    font-size: 23px;
    font-weight: 600;
    margin-bottom: 40px;
    color: black;
    background-color: ${theme.colors.bgInput};
`

export const Input = styled.TextInput`
  color: #3f2d26;
  font-size: 16px;
  height: 50px;
  width: 100%;
  background-color: ${theme.colors.bgInput};
  border-radius: 10px;
  border-bottom-width: 1px;
  border-color: #3f2e26;
  padding: 10px;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 200px;
  border-radius: 5px;
  background-color: ${theme.colors.bgButton};
  justify-content: center;
  align-self: center;
  margin: 20px 0 0 0;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: ${theme.colors.white};
  font-weight: bold;
  text-align: center;
`;

export const RegisterTextStyle = styled.Text`
  color: ${theme.colors.black};
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  align-self: center;
  padding: 10px;
`;
