import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Platform, Linking } from "react-native";
import Main from "../../global/Main";
import { Marker } from "react-native-maps";
import { REACT_APP_API } from "../../sdk";

const BarberInfoScreen = () => {
  const [barberShop, setBarberShop] = useState({
    idBarberShop: 0,
    shopName: "Barbearia do Zé",
    addressDesc: "Av. Universitária",
    addressNumber: "123",
    addressComplement: "Sala 1",
    addressCode: "1234-678",
    cityName: "Criciúma",
    stateName: "Santa Catarina",
    countryName: "",
  });

  const handleMapPress = () => {
    const latitude = -28.702046;
    const longitude = -49.409407;

    let url = "";
    if (Platform.OS === "ios") {
      url = `maps://?daddr=${latitude},${longitude}`;
    } else if (Platform.OS === "android") {
      url = `http://maps.google.com/maps?daddr=${latitude},${longitude}`;
    }

    Linking.openURL(url);
  };

  useEffect(() => {
    fetch(`${REACT_APP_API}/barberShop`, {
      method: "GET",
      headers: {
        "Request-body": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        {
          data.shopName !== null && setBarberShop(data);
        }
        console.log("Resposta do servidor:", data);
      })
      .catch((error) => {
        // console.error("Erro no envio do objeto:", error);
      });
  }, []);

  return (
    <Main>
      <S.Header>
        <S.HeaderTitle>{barberShop.shopName}</S.HeaderTitle>
      </S.Header>

      <S.BottomContainer>
        <S.BarberInfo>
          <S.Title>Horário de funcionamento</S.Title>
          <S.Description>Segunda à Sexta das 8h às 18h</S.Description>
          <S.Description>Sábado das 8h às 12h</S.Description>
        </S.BarberInfo>

        <S.LocationContainer>
          <S.Title>Localização</S.Title>
          <S.MapContainer>
            <S.Map
              initialRegion={{
                latitude: -28.702046,
                longitude: -49.409407,
                latitudeDelta: 0.0123,
                longitudeDelta: 0.00562,
              }}
              scrollEnabled={false}
              onPress={handleMapPress}
            >
              <Marker
                coordinate={{ latitude: -28.702046, longitude: -49.409407 }}
              />
            </S.Map>
          </S.MapContainer>

          <S.LinkingContainer>
            <S.LinkingButton onPress={() => handleMapPress()}>
              <S.LinkingText>Como chegar</S.LinkingText>
            </S.LinkingButton>
          </S.LinkingContainer>
        </S.LocationContainer>

        <S.BarberInfo>
          <S.Title>Endereço</S.Title>
          <S.Description>
            {barberShop.addressDesc}, {barberShop.addressNumber},{" "}
            {barberShop.cityName} - {barberShop.stateName},{" "}
            {barberShop.addressCode}
          </S.Description>
        </S.BarberInfo>
      </S.BottomContainer>
    </Main>
  );
};

export default BarberInfoScreen;
