import styled from "styled-components";
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
