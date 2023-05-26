import React from "react";
import Main from "../../global/Main";
import * as S from "./styles";

const AutomatedBookingScreen = () => {
  return (
    <Main>
      {/* <S.Header>
        <S.HeaderTitle>Agendamento automático</S.HeaderTitle>
      </S.Header> */}

      <S.Container>
        <S.Title>
          Parabéns! Você acabou de desbloquear o agendamento automático!
        </S.Title>

        <S.Image source={require("../../assets/img/automated-booking.png")} />

        <S.Description>
          Com essa funcionalidade, você pode definir o horário em que costuma
          cortar o cabelo e o sistema irá agendar automaticamente para você.
        </S.Description>

        <S.ActivateButton>
          <S.ActivateButtonText>Ativar agora</S.ActivateButtonText>
        </S.ActivateButton>
      </S.Container>
    </Main>
  );
};

export default AutomatedBookingScreen;
