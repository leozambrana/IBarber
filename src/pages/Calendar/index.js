import React, { useState } from "react";
import Main from "../../global/Main";
import * as S from "./styles";
import theme from "../../global/styles/theme";

const CalendarScreen = () => {
  return (
    <Main>
      <S.Header>
        <S.HeaderTitle>Sua agenda</S.HeaderTitle>
      </S.Header>

      {/* <S.Container>
        <S.CalendarContainer>
          <S.CalendarComponent
            theme={{
              backgroundColor: theme.colors.surface,
              calendarBackground: theme.colors.surface,
              textSectionTitleColor: theme.colors.white,
              selectedDayBackgroundColor: "green",
              selectedDayTextColor: "#ffffff",
              todayTextColor: "green",
              dayTextColor: theme.colors.white,
            }}
          />
        </S.CalendarContainer>
      </S.Container> */}
    </Main>
  );
};

export default CalendarScreen;
