import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StatusBar } from "react-native";

import theme from "../../global/styles/theme";
import * as S from "./styles";
import Main from "../../global/Main";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [showSaveButton, setShowSaveButton] = useState(false);

  const handleInfoChanges = () => {
    {
      name.trim() &&
        (setDisplayName(name.trim()),
        console.log("Dado do usuário atualizado:", {
          name,
        }));
    }
    {
      email.trim() &&
        (setEmail(email.trim()),
        console.log("Dado do usuário atualizado:", {
          email,
        }));
    }
    {
      phoneNumber.trim() &&
        (setPhoneNumber(phoneNumber.trim()),
        console.log("Dado do usuário atualizado:", {
          phoneNumber,
        }));
    }
  };

  const handleInputChange = (inputName, value) => {
    if (!showSaveButton && value !== "") {
      setShowSaveButton(true);
    } else if (showSaveButton && value === "") {
      setShowSaveButton(false);
    }

    switch (inputName) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <Main>
      <S.Avatar>
        <S.AvatarImage
          source={{
            uri: "https://avatars.githubusercontent.com/u/85206010?v=4",
          }}
        />
      </S.Avatar>

      {displayName !== "" && <S.Name>{displayName}</S.Name>}

      <S.BottomContainer>
        <ScrollView keyboardDismissMode="interactive">
          <S.Form>
            <S.InputContainer>
              <S.Input
                placeholder="Seu nome"
                placeholderTextColor={`${theme.colors.white}8`}
                value={name}
                onChangeText={(text) => handleInputChange("name", text)}
                returnKeyType="next"
              />
              <S.Placeholder>Nome</S.Placeholder>
            </S.InputContainer>

            <S.InputContainer>
              <S.Input
                placeholder="seu@melhor.email"
                placeholderTextColor={`${theme.colors.white}8`}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(text) => handleInputChange("email", text)}
                value={email}
              />
              <S.Placeholder>E-mail</S.Placeholder>
            </S.InputContainer>

            <S.InputContainer>
              <S.Input
                placeholder="(11) 99999-9999"
                placeholderTextColor={`${theme.colors.white}8`}
                onChangeText={(text) => handleInputChange("phoneNumber", text)}
                value={phoneNumber}
              />
              <S.Placeholder>Telefone</S.Placeholder>
            </S.InputContainer>
          </S.Form>
        </ScrollView>
        {showSaveButton && (
          <S.Button onPress={handleInfoChanges}>
            <S.ButtonText>Salvar</S.ButtonText>
          </S.Button>
        )}
      </S.BottomContainer>
    </Main>
  );
};

export default ProfileScreen;
