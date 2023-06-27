import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Main from "../../global/Main";
import SelectMenu from "../../components/SelectMenu";
import { Ionicons } from "@expo/vector-icons";
import { REACT_APP_API } from "../../sdk";

const EmployeesScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [employees, setEmployees] = useState([]);
  const [users, setUsers] = useState([
    {
      document: "string",
      email: "alisson@gmail.com",
      name: "Álisson",
      password: "123",
      profileId: 0,
      userId: 1,
    },
    {
      document: "string",
      email: "giovanni@gmail.com",
      name: "Giovanni",
      password: "123",
      profileId: 0,
      userId: 2,
    },
    {
      document: "string",
      email: "leonardo@gmail.com",
      name: "Leonardo",
      password: "123",
      profileId: 0,
      userId: 3,
    },
    {
      document: "string",
      email: "natanael@gmail.com",
      name: "Natanael",
      password: "123",
      profileId: 0,
      userId: 4,
    },
    {
      document: "string",
      email: "thiago@gmail.com",
      name: "Thiago",
      password: "123",
      profileId: 0,
      userId: 5,
    },
  ]);

  useEffect(() => {
    // atualiza a lista de usuários
    fetch(`${REACT_APP_API}/users`, {
      method: "GET",
      headers: {
        "Request-body": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        {
          data.userId !== undefined && setUsers(data);
        }
        console.log("Resposta do servidor:", data);
      })
      .catch((error) => {
        console.error("Erro no envio do objeto:", error);
      });
  }, []);

  // atualiza a lista de funcionários
  useEffect(() => {
    fetch(`${REACT_APP_API}/employee`, {
      method: "GET",
      headers: {
        "Request-body": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        {
          response && setEmployees(data);
        }
        console.log("Resposta do servidor:", data);
      })
      .catch((error) => {
        // console.error("Erro no envio do objeto:", error);
      });
  }, []);

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
        adminStatus: false,
        barberShopId: 0,
        document: "string",
        email: selectedUser.email,
        idEmployee: 0,
        name: selectedUser.name,
        password: selectedUser.password,
        profileId: selectedUser,
        userId: selectedUser.userId,
      };

      fetch(`${REACT_APP_API}/employee`, {
        method: "POST",
        headers: {
          "Request-body": "application/json",
        },
        body: JSON.stringify(newEmployee),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Resposta do servidor:", data);
          setSelectedUser("");
        })
        .catch((error) => {
          // console.error("Erro no envio do objeto:", error);
        });

      console.log("Novo funcionário:", selectedUser);
      console.log("Novo funcionário:", newEmployee);

      setEmployees([...employees, newEmployee]);

      setSelectedUser(null);
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

    const newEmployees = employees.filter((employee) => employee.userId !== id);

    fetch(`${REACT_APP_API}/employee/${id}`, {
      method: "UPDATE",
      headers: {
        "Request-body": "application/json",
      },
      body: JSON.stringify(newEmployees),
    })
      .then((response) => response.json())
      .then((data) => {
        {
          data.userID !== undefined && setEmployees(data);
        }
        console.log("Resposta do servidor:", data);
      })
      .catch((error) => {
        // console.error("Erro no envio do objeto:", error);
      });

    setEmployees(newEmployees);
  };

  return (
    <Main>
      <S.Header>
        <S.HeaderTitle>Gerenciar funcionários</S.HeaderTitle>
      </S.Header>

      <S.EmployeesList>
        <S.ListContainer>
          {employees.length === 0 && (
            <S.EmptyListContainer>
              <S.EmptyListText>Sem funcionários cadastrados.</S.EmptyListText>
              <S.EmptyListText>
                Adicione clicando no botão + abaixo.
              </S.EmptyListText>
            </S.EmptyListContainer>
          )}

          {employees &&
            employees.map((employee) => (
              <S.EmployeeItem key={employee.userId}>
                <S.Avatar key={employee.userId}>
                  <S.AvatarImage
                    key={employee.userId}
                    source={{
                      uri: "https://avatars.githubusercontent.com/u/60078669?v=4",
                    }}
                  />
                </S.Avatar>
                <S.EmployeeDetails>
                  <S.EmployeeName>{employee.name}</S.EmployeeName>
                  <S.EmployeeEmail>{employee.email}</S.EmployeeEmail>
                  <S.EmployeeAdminStatus>
                    {employee.adminStatus ? "Administrador" : "Funcionário"}
                  </S.EmployeeAdminStatus>
                </S.EmployeeDetails>
                <S.TrashIcon>
                  <Ionicons
                    name="trash-outline"
                    size={24}
                    color="red"
                    onPress={() => handleRemoveEmployee(employee.userId)}
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
