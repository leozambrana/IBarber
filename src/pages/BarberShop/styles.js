import styled from "styled-components";
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
  color: ${theme.colors.white};
  font-weight: bold;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  gap: 20px;
`;

export const BarberInfo = styled.View`
  width: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${theme.colors.black};
  font-weight: bold;
  margin-bottom: 10px;
  padding: 3px 10px;
  background-color: ${theme.colors.white};
  border-radius: 10px;
  overflow: hidden;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: ${theme.colors.white};
  text-align: center;
`;

export const LocationContainer = styled.View`
  width: 100%;
  height: 50%;
  align-items: center;
  border-radius: 20px;
`;

export const MapContainer = styled.View`
  width: 100%;
  height: 89%;
  border-radius: 20px;
  overflow: hidden;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;
