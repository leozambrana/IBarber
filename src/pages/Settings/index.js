import React from "react";
import Main from "../../global/Main";
import * as S from "./styles";
import { Ionicons } from "@expo/vector-icons";

const SettingsScreen = () => {
  const handleBrandChange = (colors, logo) => {
    // Implementar lógica para mudança das cores no aplicativo
  };

  return (
    <Main>
      <S.Header>
        <S.HeaderTitle>Configurações</S.HeaderTitle>
      </S.Header>

      <S.Section>
        <S.SectionTitle>Escolha a Logo do Aplicativo</S.SectionTitle>
        <S.SectionSubtitle>
          Clique abaixo para enviar a sua logo:
        </S.SectionSubtitle>

        <S.LogoUploadContainer>
          {/* {Implementar lógica de upload de imagens} */}
        </S.LogoUploadContainer>
      </S.Section>

      <S.Section>
        <S.SectionTitle>Personalize as Cores do Aplicativo</S.SectionTitle>
        <S.SectionSubtitle>
          Escolha as cores que representam sua marca:
        </S.SectionSubtitle>

        <S.ColorOptionsContainer>
          <S.ColorOption style={{ backgroundColor: "red" }} />
          <S.ColorOption style={{ backgroundColor: "green" }} />
          <S.ColorOption style={{ backgroundColor: "blue" }} />
          <S.ColorOption style={{ backgroundColor: "yellow" }} />
          <S.ColorOption style={{ backgroundColor: "purple" }} />
          <S.ColorOption style={{ backgroundColor: "orange" }} />
          <S.ColorOption style={{ backgroundColor: "pink" }} />
        </S.ColorOptionsContainer>
      </S.Section>

      <S.Button onPress={handleBrandChange}>
        <Ionicons name="ios-checkmark" size={30} color="white" />
      </S.Button>
    </Main>
  );
};

export default SettingsScreen;
