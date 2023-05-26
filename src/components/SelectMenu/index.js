import React, { useState } from "react";
import * as S from "./styles";

const SelectMenu = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    onSelect(option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <S.Container>
      <S.SelectButton onPress={() => setIsOpen(!isOpen)}>
        <S.SelectText>
          {selectedOption ? selectedOption.name : "Selecione uma opção"}
        </S.SelectText>
      </S.SelectButton>

      {isOpen && (
        <S.Container>
          {options.map((option) => (
            <S.SelectButton
              key={option.id}
              onPress={() => handleOptionSelect(option)}
            >
              <S.SelectText>{option.name}</S.SelectText>
            </S.SelectButton>
          ))}
        </S.Container>
      )}
    </S.Container>
  );
};

export default SelectMenu;
