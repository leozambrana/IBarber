import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const LogoImage = styled.Image`
  margin-top: 10px;
  height: 30px;
  width: 140px;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 20px;
  overflow: scroll;
`;

export const ExitTextStyle = styled.Text`
  color: #d5d5d5;
  position: absolute;
  right: 10px;
  font-weight: bold;
  font-size: 14px;
  align-self: center;
  padding: 10px;
`;
