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
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
`;

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.textColor};
`;

export const SelectContainer = styled.View``;

export const EmployeesList = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const EmployeeItem = styled.View`
  width: 47%;
  width: 100%;
  height: 100px;
  background-color: ${theme.surface};
  align-items: center;
  border-radius: 10px;
  justify-content: flex-start;
  align-self: center;
  padding: 20px;
  gap: 20px;
  flex-direction: row;
`;

export const Avatar = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  border: 2px solid #ddd;
`;

export const AvatarImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;

export const EmployeeName = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
`;

export const ListContainer = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  gap: 20px;
`;

export const AddButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.theme.highlightColor};
  border-radius: 50px;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const AddButtonText = styled.Text`
  text-align: center;
  font-size: 30px;
  line-height: 33px;
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
`;

export const Modal = styled.Modal``;

export const ModalContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  width: 90%;
  height: auto;
  gap: 20px;
  background-color: ${theme.surface};
  border-radius: 10px;
  padding: 20px;
  justify-content: space-between;
`;

export const ModalTitle = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
`;

export const ModalLabel = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.textColor};
`;

export const ModalButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalButton = styled.TouchableOpacity`
  width: 45%;
  height: 50px;
  background-color: ${(props) => props.theme.highlightColor};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const ModalButtonText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
`;

export const TrashIcon = styled.TouchableOpacity`
  position: absolute;
  top: 60%;
  right: 10px;
  align-self: center;
`;

export const EmptyListText = styled.Text`
  width: 100%;
  font-size: 16px;
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;

export const EmptyListContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const EmployeeEmail = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.textColor};
`;

export const EmployeeAdminStatus = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.textColor};
`;

export const EmployeeDetails = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;
