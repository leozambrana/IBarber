import React from 'react'
import {     ImageBackground, TouchableOpacity } from "react-native";
import * as S from './styles';


const PreLogin = ({ navigation })  => {

    const handleCadastroPress = () => {
        navigation.navigate('Register', { origem: 'PreLogin' });
      };

  return (
    <ImageBackground
    source={require("../../assets/img/Background.jpg")}
    style={{ flex: 1 }}
  >
      <S.Container>
        <S.Top>
          <S.TitleContainer>
            <S.Title>Agenda</S.Title>
            <S.TitleBarber>Barba</S.TitleBarber>
          </S.TitleContainer>
          <S.SubTitle>A melhor experiência de barbearia</S.SubTitle>
        </S.Top>
        <S.Bottom>
          <S.Button>
            <TouchableOpacity
              style={S.Button}
              activeOpacity={0.5}
              onPress={handleCadastroPress}
            >
              <S.ButtonText>Cadastre-se</S.ButtonText>
            </TouchableOpacity>
          </S.Button>
          <S.Button>
            <TouchableOpacity
              style={S.Button}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Login")}
            >
              <S.ButtonText>Entrar</S.ButtonText>
            </TouchableOpacity>
          </S.Button>
        </S.Bottom>
      </S.Container>
  </ImageBackground>
  )
}

export default PreLogin