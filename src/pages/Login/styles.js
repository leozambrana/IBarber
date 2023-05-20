import styled from "styled-components/native";
import theme from '../../global/styles/theme';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    margin: 0 10px 40px 10px;
`

export const Top = styled.View`
    align-items: center;
`

export const Bottom = styled.View`
    width: 100%;
    margin-bottom: 30px;
`

export const TitleContainer = styled.View`
    flex-direction: row;
    color: black;
`

export const Title = styled.Text`
    font-size: 35px;
    font-weight: 600;   
    color: white;   
`

export const TitleBarber = styled.Text`
    font-size: 35px;
    text-decoration-line: underline;
    font-weight: 600;
    color: green;
`

export const SubTitle = styled.Text`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 100px;
    color: #DDDDDDBF;
`

export const InputContainer = styled.View`
  position: relative;
  margin-bottom: 10px;
`;

export const Placeholder = styled.Text`
  font-size: 14px;
  position: absolute;
  top: -10px;
  left: 10px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.black};
  padding: 0 10px;
`;


export const Input = styled.TextInput`
  height: 50px;
  width: 100%;
  border-radius: 10px;
  border-width: 1px;
  color: ${theme.colors.white};
  border-color: ${theme.colors.white};
  padding: 10px;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  height: 16%;
  width: 100%;
  border-radius: 5px;
  background-color: ${theme.colors.bgButton};
  justify-content: center;
  align-self: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 25px;
  color: ${theme.colors.white};
  font-weight: bold;
  text-align: center;
`;

export const View = styled.View`
  padding: 20px 0;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

export const RegisterTextStyle = styled.Text`
  color: #D5D5D5;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  align-self: center;
  padding: 10px;
`;
