import styled from "styled-components/native";
import theme from "../../global/styles/theme";

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
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: ${theme.colors.bgButton};
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${theme.colors.white};
  font-weight: bold;
`;

export const WeekDayButton = styled.TouchableOpacity`
  width: 40px;
  height: 30px;
  background-color: ${(props) =>
    props.selected ? theme.colors.bgButton : theme.colors.white};
  border-radius: 10px;

  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

export const WeekDayButtonText = styled.Text`
  font-size: 14px;
  color: ${(props) =>
    props.selected ? theme.colors.white : theme.colors.black};
`;

export const WeekDaysWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

export const WeekDaysTitle = styled.Text`
  font-size: 16px;
  color: ${theme.colors.white};
  font-weight: bold;
`;

export const DateTitle = styled.Text`
  font-size: 16px;
  color: ${theme.colors.white};
  font-weight: bold;
  margin-top: 10px;
`;

export const DateWrapper = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

export const DateButton = styled.TouchableOpacity`
  width: 150px;
  height: 30px;
  background-color: ${theme.colors.bgButton};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const DateButtonText = styled.Text`
  font-size: 14px;
  color: ${theme.colors.white};
  font-weight: bold;
`;

export const DateText = styled.Text`
  font-size: 14px;
  color: ${theme.colors.white};
  font-weight: bold;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 150px;
  height: 30px;
  background-color: ${theme.colors.bgButton};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const CloseButtonText = styled.Text`
  font-size: 14px;
  color: ${theme.colors.white};
  font-weight: bold;
`;

export const DayContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const DayTitle = styled.Text`
  font-size: 16px;
  color: ${theme.colors.white};
  font-weight: bold;
  margin-top: 10px;
`;
