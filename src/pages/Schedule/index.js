import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import Main from "../../global/Main";
import * as S from "./styles";
import theme from "../../global/styles/theme";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Ionicons } from "@expo/vector-icons";

const ScheduleScreen = ({ navigation }) => {
  const currentDate = new Date();

  const formattedDate = format(currentDate, "dd 'de' MMMM, EEEE", {
    locale: ptBR,
  });

  const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch("https://exemplo.com/servicos")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setServices(data);
  //     })
  //     .catch((error) => {
  //       console.error("Erro ao obter serviços:", error);
  //     });
  // }, []);

  return (
    <Main>
      <S.Header>
        <S.HeaderTitle>Faça um agendamento</S.HeaderTitle>

        <S.HeaderSubTitle>{formattedDate}</S.HeaderSubTitle>
      </S.Header>
      <S.AutomationIcon
        onPress={() => navigation.navigate("AutomatedBookingScreen")}
      >
        <S.AutomationIconText>Automatizar</S.AutomationIconText>
        <Ionicons name="ios-play-circle-outline" size={30} color={"#00683C"} />
      </S.AutomationIcon>

      <S.TitleService>Selecione um serviço:</S.TitleService>
      {/* {services.map((service) => (
        <Text key={service.id}>{service.nome}</Text>
        // Exiba as informações do serviço conforme necessário
      ))} */}
      <S.ContainerGrid>
        <S.View>
          <S.IconView>
            <Ionicons name="cut-outline" size={36} color={"#00683C"} />
            <S.Tempo>30min</S.Tempo>
          </S.IconView>
          <S.Description>Cabelo {"\n"} R$45 </S.Description>
        </S.View>
        <S.View>
          <S.IconView>
            <Image
              source={require("../../assets/img/icons8-straight-razor-50.png")}
              style={{ width: 36, height: 36 }}
            />
            <S.Tempo>30min</S.Tempo>
          </S.IconView>
          <S.Description>Barba {"\n"} R$45 </S.Description>
        </S.View>
        <S.View>
          <S.IconView>
            <Image
              source={require("../../assets/img/icons8-barber-chair-50.png")}
              style={{ width: 36, height: 36 }}
            />
            <S.Tempo>60min</S.Tempo>
          </S.IconView>
          <S.Description>Cabelo + Barba {"\n"} R$45 </S.Description>
        </S.View>
        <S.View>
          <S.IconView>
            <Image
              source={require("../../assets/img/icons8-beard-50.png")}
              style={{ width: 36, height: 36 }}
            />
            <S.Tempo>45min</S.Tempo>
          </S.IconView>
          <S.Description>Design de Barba {"\n"} R$45 </S.Description>
        </S.View>
      </S.ContainerGrid>

      <S.CalendarTitle>Selecione um dia:</S.CalendarTitle>
      <S.Container>
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
      </S.Container>
    </Main>
  );
};

export default ScheduleScreen;
