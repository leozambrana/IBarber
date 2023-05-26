import React, { useState, useCallback } from "react";
import Main from "../../global/Main";
import * as S from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";
import theme from "../../global/styles/theme";

const BusinessHoursScreen = () => {
  const [excludedDates, setExcludedDates] = useState([]);

  const [weekDays, setWeekDays] = useState([
    { id: 1, day: "Seg", selected: false },
    { id: 2, day: "Ter", selected: false },
    { id: 3, day: "Qua", selected: false },
    { id: 4, day: "Qui", selected: false },
    { id: 5, day: "Sex", selected: false },
    { id: 6, day: "Sáb", selected: false },
    { id: 7, day: "Dom", selected: false },
  ]);

  const handleDayPress = (day) => {
    const index = excludedDates.findIndex((item) => item === day.dateString);
    if (index === -1) {
      setExcludedDates([...excludedDates, day.dateString]);
    } else {
      const newExcludedDates = excludedDates.filter(
        (item) => item !== day.dateString
      );
      setExcludedDates(newExcludedDates);
    }
  };

  const handleSave =useCallback (async() => {
    const hasSelectedWeekDay = weekDays.some((day) => day.selected);
    const selectedWeekDay = weekDays.find((day) => day.selected);
    console.log(selectedWeekDay);

    if(hasSelectedWeekDay && excludedDates){
      const response = await serviceAdd({ weekDays: weekDays, excludedDates: excludedDates });
    }else{
      console.log("selecione algo")
    }
   
  });

  return (
    <Main>
      <S.Header>
        <S.HeaderTitle>Horários</S.HeaderTitle>
      </S.Header>

      <S.WeekDaysTitle>Selecione os dias da semana:</S.WeekDaysTitle>
      <S.WeekDaysWrapper>
        {weekDays.map((item) => (
          <S.WeekDayButton
            key={item.id}
            activeOpacity={0.6}
            selected={item.selected}
            onPress={() => {
              const newWeekDays = weekDays.map((day) => {
                if (day.id === item.id) {
                  day.selected = !day.selected;
                }
                return day;
              });
              setWeekDays(newWeekDays);
            }}
          >
            <S.WeekDayButtonText selected={item.selected}>
              {item.day}
            </S.WeekDayButtonText>
          </S.WeekDayButton>
        ))}
      </S.WeekDaysWrapper>

      <S.DateTitle>Selecione os dias não trabalhados:</S.DateTitle>
      <S.DateWrapper>
        <Calendar
          minDate={Date()}
          markedDates={excludedDates.reduce((acc, date) => {
            acc[date] = { selected: true, marked: true, selectedColor: "red" };
            return acc;
          }, {})}
          onDayPress={handleDayPress}
          style={{
            width: 350,
            height: 370,
            borderRadius: 10,
            marginBottom: 20,
          }}
          theme={{
            backgroundColor: theme.colors.surface,
            calendarBackground: theme.colors.surface,
            textSectionTitleColor: theme.colors.white,
            textSectionTitleDisabledColor: "#dddddd20",
            selectedDayBackgroundColor: "red",
            selectedDayTextColor: theme.colors.white,
            todayTextColor: theme.colors.white,
            dayTextColor: "green",
            textDisabledColor: "#dddddd20",
            dotColor: "red",
            selectedDotColor: "#ffffff",
            arrowColor: theme.colors.white,
            disabledArrowColor: "#d9e1e8",
            monthTextColor: theme.colors.white,
          }}
        />

        <S.DateText>
          {excludedDates.length > 0
            ? excludedDates.length === 1
              ? `${excludedDates.length} dia selecionado`
              : `${excludedDates.length} dias selecionados`
            : "Nenhum dia selecionado"}
        </S.DateText>
      </S.DateWrapper>

      <S.Button onPress={handleSave}>
        <Ionicons name="ios-checkmark" size={30} color="white" />
      </S.Button>
    </Main>
  );
};

export default BusinessHoursScreen;
