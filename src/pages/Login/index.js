import React, { useState, createRef } from "react";
import { Keyboard, ImageBackground } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//styled-component
import * as S from "./styles";

const LoginScreen = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const passwordInputRef = createRef();

  return (
    <ImageBackground
      source={require("../../assets/img/pexels-caleb-oquendo-3162022.jpg")}
      style={{flex: 1}}
    >
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <S.Container>
          <S.Title>Login</S.Title>
          <S.Input
            onChangeText={(UserEmail) => setUserEmail(UserEmail)}
            placeholder="Digite o e-mail"
            placeholderTextColor="#321f1b"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
          />

          <S.Input
            onChangeText={(UserPassword) => setUserPassword(UserPassword)}
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
        </S.Container>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default LoginScreen;
