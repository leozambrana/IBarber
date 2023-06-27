import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  overflow: hidden;
`;

export const SelectButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`;

export const SelectText = styled.Text`
  font-size: 16px;
  color: #000;
`;

export const SelectedOption = styled.Text`
  font-size: 16px;
  color: #fff;
`;
