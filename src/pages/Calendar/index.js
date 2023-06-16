import React, { useState } from "react";
import { Text, Image } from "react-native";
import Main from "../../global/Main";
import * as S from "./styles";
import theme from "../../global/styles/theme";

import { Ionicons } from "@expo/vector-icons";

const CalendarScreen = () => {
  return (
    <Main>
      <S.Header>
        <S.HeaderTitle>Faça um agendamento</S.HeaderTitle>
        <S.HeaderSubTitle>6 de janeiro, quinta feira</S.HeaderSubTitle>
      </S.Header>

      {/* <S.Container>
        <S.TitleService>Selecione um serviço:</S.TitleService>
        <S.ContainerGrid>
          <S.View>
            <S.IconView>
              <Ionicons name="cut-outline" size={36} color={"#00683C"}/>
              <S.Tempo>30min</S.Tempo>
            </S.IconView>
            <S.Description>Cabelo {'\n'} R$45 </S.Description>
          </S.View>
          <S.View>
            <S.IconView>
              <Image source={require('../../assets/img/icons8-straight-razor-50.png')} style={{width: 36, height: 36}}/>
              <S.Tempo>30min</S.Tempo>
            </S.IconView>
            <S.Description>Barba {'\n'} R$45 </S.Description>
          </S.View>
          <S.View>
            <S.IconView>
            <Image source={require('../../assets/img/icons8-barber-chair-50.png')} style={{width: 36, height: 36}}/>
              <S.Tempo>60min</S.Tempo>
            </S.IconView>
            <S.Description>Cabelo + Barba {'\n'} R$45 </S.Description>
          </S.View>
          <S.View>
            <S.IconView>
            <Image source={require('../../assets/img/icons8-beard-50.png')} style={{width: 36, height: 36}}/>
              <S.Tempo>45min</S.Tempo>
            </S.IconView>
            <S.Description>Design de Barba {'\n'} R$45 </S.Description>
          </S.View>
        </S.ContainerGrid>

      <S.CalendarTitle>Selecione um dia:</S.CalendarTitle>
      <S.Container>
        <S.CalendarContainer>
          <S.CalendarComponent
            theme={{
              backgroundColor: theme.surface,
              calendarBackground: theme.surface,
              textSectionTitleColor: theme.white,
              selectedDayBackgroundColor: "green",
              selectedDayTextColor: "#ffffff",
              todayTextColor: "green",
              dayTextColor: theme.white,
            }}
          />
        </S.CalendarContainer>
      </S.Container> */}
    </Main>
  );
};

export default CalendarScreen;
