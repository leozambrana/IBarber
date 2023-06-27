import React, {
  useState,
  useRef,
  useCallback,
  useContext,
  useEffect,
} from "react";
import {
  Keyboard,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  useNotificationHandler,
  setNotificationChannel,
  requestNotificationPermissions,
} from "../../global/Notifications";

//loader component
import Loader from "../../components/Loader";

//validações
import * as Yup from "yup";

//styled-componets
import * as S from "./styles";
import { login } from "../../sdk/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeContext } from "../../global/styles/themeProvider";
import { UserContext } from "../../sdk/auth/userProvider";

const LoginScreen = ({ navigation }) => {
  const { setUser } = useContext(UserContext);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const { accentColor } = useContext(ThemeContext);
  const passwordInputRef = useRef();
  const [expoPushToken, setExpoPushToken] = useState(null);
  const notification = useNotificationHandler();

  useEffect(() => {
    async function configureNotifications() {
      await setNotificationChannel();
      await requestNotificationPermissions();
    }
    configureNotifications();
  }, []);

  useEffect(() => {
    // console.log(notification)
  }, [notification]);

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

      const response = await login({
        username: userEmail,
        password: userPassword,
      });

      console.log("Usuário logado: ", response);
      setUser(response);

      // if (response) {
      //   AsyncStorage.setItem("user", JSON.stringify(response));
      // }

      navigation.navigate("SplashScreen", { response: response });
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
            <S.Button
              activeOpacity={0.5}
              onPress={handleSubmitPress}
              color={accentColor}
            >
              <S.ButtonText>Entrar</S.ButtonText>
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
