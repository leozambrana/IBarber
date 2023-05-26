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
  color: ${theme.colors.white};
  font-weight: bold;
`;

export const Section = styled.View`
  width: 100%;
  margin-top: 20px;
`;

export const SectionTitle = styled.Text`
  font-size: 20px;
  color: ${theme.colors.white};
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SectionSubtitle = styled.Text`
  font-size: 16px;
  color: ${theme.colors.white};
  margin-bottom: 10px;
`;

export const ColorOptionsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ColorOption = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 3px solid ${theme.colors.white};
`;

export const LogoUploadContainer = styled.View`
  width: 100%;
  height: 150px;
  gap: 20px;
  border: 1px dashed ${theme.colors.white};
  border-radius: 10px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const LogoUploadText = styled.Text`
  font-size: 16px;
  color: ${theme.colors.white};
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: ${theme.colors.bgButton};
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${theme.colors.white};
  font-weight: bold;
`;
