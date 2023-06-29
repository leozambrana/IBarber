import React, { useState, useRef, useCallback } from "react";
import {
  TouchableOpacity,
  Image,
  FlatList,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Main from "../../global/Main";
import * as S from "./styles";
import theme from "../../global/styles/theme";
import { Ionicons } from "@expo/vector-icons";
import { serviceAdd } from "../../sdk/admin";

const ServiceAdd = () => {
  const [nomeServico, setNomeServico] = useState("");
  const [preco, setPreco] = useState("");
  const [duracao, setDuracao] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);

  const priceInputRef = useRef();
  const durationInputRef = useRef();
  const iconSelectedRef = useRef();

  const iconOptions = [
    { name: "cut-outline", image: null },
    {
      name: "straight-razor",
      image: require("../../assets/img/icons8-straight-razor-50.png"),
    },
    {
      name: "barbe-chair",
      image: require("../../assets/img/icons8-barber-chair-50.png"),
    },
    { name: "beard2", image: require("../../assets/img/icons8-beard-50.png") },
    { name: "beard3", image: require("../../assets/img/icons8-beard-50.png") },
    { name: "beard4", image: require("../../assets/img/icons8-beard-50.png") },
    { name: "beard5", image: require("../../assets/img/icons8-beard-50.png") },
    // Adicione mais opções de ícones conforme necessário
  ];

  descricao = "Descrição teste";
  barberShopId = 2;

  const handleIconSelection =  (iconName) => {
    const teste = iconName;
     setSelectedIcon(iconName);
     console.log(teste)
  };


  const handleSubmit = useCallback(async () => {
    if (nomeServico && preco && duracao) {
      try {
        const response = await serviceAdd({
          name: nomeServico,
          description: descricao,
          barberShopId: barberShopId,
          price: preco,
          duration: duracao,
        });
        if (response === 0) {
          setNomeServico("");
          setPreco("");
          setDuracao("");
          alert("Tudo certo, cadastrou");
        }
      } catch (error) {
        console.error("Ocorreu um erro na solicitação:", error);
        alert(
          "Ocorreu um erro na solicitação. Por favor, tente novamente mais tarde."
        );
      }
    } else {
      console.error("Preencha todos os campos do formulário!");
    }
  });

  const getButtonStyle = (isSelected) => {
    if (isSelected) {
      return {
        borderColor: '#00683C',
        borderWidth: 3,
        transform: [{ scale: 1.1 }],
      };
    } else {
      return {
        backgroundColor: theme.white
      };
    }
  };

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
            onSubmitEditing={() => iconSelectedRef.current.focus()}
            ref={durationInputRef}
            value={duracao}
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
          />
          <S.Placeholder>Duração média</S.Placeholder>
        </S.InputContainer>

        <S.InputContainer>
          <S.IconContainer>
            <S.Placeholder>Ícone</S.Placeholder>
            <FlatList
              data={iconOptions}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <S.IconBackground  style={[
                  S.IconBackground,
                  getButtonStyle(selectedIcon === item.name)
                ]}>
                  <TouchableOpacity
                    onPress={() => handleIconSelection(item.name)}
                  >
                    {item.image ? (
                      <Image
                        source={item.image}
                        style={{ width: 36, height: 36 }}
                      />
                    ) : (
                      <Ionicons name={item.name} style={{ width: 36, height: 36 }} size={36} color={"#00683C"} />
                    )}
                  </TouchableOpacity>
                </S.IconBackground>
              )}
              ItemSeparatorComponent={() => <View style={{ width: 13 }} />}
            />
          </S.IconContainer>
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

        <S.Button onPress={handleSubmit}>
          <S.ButtonText>+</S.ButtonText>
        </S.Button>
      </Main>
    </KeyboardAwareScrollView>
  );
};

export default ServiceAdd;
