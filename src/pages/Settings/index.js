import React, { useContext, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Main from "../../global/Main";
import * as S from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { ThemeContext } from "../../global/styles/themeProvider";

const SettingsScreen = () => {
  const { updateColor, accentColor, themeColors, updateThemeColors } =
    useContext(ThemeContext);
  const [inputColor, setInputColor] = useState(accentColor);
  const [logoImage, setLogoImage] = useState("");

  const handleColorOptionClick = (color) => {
    setInputColor(color);
  };

  const handleInputChange = (text) => {
    let color = text.trim();
    if (!color.startsWith("#")) {
      color = `#${color}`;
    }
    setInputColor(color);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (result.assets !== null) {
      setLogoImage(result.assets[0].uri);
    }
  };

  const handleBrandChange = async () => {
    await updateColor(inputColor);
    const updatedColors = {
      ...themeColors,
      bgButton: inputColor,
    };
    updateThemeColors(updatedColors);

    if (logoImage) {
    }

    try {
      // implementar
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Main>
      <S.Header>
        <S.HeaderTitle>Configurações</S.HeaderTitle>
      </S.Header>

      <S.Section>
        <S.SectionTitle>Personalize as Cores do Aplicativo</S.SectionTitle>

        <S.ColorOptionsContainer>
          <S.ColorOption
            style={{ backgroundColor: "#FF6900" }}
            onPress={() => handleColorOptionClick("#FF6900")}
          />
          <S.ColorOption
            style={{ backgroundColor: "#FCB900" }}
            onPress={() => handleColorOptionClick("#FCB900")}
          />
          <S.ColorOption
            style={{ backgroundColor: "#7BDCB5" }}
            onPress={() => handleColorOptionClick("#7BDCB5")}
          />
          <S.ColorOption
            style={{ backgroundColor: "#00D084" }}
            onPress={() => handleColorOptionClick("#00D084")}
          />
          <S.ColorOption
            style={{ backgroundColor: "#8ED1FC" }}
            onPress={() => handleColorOptionClick("#8ED1FC")}
          />
          <S.ColorOption
            style={{ backgroundColor: "#0693E3" }}
            onPress={() => handleColorOptionClick("#0693E3")}
          />
          <S.ColorOption
            style={{ backgroundColor: "#ABB8C3" }}
            onPress={() => handleColorOptionClick("#ABB8C3")}
          />
          <S.ColorOption
            style={{ backgroundColor: "#EB144C" }}
            onPress={() => handleColorOptionClick("#EB144C")}
          />
          <S.ColorOption
            style={{ backgroundColor: "#F78DA7" }}
            onPress={() => handleColorOptionClick("#F78DA7")}
          />
          <S.ColorOption
            style={{ backgroundColor: "#9900EF" }}
            onPress={() => handleColorOptionClick("#9900EF")}
          />
          <S.ColorOptionInputContainer>
            <S.ColorOptionInputIcon iconColor={inputColor}>
              <Ionicons name="ios-color-palette-outline" size={30} />
            </S.ColorOptionInputIcon>
            <S.ColorOptionInput
              value={inputColor}
              onChangeText={handleInputChange}
            />
          </S.ColorOptionInputContainer>
        </S.ColorOptionsContainer>
      </S.Section>

      <S.Section>
        <S.SectionTitle>Escolha a Logo do Aplicativo</S.SectionTitle>

        <S.LogoUploadContainer>
          {logoImage ? (
            <Image
              source={{ uri: logoImage }}
              style={{ width: 250, height: 120 }}
            />
          ) : (
            <S.SectionSubtitle>
              Clique abaixo para enviar a sua logo:
            </S.SectionSubtitle>
          )}
        </S.LogoUploadContainer>

        <S.LogoUploadButton onPress={pickImage}>
          <Ionicons name="ios-cloud-upload" size={30} color="white" />
          <S.LogoUploadButtonText>Enviar Logo</S.LogoUploadButtonText>
        </S.LogoUploadButton>
      </S.Section>

      <S.Button onPress={handleBrandChange}>
        <Ionicons name="ios-checkmark" size={30} color="white" />
      </S.Button>
    </Main>
  );
};

export default SettingsScreen;
