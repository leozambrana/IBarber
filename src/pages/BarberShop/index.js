import React from "react";
import * as S from "./styles";
import { Platform, Linking, TouchableOpacity, Button } from "react-native";
import Main from "../../global/Main";
import { Marker } from "react-native-maps";

const BarberShopScreen = ({ navigation }) => {
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

  return (
    <Main>
      <S.Header>
        <S.HeaderTitle>Barbearia do Zé</S.HeaderTitle>
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
              scrollEnabled={true}
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
          <S.Title>Contato</S.Title>
          <S.Description>Telefone: (48) 99123-4567</S.Description>
          <S.Description>
            Av. Universitária, 1105 - Universitário, Criciúma - SC, 88806-000
          </S.Description>
        </S.BarberInfo>
      </S.BottomContainer>
    </Main>
  );
};

export default BarberShopScreen;
