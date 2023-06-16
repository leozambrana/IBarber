import styled from "styled-components/native";
import theme from "../../global/styles/theme";

const isValidColor = (color) => {
  const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return colorRegex.test(color);
};

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

export const Section = styled.View`
  width: 100%;
  margin-top: 20px;
  align-items: center;
`;

export const SectionTitle = styled.Text`
  font-size: 20px;
  color: ${theme.white};
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SectionSubtitle = styled.Text`
  font-size: 16px;
  color: ${theme.white};
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
  border-radius: 5px;
`;

export const ColorOptionInputContainer = styled.View`
  width: 89%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid ${theme.white};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  gap: 0;
`;

export const ColorOptionInputIcon = styled.Text`
  font-size: 25px;
  color: ${theme.white};
  font-weight: bold;
  width: 50px;
  height: 50px;
  background-color: ${(props) =>
    isValidColor(props.iconColor) ? props.iconColor : "gray"};
  border-radius: 5px;
  border-top-right-radius: 0;
  text-align: center;
  line-height: 50px;
  overflow: hidden;
  margin-left: -1px;
`;

export const ColorOptionInput = styled.TextInput`
  width: 80%;
  height: 50px;
  border-radius: 5px;
  font-size: 20px;
  color: ${theme.white};
`;

export const LogoUploadContainer = styled.View`
  width: 100%;
  height: 150px;
  gap: 20px;
  border: 1px dashed ${theme.white};
  border-radius: 10px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 10px 0;
`;

export const LogoUploadText = styled.Text`
  font-size: 16px;
  color: ${theme.white};
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
  /* background-color: ${(props) =>
    isValidColor(props.color) && props.color}; */
  background-color: ${(props) => props.theme.highlightColor};
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${theme.white};
  font-weight: bold;
`;

export const LogoUploadButton = styled.TouchableOpacity`
  width: 160px;
  height: 45px;
  border-radius: 5px;
  background-color: ${(props) => isValidColor(props.color) && props.color};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 15px;
`;

export const LogoUploadButtonText = styled.Text`
  font-size: 16px;
  color: ${theme.white};
  font-weight: bold;
`;
