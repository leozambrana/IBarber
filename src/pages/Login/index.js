import React, { useState, useRef, useCallback } from "react";
import {
  Keyboard,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//loader component
import Loader from "../../components/Loader";

//validações
import * as Yup from "yup";

//styled-componets
import * as S from "./styles";
import { login } from "../../sdk/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  const passwordInputRef = useRef();

  const handleSubmitPress = useCallback(async () => {
    if (!userEmail.trim()) {
      alert("Por favor, preencha o e-mail");
      return;
    }

    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Por favor, digite um e-mail válido")
          .required("Por favor, preencha o e-mail"),
        password: Yup.string().required("Por favor, preencha a senha"),
      });

      await schema.validate({ email: userEmail, password: userPassword });
      // const response = await login({ username: userEmail, password: userPassword });
      // if (response) {
      //   AsyncStorage.setItem("user", JSON.stringify(response));
      // }

      navigation.navigate("SplashScreen");
      // setLoading(true);

      // segue aqui codigo para avançar para pagina de HOME e bater no backend para conferir o login
    } catch (error) {
      alert(error.message);
    }
  }, [userEmail, userPassword]);

  return (
    <ImageBackground
      source={require("../../assets/img/Background.jpg")}
      style={{ flex: 1 }}
      onLoad={() => setBackgroundLoaded(true)}
    >
      <StatusBar barStyle={"light-content"} />
      <KeyboardAwareScrollView
        scrollEnabled={false}
        contentContainerStyle={{ flex: 1 }}
        opacity={backgroundLoaded ? 1 : 0}
      >
        <S.Container>
          <Loader loading={loading} />
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
                onChangeText={setUserEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current.focus()}
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
              <S.Placeholder>E-mail</S.Placeholder>
            </S.InputContainer>
            <S.InputContainer>
              <S.Input
                onChangeText={setUserPassword}
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
              <S.Placeholder>Senha</S.Placeholder>
            </S.InputContainer>
            <S.Button>
              <TouchableOpacity
                style={S.Button}
                activeOpacity={0.5}
                onPress={handleSubmitPress}
              >
                <S.ButtonText>Entrar</S.ButtonText>
              </TouchableOpacity>
            </S.Button>
            <S.View>
              <S.RegisterTextStyle
                onPress={() => navigation.navigate("Register")}
              >
                Esqueceu a senha?
              </S.RegisterTextStyle>
              <S.RegisterTextStyle
                onPress={() =>
                  navigation.navigate("Register", { origem: "Login" })
                }
              >
                Novo aqui? Cadastrar
              </S.RegisterTextStyle>
            </S.View>
          </S.Bottom>
        </S.Container>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default LoginScreen;
