import React, { useEffect, useState } from "react";

//Animation
import barberAnimation from "./barberAnimation.json";
import AnimatedLottieView from "lottie-react-native";

//styled-components
import * as S from './styles'

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.replace("TabsNavigator");
    }, 5000);
  }, []);

  return (
    <S.Container>
      <AnimatedLottieView source={barberAnimation} loop autoPlay/>
    </S.Container>
  );
};

export default SplashScreen;
