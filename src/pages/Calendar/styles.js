import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import { Calendar } from "react-native-calendars";

export const Header = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: flex-start;
  margin-top: 11px;
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
  margin-bottom: 10px;
`;

export const TitleService = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
  margin-top: 30px;
`;

export const ContainerGrid = styled.View`
  width: 100%;
  height: 40%;
  margin-top: 30px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const View = styled.View`
  width: 170px;
  height: 40%;
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
  color: ${(props) => props.theme.highlightColor};
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

export const CalendarTitle = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  margin: 30px 0;
  gap: 20px;
  align-items: center;
`;

export const CalendarContainer = styled.View`
  width: 100%;
  height: 50%;
  align-items: center;
  overflow: hidden;
  border-radius: 20px;
  margin: 20px 0;
`;

export const CalendarComponent = styled(Calendar)``;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  ${({ gap }) =>
    gap &&
    `
    gap: ${gap};
  `}
  ${({ align }) =>
    align &&
    `
    align-items: ${align};
  `}
  ${({ justify }) =>
    justify &&
    `
    justify-content: ${justify};
  `}
`;

export const Column = styled.View`
  display: flex;
  flex-direction: column;
  ${({ gap }) =>
    gap &&
    `
    gap: ${gap};
  `}
  ${({ align }) =>
    align &&
    `
    align-items: ${align};
  `}
  ${({ justify }) =>
    justify &&
    `
    justify-content: ${justify};
  `}
`;

export const TimeView = styled.TouchableOpacity`
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${theme.secondaryColor};
  ${({ selected }) =>
    selected &&
    `
    border: 1px solid ${theme.highlightColor};
  `}
`;

export const TimeText = styled.Text`
  color: ${({ theme }) => theme.textColor || "#F5F5F5"};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.highlightColor};
  border-radius: 8px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor || "#F5F5F5"};
`;
