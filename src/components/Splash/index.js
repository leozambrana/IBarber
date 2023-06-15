import React, { useEffect, useState } from "react";

//Animation
import barberAnimation from "./barberAnimation.json";
import AnimatedLottieView from "lottie-react-native";

//styled-components
import * as S from './styles'

const SplashScreen = ({ navigation, route}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      const response = route.params?.response;
      navigation.replace("TabsNavigator",{response: response});
    }, 5000);
  }, []);

  return (
    <S.Container>
      <AnimatedLottieView source={barberAnimation} loop autoPlay/>
    </S.Container>
  );
};

export default SplashScreen;
