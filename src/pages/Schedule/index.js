import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import Main from "../../global/Main";
import * as S from "./styles";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import * as Notifications from "expo-notifications";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { services } from "./mock";

const ScheduleScreen = ({ navigation }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const theme = useTheme();

  const currentDate = new Date();

  const formattedDate = format(currentDate, "dd 'de' MMMM, EEEE", {
    locale: ptBR,
  });

  const notifications = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Agendamento",
        body: "Amanhã seu corte!!",
      },
      trigger: {
        date: new Date("2023-06-16T00:08:30"),
      },
    });
  };

  const handleServicePress = (id) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((service) => service !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

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
        <Ionicons
          name="ios-play-circle-outline"
          size={30}
          color={theme.highlightColor}
        />
      </S.AutomationIcon>

      <S.TitleService>Selecione um serviço:</S.TitleService>
      {/* {services.map((service) => (
        <Text key={service.id}>{service.nome}</Text>
        // Exiba as informações do serviço conforme necessário
      ))} */}
      <S.ContainerGrid>
        {services.map(({ id, name, duration, price }) => (
          <S.Button
            title="Serviço"
            key={id}
            onPress={() => handleServicePress(id)}
            selected={selectedServices.includes(id)}
          >
            <S.IconView>
              <Ionicons name="cut-outline" size={36} color={"#00683C"} />
              <S.Tempo>{duration}min</S.Tempo>
            </S.IconView>
            <S.Description>
              {name} {"\n"} R${price}{" "}
            </S.Description>
          </S.Button>
        ))}
      </S.ContainerGrid>

      {selectedServices.length > 0 && (
        <S.AutomationIcon
          onPress={() =>
            navigation.navigate("CalendarScreen", { selectedServices })
          }
        >
          <S.AutomationIconText>Continuar</S.AutomationIconText>
          <Ionicons
            name="ios-play-circle-outline"
            size={30}
            color={theme.highlightColor}
          />
        </S.AutomationIcon>
      )}

      {/* <S.CalendarTitle>Selecione um dia:</S.CalendarTitle> */}

      <TouchableOpacity onPress={notifications}>
        <Text>TESTE</Text>
      </TouchableOpacity>
    </Main>
  );
};

export default ScheduleScreen;
