import React, { useState, useRef, useCallback } from "react";
import { Keyboard, ImageBackground, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//loader component
import Loader from '../../components/Loader'

//validações
import * as Yup from "yup";

//styled-componets
import * as S from "./styles";

const LoginScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  const passwordInputRef = useRef();

  const handleSubmitPress = useCallback(async () => {
    if (!userEmail.trim()) {
      alert('Por favor, preencha o e-mail');
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
      console.log("Dados válidos!");

      navigation.navigate('SplashScreen');
      // setLoading(true);

      // segue aqui codigo para avançar para pagina de HOME e bater no backend para conferir o login

    } catch (error) {
      alert(error.message);
    }
  }, [userEmail, userPassword]);

  return (
    <ImageBackground
      source={require("../../assets/img/pexels-caleb-oquendo-3162022.jpg")}
      style={{ flex: 1 }}
      onLoad={() => setBackgroundLoaded(true)}
    >
      <KeyboardAwareScrollView 
      scrollEnabled={false}
      contentContainerStyle={{ flex: 1 }}
      opacity={backgroundLoaded ? 1 : 0}>
        <S.Container>
          <Loader loading={loading}/>
          <S.Title>Login</S.Title>
          <S.Input
            onChangeText={setUserEmail}
            placeholder="Digite o e-mail"
            placeholderTextColor="#321f1b"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => passwordInputRef.current.focus()}
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
          />
          <S.Input
            onChangeText={setUserPassword}
            placeholder="Digite a senha"
            placeholderTextColor="#321f1b"
            keyboardType="default"
            ref={passwordInputRef}
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            underlineColorAndroid="#f000"
            returnKeyType="next"
          />
          <S.Button>
            <TouchableOpacity
              style={S.Button}
              activeOpacity={0.5}
              onPress={handleSubmitPress}
            >
              <S.ButtonText>Entrar</S.ButtonText>
            </TouchableOpacity>
          </S.Button>
          <S.RegisterTextStyle onPress={() => navigation.navigate("Register")}>
            Novo aqui? Cadastrar
          </S.RegisterTextStyle>
        </S.Container>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default LoginScreen;
