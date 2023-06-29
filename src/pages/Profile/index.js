import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import theme from "../../global/styles/theme";
import { REACT_APP_API } from "../../sdk";
import * as S from "./styles";
import Main from "../../global/Main";
import { UserContext } from "../../sdk/auth/userProvider";

const ProfileScreen = () => {
  const { user } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [data, setData] = useState({
    document: user.document,
    name: user.name,
    email: user.email,
    userId: user.userId,
    userPassword: user.password,
    profileId: user.profileId,
  });

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setPhoneNumber(user.phoneNumber);
    setDisplayName(user.name);
  }, []);

  const handleInfoChanges = async () => {
    // if (name.trim()) {
    //   setDisplayName(name.trim());
    //   setData({ ...data, name: name.trim() });
    //   console.log("Dado do usuário atualizado:", { name });
    // }

    // if (email.trim()) {
    //   setEmail(email.trim());
    //   setData({ ...data, email: email.trim() });
    //   console.log("Dado do usuário atualizado:", { email });
    // }

    // if (phoneNumber.trim()) {
    //   setPhoneNumber(phoneNumber.trim());
    //   console.log("Dado do usuário atualizado:", { phoneNumber });
    // }

    try {
      if (name.trim()) {
        setDisplayName(name.trim());
        setData({ ...data, name: name.trim() });
        console.log("Dado do usuário atualizado:", { name });
      }

      if (email.trim()) {
        setEmail(email.trim());
        setData({ ...data, email: email.trim() });
        console.log("Dado do usuário atualizado:", { email });
      }

      setData({ ...data, userId: user.userId });

      const response = await fetch(`${REACT_APP_API}/user/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });

      // console.log("Resposta do servidor:", response);
    } catch (error) {
      console.log("Erro ao atualizar os dados do usuário:", error);
    }
  };

  const handleInputChange = (inputName, value) => {
    setShowSaveButton(value !== "");

    switch (inputName) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phoneNumber":
        // Remover caracteres não numéricos do valor
        const numericValue = value.replace(/[^\d]/g, "");

        // Formatando o número de telefone em tempo real
        let formattedPhoneNumber = "";

        if (numericValue.length > 0) {
          formattedPhoneNumber += `(${numericValue.slice(0, 2)}`;
        }
        if (numericValue.length > 2) {
          formattedPhoneNumber += `) ${numericValue.slice(2, 7)}`;
        }
        if (numericValue.length > 7) {
          formattedPhoneNumber += `-${numericValue.slice(7, 11)}`;
        }

        // Verificar se o número de telefone está no formato correto
        const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
        const isValidPhone = phoneRegex.test(formattedPhoneNumber);

        setPhoneNumber(formattedPhoneNumber);

        // Atualizar o estado de showSaveButton somente se o número de telefone for inválido
        if (!isValidPhone) {
          setShowSaveButton(false);
        }

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
            uri: "https://avatars.githubusercontent.com/u/60078669?v=4",
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
                placeholderTextColor={`${theme.white}70`}
                value={name}
                onChangeText={(text) => handleInputChange("name", text)}
                returnKeyType="next"
                autoCapitalize="words"
              />
              <S.Placeholder>Nome</S.Placeholder>
            </S.InputContainer>

            <S.InputContainer>
              <S.Input
                placeholder="seu@melhor.email"
                placeholderTextColor={`${theme.white}70`}
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
                keyboardType="phone-pad"
                placeholderTextColor={`${theme.white}70`}
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
