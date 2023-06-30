import React, { useEffect, useRef, useState, useCallback } from "react";
import { Keyboard } from "react-native";
import * as Yup from "yup";
import * as S from "./styles";
import Main from "../../global/Main";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { REACT_APP_API } from "../../sdk";
import {
  employeeAdd,
  employeeDelete,
  employeeGet,
  userGet,
} from "../../sdk/admin";
import Loader from "../../components/Loader";

const EmployeesScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirmation, setUserPasswordConfirmation] = useState("");

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordInputConfirmationRef = useRef();

  const barberShopid = 2;

  // atualiza a lista de funcionários
  useEffect(() => {
    const fetchDataEmployees = async () => {
      try {
        const response = await employeeGet(barberShopid);
        setEmployees(response);
      } catch (error) {
        console.error("Erro na resposta da API:", error);
      }
    };
    setLoading(true)
    fetchDataEmployees();
    setLoading(false);
  }, [employees]);

  const handleSubmitPress = useCallback(async () => {
    if (!userName.trim()) {
      alert("Por favor, preencha o Nome");
      return;
    }

    if (!userEmail.trim()) {
      alert("Por favor, preencha o e-mail");
      return;
    }

    if (!userPassword.trim()) {
      alert("Por favor, preencha a senha");
      return;
    }

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Por favor, preencha o nome"),
        email: Yup.string()
          .email("Por favor, digite um e-mail válido")
          .required("Por favor, preencha o e-mail"),
        password: Yup.string().required("Por favor, preencha a senha"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "As senhas precisam ser iguais")
          .required("Por favor, preencha a confirmação de senha"),
      });

      await schema.validate({
        name: userName,
        email: userEmail,
        password: userPassword,
        confirmPassword: userPasswordConfirmation,
      });
      setLoading(true);
      const response = await employeeAdd({
        name: userName,
        email: userEmail,
        password: userPassword,
        adminStatus: 0,
        barberShopId: 2,
        document: "teste",
      });
      if (response === 0) {
        setIsOpen(false);
        alert("cadastrou Realizado");
      } else {
        alert("Algo deu errado no cadastro ");
      }

      // segue aqui codigo para avançar para pagina de Login e bater no backend para Registrar o Usuario
    } catch (error) {
      alert(error.message);
    }finally{
      setLoading(false);
    }
  }, [userName, userEmail, userPassword, userPasswordConfirmation]);

  const handleRemoveEmployee = async (id) => {
    const newEmployees = employees.filter((employee) => employee.userId !== id);
    try {
      setLoading(true);
      await employeeDelete(id);
      setEmployees(newEmployees);
      alert("deletado com sucesso");
    } catch (error) {
      console.error("Erro na resposta da API:", error);
    }finally{
      setLoading(false);
    }
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Main>
      <S.Header>
        <S.HeaderTitle>Gerenciar funcionários</S.HeaderTitle>
      </S.Header>

      <S.EmployeesList>
        <S.ListContainer>
          {loading ? (
            <Loader loading={loading} />
          ) : (
            <>
              {employees.length === 0 ? (
                <S.EmptyListContainer>
                  <S.EmptyListText>
                    Sem funcionários cadastrados.
                  </S.EmptyListText>
                  <S.EmptyListText>
                    Adicione clicando no botão + abaixo.
                  </S.EmptyListText>
                </S.EmptyListContainer>
              ) : (
                employees.map((employee) => (
                  <S.EmployeeItem key={employee.idEmployee}>
                    <S.Avatar key={employee.idEmployee}>
                      <S.AvatarImage
                        key={employee.idEmployee}
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
                        onPress={() =>
                          handleRemoveEmployee(employee.idEmployee)
                        }
                      />
                    </S.TrashIcon>
                  </S.EmployeeItem>
                ))
              )}
            </>
          )}
        </S.ListContainer>
      </S.EmployeesList>

      <S.Modal visible={isOpen} transparent={true}>
        <KeyboardAwareScrollView
          scrollEnabled={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <S.ModalContainer>
            <S.ModalContent>
              <S.ModalTitle>Adicionar funcionário</S.ModalTitle>
              <S.ModalLabel>Crie um usuário:</S.ModalLabel>

              <S.SelectContainer>
                <S.InputContainer>
                  <S.Input
                    onChangeText={setUserName}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onSubmitEditing={() => emailInputRef.current.focus()}
                    underlineColorAndroid="#f000"
                    blurOnSubmit={false}
                  />
                  <S.Placeholder>Nome</S.Placeholder>
                </S.InputContainer>

                <S.InputContainer>
                  <S.Input
                    onChangeText={setUserEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onSubmitEditing={() => passwordInputRef.current.focus()}
                    ref={emailInputRef}
                    underlineColorAndroid="#f000"
                    blurOnSubmit={false}
                  />
                  <S.Placeholder>E-mail</S.Placeholder>
                </S.InputContainer>

                <S.InputContainer>
                  <S.Input
                    onChangeText={setUserPassword}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onSubmitEditing={() =>
                      passwordInputConfirmationRef.current.focus()
                    }
                    ref={passwordInputRef}
                    underlineColorAndroid="#f000"
                    blurOnSubmit={false}
                  />
                  <S.Placeholder>Senha</S.Placeholder>
                </S.InputContainer>

                <S.InputContainer>
                  <S.Input
                    onChangeText={setUserPasswordConfirmation}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    returnKeyType="next"
                    ref={passwordInputConfirmationRef}
                    onSubmitEditing={Keyboard.dismiss}
                    underlineColorAndroid="#f000"
                    blurOnSubmit={false}
                  />
                  <S.Placeholder>Confirmar senha</S.Placeholder>
                </S.InputContainer>
              </S.SelectContainer>

              <S.ModalButtonsContainer>
                <S.ModalButton onPress={handleCloseModal}>
                  <S.ModalButtonText>Cancelar</S.ModalButtonText>
                </S.ModalButton>

                <S.ModalButton onPress={handleSubmitPress}>
                  <S.ModalButtonText>Adicionar</S.ModalButtonText>
                </S.ModalButton>
              </S.ModalButtonsContainer>
            </S.ModalContent>
          </S.ModalContainer>
        </KeyboardAwareScrollView>
      </S.Modal>

      <S.AddButton onPress={handleOpenModal}>
        <S.AddButtonText>+</S.AddButtonText>
      </S.AddButton>
      <Loader loading={loading} />
    </Main>
  );
};

export default EmployeesScreen;
