import React from "react";
import * as S from "./styles";
import Main from "../../global/Main";
import SelectMenu from "../../components/SelectMenu";

const EmployeesScreen = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState("");

  // Pegar os funcionários do banco de dados
  const employees = [
    { label: "Álisson", value: "1" },
    { label: "Giovanni", value: "2" },
    { label: "Natanael", value: "3" },
  ];

  // Pegar os usuários do banco de dados
  const users = [
    { label: "Leonardo", value: "1" },
    { label: "Thiago", value: "2" },
  ];

  const handleOpenModal = () => {
    console.log("Adicionar funcionário");
    setIsOpen(true);
    // Abrir modal para adicionar funcionário
    // Selecionar usuário
    // Modificar o tipo do usuário de cliente para funcionário
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleAddEmployee = () => {
    console.log(selectedUser);
    setIsOpen(false);
  };

  return (
    <Main>
      <S.Header>
        <S.HeaderTitle>Gerenciar funcionários</S.HeaderTitle>
      </S.Header>

      <S.EmployeesList>
        <S.ListContainer>
          {employees.map((employee) => (
            <S.EmployeeItem key={employee.value}>
              <S.Avatar>
                <S.AvatarImage
                  source={{
                    uri: "https://avatars.githubusercontent.com/u/60078669?v=4",
                  }}
                />
              </S.Avatar>
              <S.EmployeeName>{employee.label}</S.EmployeeName>
            </S.EmployeeItem>
          ))}
        </S.ListContainer>
      </S.EmployeesList>

      <S.Modal visible={isOpen} transparent={true}>
        <S.ModalContainer>
          <S.ModalContent>
            <S.ModalTitle>Adicionar funcionário</S.ModalTitle>

            <S.ModalLabel>Selecione um usuário</S.ModalLabel>
            <S.SelectContainer>
              <SelectMenu
                options={users}
                onValueChange={() => setSelectedUser()}
              />
            </S.SelectContainer>

            <S.ModalButtonsContainer>
              <S.ModalButton onPress={handleCloseModal}>
                <S.ModalButtonText>Cancelar</S.ModalButtonText>
              </S.ModalButton>

              <S.ModalButton onPress={handleAddEmployee}>
                <S.ModalButtonText>Adicionar</S.ModalButtonText>
              </S.ModalButton>
            </S.ModalButtonsContainer>
          </S.ModalContent>
        </S.ModalContainer>
      </S.Modal>

      <S.AddButton onPress={handleOpenModal}>
        <S.AddButtonText>+</S.AddButtonText>
      </S.AddButton>
    </Main>
  );
};

export default EmployeesScreen;
