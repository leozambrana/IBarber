import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Avatar = styled.View`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  border: 2px solid #ddd;
`;

export const AvatarImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.white};
  margin-bottom: 10px;
`;

export const InputContainer = styled.View`
  width: 100%;
  gap: 10px;
`;

export const Input = styled.TextInput`
  height: 50px;
  width: 100%;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${theme.colors.white};
  color: ${theme.colors.white};
  padding: 10px;
  margin-bottom: 20px;
`;

export const BottomContainer = styled.View`
  flex: 1;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  width: 30%;
  height: 50px;
  background-color: ${theme.colors.bgButton};
  border-radius: 10px;
  align-self: center;
  justify-content: center;
  margin: 20px 0;
  position: absolute;
  bottom: 0;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.colors.white};
  align-self: center;
`;

export const Form = styled.View`
  margin-top: 20px;
  width: 100%;
  height: 100%;
`;

export const Placeholder = styled.Text`
  font-size: 14px;
  position: absolute;
  top: -10px;
  left: 10px;
  color: ${theme.colors.white};
  background-color: #171717;
  padding: 0 10px;
`;
