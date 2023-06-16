import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Header = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 25px;
  color: ${theme.white};
  font-weight: bold;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: ${theme.white};
  font-weight: bold;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: ${theme.white};
  text-align: center;
  margin-top: 20px;
`;

export const ActivateButton = styled.TouchableOpacity`
  width: 170px;
  height: 50px;
  background-color: ${theme.white};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
`;

export const ActivateButtonText = styled.Text`
  font-size: 18px;
  color: ${theme.black};
  font-weight: bold;
`;

export const Image = styled.Image`
  width: 350px;
  height: 219px;
  margin: 25px;
`;
