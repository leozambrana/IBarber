import React from "react";
import Main from "../../global/Main";
import * as S from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SettingsScreen = () => {
  const handleBrandChange = (colors, logo) => {
    // Implementar lógica para mudança das cores no aplicativo
  };

  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      contentContainerStyle={{ flex: 1 }}
    >
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
            <S.ColorOption style={{ backgroundColor: "#FF6900" }} />
            <S.ColorOption style={{ backgroundColor: "#FCB900" }} />
            <S.ColorOption style={{ backgroundColor: "#7BDCB5" }} />
            <S.ColorOption style={{ backgroundColor: "#00D084" }} />
            <S.ColorOption style={{ backgroundColor: "#8ED1FC" }} />
            <S.ColorOption style={{ backgroundColor: "#0693E3" }} />
            <S.ColorOption style={{ backgroundColor: "#ABB8C3" }} />
            <S.ColorOption style={{ backgroundColor: "#EB144C" }} />
            <S.ColorOption style={{ backgroundColor: "#F78DA7" }} />
            <S.ColorOption style={{ backgroundColor: "#9900EF" }} />
            <S.ColorOptionInputContainer>
              <S.ColorOptionInputIcon>#</S.ColorOptionInputIcon>
              <S.ColorOptionInput />
            </S.ColorOptionInputContainer>
          </S.ColorOptionsContainer>
        </S.Section>

        <S.Button onPress={handleBrandChange}>
          <Ionicons name="ios-checkmark" size={30} color="white" />
        </S.Button>
      </Main>
    </KeyboardAwareScrollView>
  );
};

export default SettingsScreen;
