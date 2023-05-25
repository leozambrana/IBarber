import React from "react";
import * as S from "./styles";
import Main from "../../global/Main";

const EmployeesScreen = () => {
  // Pegar os funcionários do banco de dados

  const employees = [
    { label: "Álisson", value: "1" },
    { label: "Giovanni", value: "2" },
    { label: "Natanael", value: "3" },
  ];

  const users = [
    { label: "Leonardo", value: "1" },
    { label: "Thiago", value: "2" },
  ];

  const handleAddEmployee = () => {
    console.log("Adicionar funcionário");
    employees.push({ label: "Novo funcionário", value: "4" });
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

      <S.AddButton onPress={handleAddEmployee}>
        <S.AddButtonText>+</S.AddButtonText>
      </S.AddButton>
    </Main>
  );
};

export default EmployeesScreen;
