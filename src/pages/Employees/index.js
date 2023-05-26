import React, { useState } from "react";
import * as S from "./styles";
import Main from "../../global/Main";
import SelectMenu from "../../components/SelectMenu";
import { Ionicons } from "@expo/vector-icons";

const EmployeesScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [employees, setEmployees] = useState([]);

  // Pegar os usuários do banco de dados
  const users = [
    { name: "Álisson", id: "1" },
    { name: "Giovanni", id: "2" },
    { name: "Leonardo", id: "3" },
    { name: "Natanael", id: "4" },
    { name: "Thiago", id: "5" },
  ];

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOptionSelect = (option) => {
    setSelectedUser(option);
  };

  const handleAddEmployee = () => {
    if (selectedUser) {
      const newEmployee = {
        name: selectedUser.name,
        id: selectedUser.id,
      };

      console.log("Novo funcionário:", selectedUser);
      console.log("Novo funcionário:", newEmployee);

      setEmployees([...employees, newEmployee]);

      // fetch("https://exemplo.com/funcionarios", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(selectedUser),
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log("Resposta do servidor:", data);
      //     setSelectedUser("");
      //   })
      //   .catch((error) => {
      //     console.error("Erro no envio do objeto:", error);
      //   });
    } else {
      console.error("Selecione um usuário!");
    }

    console.log("Adicionar funcionário");
    console.log(selectedUser);
    setIsOpen(false);
  };

  const handleRemoveEmployee = (id) => {
    console.log("Remover funcionário");
    console.log(id);

    const newEmployees = employees.filter((employee) => employee.id !== id);

    setEmployees(newEmployees);
  };

  return (
    <Main>
      <S.Header>
        <S.HeaderTitle>Gerenciar funcionários</S.HeaderTitle>
      </S.Header>

      <S.EmployeesList>
        <S.ListContainer>
          {employees.map((employee) => (
            <S.EmployeeItem key={employee.id}>
              <S.Avatar key={employee.id}>
                <S.AvatarImage
                  key={employee.id}
                  source={{
                    uri: "https://avatars.githubusercontent.com/u/60078669?v=4",
                  }}
                />
              </S.Avatar>
              <S.EmployeeName>{employee.name}</S.EmployeeName>
              <S.TrashIcon>
                <Ionicons
                  name="trash-outline"
                  size={24}
                  color="red"
                  onPress={() => handleRemoveEmployee(employee.id)}
                />
              </S.TrashIcon>
            </S.EmployeeItem>
          ))}
        </S.ListContainer>
      </S.EmployeesList>

      <S.Modal visible={isOpen} transparent={true}>
        <S.ModalContainer>
          <S.ModalContent>
            <S.ModalTitle>Adicionar funcionário</S.ModalTitle>
            <S.ModalLabel>Selecione um usuário:</S.ModalLabel>

            <S.SelectContainer>
              <SelectMenu options={users} onSelect={handleOptionSelect} />
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
