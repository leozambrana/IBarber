import styled from "styled-components/native";
import MapView from "react-native-maps";
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

export const BottomContainer = styled.View`
  width: 100%;
  height: 100%;
  overflow: scroll;
  gap: 25px;
  margin-top: 20px;
`;

export const BarberInfo = styled.View`
  width: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${theme.black};
  font-weight: bold;
  margin-bottom: 10px;
  padding: 3px 10px;
  background-color: ${theme.white};
  border-radius: 10px;
  overflow: hidden;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: ${theme.white};
  text-align: center;
`;

export const LocationContainer = styled.View`
  width: 100%;
  height: 45%;
  align-items: center;
  border-radius: 20px;
`;

export const MapContainer = styled.View`
  width: 100%;
  height: 70%;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 15px;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const LinkingContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const LinkingButton = styled.TouchableOpacity`
  width: 40%;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.highlightColor};
  border-radius: 10px;
`;

export const LinkingText = styled.Text`
  font-size: 18px;
  color: ${theme.white};
  font-weight: bold;
`;
