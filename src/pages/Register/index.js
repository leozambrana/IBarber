import React, { useState, useRef, useCallback } from "react";
import { Keyboard, ImageBackground, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//loader component
import Loader from "../../components/Loader";

//validações
import * as Yup from "yup";

//styled-componets
import * as S from "./styles";

const RegisterScreen = ({ navigation, route }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirmation, setUserPasswordConfirmation] = useState("");
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordInputConfirmationRef = useRef();

  const handleSubmitPress = useCallback(async () => {
    if (!userName.trim()) {
      alert("Por favor, preencha o Nome");
      return;
    }

    if (!userEmail.trim()) {
      alert("Por favor, preencha o e-mail");
      return;
    }

    if (!userPassword.trim()) {
      alert("Por favor, preencha a senha");
      return;
    }

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Por favor, preencha o nome"),
        email: Yup.string()
          .email("Por favor, digite um e-mail válido")
          .required("Por favor, preencha o e-mail"),
        password: Yup.string().required("Por favor, preencha a senha"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "As senhas precisam ser iguais")
          .required("Por favor, preencha a confirmação de senha"),
      });

      await schema.validate({
        name: userName,
        email: userEmail,
        password: userPassword,
        confirmPassword: userPasswordConfirmation,
      });
      console.log("Dados válidos!");

      // segue aqui codigo para avançar para pagina de Login e bater no backend para Registrar o Usuario
    } catch (error) {
      alert(error.message);
    }
  }, [userName, userEmail, userPassword, userPasswordConfirmation]);

  return (
    <ImageBackground
      source={require("../../assets/img/Background.jpg")}
      style={{ flex: 1 }}
      onLoad={() => setBackgroundLoaded(true)}
      accessible={true}
      accessibilityLabel="Imagem de fundo para tela de Registro"
    >
      {!backgroundLoaded && <Loader />}
      <KeyboardAwareScrollView
        scrollEnabled={false}
        contentContainerStyle={{ flex: 1 }}
        opacity={backgroundLoaded ? 1 : 0}
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
            <S.InputContainer>
              <S.Input
                onChangeText={(UserName) => setUserName(UserName)}
                underlineColorAndroid="#f000"
                autoCapitalize="sentences"
                returnKeyType="next"
                onSubmitEditing={() => emailInputRef.current.focus()}
                blurOnSubmit={false}
              />
              <S.Placeholder>Nome</S.Placeholder>
            </S.InputContainer>
            <S.InputContainer>
              <S.Input
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                underlineColorAndroid="#f000"
                keyboardType="email-address"
                autoCapitalize="none"
                ref={emailInputRef}
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current.focus()}
                blurOnSubmit={false}
              />
              <S.Placeholder>E-mail</S.Placeholder>
            </S.InputContainer>
            <S.InputContainer>
              <S.Input
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                underlineColorAndroid="#f000"
                ref={passwordInputRef}
                returnKeyType="next"
                secureTextEntry={true}
                onSubmitEditing={() =>
                  passwordInputConfirmationRef.current.focus()
                }
                blurOnSubmit={false}
              />
              <S.Placeholder>Senha</S.Placeholder>
            </S.InputContainer>
            <S.InputContainer>
              <S.Input
                onChangeText={(userPasswordConfirmation) =>
                  setUserPasswordConfirmation(userPasswordConfirmation)
                }
                underlineColorAndroid="#f000"
                ref={passwordInputConfirmationRef}
                returnKeyType="next"
                secureTextEntry={true}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
              />
              <S.Placeholder>Confirmar Senha</S.Placeholder>
            </S.InputContainer>
            <S.Button>
              <TouchableOpacity
                style={S.Button}
                activeOpacity={0.5}
                onPress={handleSubmitPress}
              >
                <S.ButtonText>Registrar</S.ButtonText>
              </TouchableOpacity>
            </S.Button>
            {route.params.origem === 'PreLogin' && (
              <S.LoginTextStyle onPress={() => navigation.navigate("PreLogin")}>Voltar para Pré-Login</S.LoginTextStyle>
            )}
           {route.params.origem === 'Login' &&(
             <S.LoginTextStyle onPress={() => navigation.navigate("Login")}>Já tem Cadastro? Voltar</S.LoginTextStyle>              
           )}
          </S.Bottom>
        </S.Container>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default RegisterScreen;
