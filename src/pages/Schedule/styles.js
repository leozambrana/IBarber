import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

export const Header = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: start;
  margin-top: 11px;
`;

export const HeaderTitle = styled.Text`
  font-size: 25px;
  color: ${theme.colors.white};
  font-weight: bold;
`;

export const HeaderSubTitle = styled.Text`
  font-size: 14px;
  color: ${theme.colors.white};
  font-weight: bold;
`;

export const TitleService = styled.Text`
  font-size: 18px;
  color: ${theme.colors.white};
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
  background-color: ${theme.colors.surface};
  border-radius: 10px;
`;

export const IconView = styled.View`
  width: 68px;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Tempo = styled.Text`
  font-size: 14px;
  color: ${theme.colors.bgButton};
  font-weight: bold;
  padding-top: 6px;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 12px;
  color: ${theme.colors.white};
  font-weight: bold;
  padding-top: 6px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const CalendarTitle = styled.Text`
  font-size: 18px;
  color: ${theme.colors.white};
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
`;

export const CalendarComponent = styled(CalendarList)`
  width: 100%;
  height: 100%;
`;

export const AutomationIcon = styled.TouchableOpacity`
  width: 160px;
  flex-direction: row;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  /* align-self: flex-start; */
  margin-top: 10px;
`;

export const AutomationIconText = styled.Text`
  font-size: 18px;
  line-height: 35px;
  color: #00683c;
  font-weight: bold;
`;
