import React, { useState, useEffect } from "react";
import { Image, TouchableOpacity, Text } from "react-native";
import Main from "../../global/Main";
import * as S from "./styles";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import * as Notifications from "expo-notifications";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { serviceGet } from "../../sdk/admin";

const ScheduleScreen = ({ navigation }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [servico, setServices] = useState([]);
  const theme = useTheme();
  const barberShopId = 2;
  const currentDate = new Date();

  const formattedDate = format(currentDate, "dd 'de' MMMM, EEEE", {
    locale: ptBR,
  });

  const iconOptions = [
    { name: "cut-outline", image: null },
    {
      name: "straight-razor",
      image: require("../../assets/img/icons8-straight-razor-50.png"),
    },
    {
      name: "barbe-chair",
      image: require("../../assets/img/icons8-barber-chair-50.png"),
    },
    { name: "beard", image: require("../../assets/img/icons8-beard-50.png") },
    // Adicione mais opções de ícones conforme necessário
  ];

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

  useEffect(() => {
    const fetchDataService = async () => {
      try {
        const response = await serviceGet(barberShopId);
        setServices(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataService();
  }, []);

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
      <S.ContainerGrid>
        {servico.map(({ idService, name, duration, price, description }) => {
         
          // Encontra a opção de ícone correspondente com base no nome do serviço
          const iconOption = iconOptions.find(option => option.name === description);
          
          // Obtém a imagem do ícone da opção encontrada (ou null se não houver imagem)
          const iconImage = iconOption ? iconOption.image : null;

          const iconName = iconOption ? iconOption.name : '';
          console.log(iconName);

          return (
            <S.Button
              title="Serviço"
              key={idService}
              onPress={() => handleServicePress(idService)}
              selected={selectedServices.includes(idService)}
            >
              <S.IconView>
              {iconImage ? (
                      <Image
                        source={iconImage}
                        style={{ width: 36, height: 36 }}
                      />
                    ) : (
                      <Ionicons
                        name={iconName}
                        style={{ width: 36, height: 36 }}
                        size={36}
                        color={theme.highlightColor}
                      />
                    )}
                <S.Tempo>{duration}min</S.Tempo>
              </S.IconView>

              <S.Description>
                {name} {"\n"} R${price}{" "}
              </S.Description>
            </S.Button>
          );
        })}
      </S.ContainerGrid>

      {selectedServices.length > 0 && (
        <S.AutomationIcon
          onPress={() =>
            navigation.navigate("CalendarScreen", { selectedServices, servico })
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
    </Main>
  );
};

export default ScheduleScreen;