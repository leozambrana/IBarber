import React, { useState } from "react";
import * as S from "./styles";

const SelectMenu = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <S.Container>
      <S.SelectButton onPress={() => setIsOpen(!isOpen)}>
        <S.SelectText>
          {selectedOption ? selectedOption : "Selecione uma opção"}
        </S.SelectText>
      </S.SelectButton>

      {isOpen && (
        <S.Container>
          {options.map((option) => (
            <S.SelectButton
              key={option.value}
              onPress={() => handleOptionSelect(option.label)}
            >
              <S.SelectText>{option.label}</S.SelectText>
            </S.SelectButton>
          ))}
        </S.Container>
      )}
    </S.Container>
  );
};

export default SelectMenu;
