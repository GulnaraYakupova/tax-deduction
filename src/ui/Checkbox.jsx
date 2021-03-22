import React from "react";
import styled from "styled-components";
import {baseTransition, gradient, visuallyHidden} from "../utils/mixins";
import {inputText} from "../utils/typography";
import {color} from "../utils/vars";
import {addPreEndToNums} from "../utils/utils";

const StyledInput = styled.input`
  ${visuallyHidden};
  &:checked + label::before {
    border: none;
    ${gradient};
    background-image: url("../assets/icons/check.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  &:disabled + label::before {
    backround-color: ${color.gray};
    border-color: ${color.gray};
    background-image: url("../assets/icons/check.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const StyledLabel = styled.label`
  cursor: pointer;
  position: relative;
  padding: 16px 0 16px 31px;
  width: auto;
  border-bottom: 1px solid ${color.borderGray};
  ${inputText};
  ${baseTransition(['border'])}

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -10px;
    width: 20px;
    height: 20px;
    border: 1px solid ${color.borderGray};
    box-sizing: border-box;
    border-radius: 6px;
  }

  &:hover::before {
    border: 1px solid ${color.black};
  }
`;

const Checkbox = ({
  name,
  value,
  checked,
  year,
  onCheckboxChange,
  id,
  ...props
}) => (
  <>
    <StyledInput
      type='checkbox'
      name={name}
      value={value}
      id={name}
      checked={checked}
      onChange={evt => onCheckboxChange(id, evt.target.checked, value)}
    />
    <StyledLabel htmlFor={name}>{`${value.toLocaleString(
      "ru-RU"
    )} рублей ${addPreEndToNums(year)} год`}</StyledLabel>
  </>
);

export default Checkbox;
