import React from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import theme from "../../global/styles/theme";

import * as S from "./styles";

// Este componente serve para padronizar as paginas, adicionando a cor de fundo,
// adaptando a statusBar para o fundo escuro e adicionando a Header com a logo.
const Main = ({ children }) => {
  return (
    <SafeAreaView
      style={{ backgroundColor: theme.colors.background, height: "100%" }}
    >
      <StatusBar barStyle={"light-content"} />
      <S.Header>
        <S.LogoImage source={require("../../assets/img/AgendaBarba.png")} />
      </S.Header>

      <S.Container>{children}</S.Container>
    </SafeAreaView>
  );
};

export default Main;
