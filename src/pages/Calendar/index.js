import React, { useContext, useMemo, useState } from "react";
import { Text, Image } from "react-native";
import Main from "../../global/Main";
import * as S from "./styles";
// import theme from "../../global/styles/theme";

import "moment/min/moment-with-locales";
import moment from "moment";
import { availableTimes } from "./mock";
import { services } from "../Schedule/mock";
import * as Notifications from "expo-notifications";
import { useTheme } from "styled-components";
import { ThemeContext } from "../../global/styles/themeProvider";
moment.locale("pt-br");

const CalendarScreen = ({ navigation, route }) => {
  const selectedServicesIds = route.params.selectedServices;
  const [selectedDay, setSelectedDay] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const { localTheme } = useContext(ThemeContext);
  const theme = useTheme();

  const selectedServices = services.filter((service) =>
    selectedServicesIds.includes(service.id)
  );

  const handleDayPress = (day) => {
    setSelectedDay(moment(day.dateString));
  };

  const handleTimePress = (time) => {
    setSelectedTime(time);
  };

  const scheduleResult = useMemo(() => {
    if (selectedDay && selectedTime) {
      return {
        day: selectedDay,
        start: selectedTime,
        end: moment(selectedTime).add(
          selectedServices.reduce((total, { duration }) => total + duration, 0),
          "minutes"
        ),
      };
    }
  }, [selectedDay, selectedTime]);

  const handleConfirm = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Agendamento",
        body: "Lembrete do seu corte",
      },
      trigger: {
        date: scheduleResult.start.subtract(30, "minutes").toDate(),
      },
    });
  };

  return (
    <Main>
      <S.Header>
        <S.HeaderTitle>Faça um agendamento</S.HeaderTitle>
        {/* <S.HeaderSubTitle>6 de janeiro, quinta feira</S.HeaderSubTitle> */}
        {/* <S.HeaderSubTitle>{selectedDay.format('D')} de {selectedDay.format('MMMM')}, {selectedDay.format('dddd')}</S.HeaderSubTitle> */}
        <S.HeaderSubTitle>{selectedDay?.format("DD/MM/YYYY")}</S.HeaderSubTitle>
      </S.Header>

      <S.CalendarTitle>Selecione um dia:</S.CalendarTitle>

      <S.CalendarContainer>
        <S.CalendarComponent
          style={{
            width: 350,
            height: 370,
            borderRadius: 10,
            marginBottom: 20,
          }}
          theme={{
            calendarBackground: "#212121",
            textSectionTitleColor: theme.highlightColor,
            textSectionTitleDisabledColor: "#dddddd20",
            todayTextColor: theme.highlightColor,
            dayTextColor: theme.textColor,
            textDisabledColor: "#dddddd20",
            dotColor: "red",
            selectedDotColor: "#ffffff",
            arrowColor: theme.white,
            disabledArrowColor: "#d9e1e8",
            monthTextColor: "#FFF",
            selectedDayBackgroundColor: theme.highlightColor,
            selectedDayTextColor: "#FFF",
          }}
          onDayPress={handleDayPress}
        />
      </S.CalendarContainer>

      <S.Column gap="8px">
        <S.Column gap="4px">
          {selectedDay && (
            <>
              <S.CalendarTitle>Selecione um horário:</S.CalendarTitle>
              <S.Row gap="4px">
                {[...availableTimes, moment().add(35, "minutes")].map(
                  (time) => (
                    <S.TimeView
                      key={time}
                      onPress={() => handleTimePress(time)}
                    >
                      <S.TimeText>{time.format("HH:mm")}</S.TimeText>
                    </S.TimeView>
                  )
                )}
              </S.Row>
            </>
          )}
        </S.Column>

        {scheduleResult && (
          <S.Column gap="12px">
            <S.Column gap="8px">
              <S.CalendarTitle>Agendamento:</S.CalendarTitle>
              <S.HeaderSubTitle>
                {selectedServices.map(({ name }) => name).join(", ")}
              </S.HeaderSubTitle>
              <S.HeaderSubTitle>
                {scheduleResult.day.format("DD/MM/YYYY")}:{" "}
                {scheduleResult.start.format("HH:mm")} -{" "}
                {scheduleResult.end.format("HH:mm")}
              </S.HeaderSubTitle>
            </S.Column>
            <S.Button onPress={() => handleConfirm()}>
              <S.ButtonText>Confirmar</S.ButtonText>
            </S.Button>
          </S.Column>
        )}
      </S.Column>
    </Main>
  );
};

export default CalendarScreen;
