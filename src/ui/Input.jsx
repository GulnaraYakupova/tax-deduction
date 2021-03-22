import React, {useState} from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import {baseTransition, font} from "../utils/mixins";
import {errorText, inputText} from "../utils/typography";
import {color} from "../utils/vars";

import {ReactComponent as RubIcon} from "../assets/icons/rub-icon.svg";

const StyledBlock = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  border: 1px solid;
  border-color: ${color.borderGray};
  box-sizing: border-box;
  border-radius: 3px;
  width: 100%;
  padding: 7px 9px 8px;
  ${font.labGrotesque};
  ${inputText};
  margin-bottom: 9px;
  color: transparent;
  background: transparent;
  ${baseTransition(["border-color"])};

  &::placeholder {
    color: ${color.gray};
  }

  &:hover {
    border-color: ${color.black};
  }

  &:focus {
    outline: none;
    border-color: ${color.borderGray};
  }

  &:disabled {
    border-color: ${color.grey};
  }

  ${({isError}) => isError && `border-color: ${color.darkRed};`}
`;

const StyledInputCover = styled.label`
  position: absolute;
  top: 8px;
  left: 10px;
  display: flex;
  align-items: baseline;
  ${inputText};
  pointer-events: none;
`;

const StyledRubIcon = styled(RubIcon)`
  margin-left: 5px;
`;

const StyledErrorMessage = styled.p`
  ${errorText};
  color: ${color.darkRed};
  display: none;
  ${({isError}) => isError && `display: block`};
`;

const Input = ({
  placeholder,
  paymentRef,
  isError = false,
  onValueChange,
  ...props
}) => {
  const [value, setValue] = useState();

  const handleChangeValue = evt => {
    if (Number(evt.target.value) || evt.target.value === ``) {
      setValue(evt.target.value);
      if (isError) {
         onValueChange();
      }
    }
  };

  return (
    <StyledBlock>
      {value && (
        <StyledInputCover>
          {Number(value).toLocaleString("ru-RU")}
          <StyledRubIcon />
        </StyledInputCover>
      )}
      <StyledInput
        type='text'
        placeholder={placeholder}
        ref={paymentRef}
        value={value ? value : ""}
        onChange={handleChangeValue}
        isError={isError}
      />
      <StyledErrorMessage isError={isError}>
        Поле обязательно для заполнения
      </StyledErrorMessage>
    </StyledBlock>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  isError: PropTypes.bool, 
  onValueChange: PropTypes.func.isRequired
}

export default Input;
