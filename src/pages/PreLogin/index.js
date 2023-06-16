import React, { useContext } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import * as S from "./styles";
import { ThemeContext } from "../../global/styles/themeProvider";

const PreLogin = ({ navigation }) => {
  const { accentColor } = useContext(ThemeContext);

  const handleCadastroPress = () => {
    navigation.navigate("Register", { origem: "PreLogin" });
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
          <S.Button
            activeOpacity={0.5}
            onPress={handleCadastroPress}
            color={accentColor}
          >
            <S.ButtonText>Cadastre-se</S.ButtonText>
          </S.Button>
          <S.Button
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Login")}
            color={accentColor}
          >
            <S.ButtonText>Entrar</S.ButtonText>
          </S.Button>
        </S.Bottom>
      </S.Container>
    </ImageBackground>
  );
};

export default PreLogin;
