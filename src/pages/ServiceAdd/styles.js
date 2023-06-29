import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

export const Header = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 25px;
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
`;

export const HeaderSubTitle = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
`;

export const TitleService = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
  margin: 20px 0;
`;

export const ExampleService = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
`;

export const InputContainer = styled.View`
  width: 100%;
  position: relative;
  margin-bottom: 10px;
`;

export const Placeholder = styled.Text`
  font-size: 14px;
  position: absolute;
  top: -10px;
  left: 10px;
  color: ${(props) => props.theme.textColor};
  background-color: ${theme.background};
  padding: 0 10px;
`;

export const Input = styled.TextInput`
  height: 50px;
  width: 100%;
  border-radius: 10px;
  border-width: 1px;
  color: ${(props) => props.theme.textColor};
  border-color: ${(props) => props.theme.textColor};
  padding: 10px;
  margin-bottom: 20px;
`;

export const ContainerGrid = styled.View`
  width: 100%;
  height: 13%;
  margin-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const View = styled.View`
  width: 170px;
  height: 100%;
  margin: 8px 8px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${theme.surface};
  border-radius: 10px;
`;

export const IconView = styled.View`
  width: 68px;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.textColor};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Tempo = styled.Text`
  font-size: 14px;
  color: ${theme.bgButton};
  font-weight: bold;
  padding-top: 6px;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
  padding-top: 6px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  /* position: absolute;
  bottom: 20px;
  right: 20px; */
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.highlightColor};
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-left: auto;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-size: 30px;
  line-height: 33px;
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
`;

export const IconSelector = styled.View`
  flex-direction: row;
`;

export const IconOption = styled.View`
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  padding: 10px;
`;

export const SelectedIconOption = styled.View`
  background-color: #00683c;
  width: 100px;
  height: 100px;
`;

export const IconContainer = styled.View`
  border-radius: 10px;
  border-width: 1px;
  color: ${(props) => props.theme.textColor};
  border-color: ${(props) => props.theme.textColor};
  padding: 10px;
  margin-bottom: 20px;
`;

export const IconBackground = styled.View`
  background-color: white;
  border-radius: 10px;
  border-width: 3px;
  border-color: ${(props) => props.theme.textColor};
  padding: 10px;
  margin: 5px 0;
`;
