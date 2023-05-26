import React, { useState, useRef, useCallback } from "react";
import { TouchableOpacity, Image, Keyboard } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Main from "../../global/Main";
import * as S from "./styles";

import { Ionicons } from "@expo/vector-icons";
import { serviceAdd } from "../../sdk/admin";

const ServiceAdd = () => {
  const [nomeServico, setNomeServico] = useState("");
  const [preco, setPreco] = useState("");
  const [duracao, setDuracao] = useState("");

  const handleSubmit = useCallback(async () => {
    if (nomeServico && preco && duracao) {
      const response = await serviceAdd({
        name: nomeServico,
        price: preco,
        duration: duracao,
      });
      if (response) {
        setNomeServico("");
        setPreco("");
        setDuracao("");
        alert("Tudo certo, cadastrou");
      }
    } else {
      console.error("Preencha todos os campos do formulário!");
    }
  });

  const priceInputRef = useRef();
  const durationInputRef = useRef();

  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <Main>
        <S.Header>
          <S.HeaderTitle>Serviços</S.HeaderTitle>
        </S.Header>

        <S.TitleService>Cadastro de Serviço:</S.TitleService>

        <S.InputContainer>
          <S.Input
            onChangeText={setNomeServico}
            autoCapitalize="none"
            value={nomeServico}
            onSubmitEditing={() => priceInputRef.current.focus()}
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
          />
          <S.Placeholder>Serviço</S.Placeholder>
        </S.InputContainer>

        <S.InputContainer>
          <S.Input
            onChangeText={setPreco}
            autoCapitalize="none"
            value={preco}
            ref={priceInputRef}
            onSubmitEditing={() => durationInputRef.current.focus()}
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
          />
          <S.Placeholder>Preço</S.Placeholder>
        </S.InputContainer>

        <S.InputContainer>
          <S.Input
            onChangeText={setDuracao}
            autoCapitalize="none"
            onSubmitEditing={Keyboard.dismiss}
            ref={durationInputRef}
            value={duracao}
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
          />
          <S.Placeholder>Duração média</S.Placeholder>
        </S.InputContainer>

        <S.ExampleService>Exemplos de Serviço:</S.ExampleService>

        <S.ContainerGrid>
          <S.View>
            <S.IconView>
              <Ionicons name="cut-outline" size={36} color={"#00683C"} />
              <S.Tempo>30min</S.Tempo>
            </S.IconView>
            <S.Description>Cabelo {"\n"} R$45 </S.Description>
          </S.View>
          <S.View>
            <S.IconView>
              <Image
                source={require("../../assets/img/icons8-straight-razor-50.png")}
                style={{ width: 36, height: 36 }}
              />
              <S.Tempo>30min</S.Tempo>
            </S.IconView>
            <S.Description>Barba {"\n"} R$45 </S.Description>
          </S.View>
        </S.ContainerGrid>

        <S.Button>
          <TouchableOpacity
            style={S.Button}
            activeOpacity={0.5}
            onPress={handleSubmit}
          >
            <S.ButtonText>+</S.ButtonText>
          </TouchableOpacity>
        </S.Button>
      </Main>
    </KeyboardAwareScrollView>
  );
};

export default ServiceAdd;
