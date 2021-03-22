import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {gradient, visuallyHidden} from "../utils/mixins";
import { introText } from "../utils/typography";
import {color, media} from "../utils/vars";

const StyledInput = styled.input`
  ${visuallyHidden};
  &:checked + label {
    color: ${color.white};
    ${gradient};
    cursor: default;
  }
`;
const StyledLabel = styled.label`
  cursor: pointer;
  background-color: ${color.borderGray}; 
  border-radius: 50px;
  padding: 6px 12px;
  margin-right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${introText};

  &:hover {
    background-color: ${color.lightGray};
  }

  &:active {
    color: ${color.white};
    ${gradient};
  }

  ${media.mobile} {
    padding: 10px 15px;
    margin-right: 8px;
  }
`;

const Radio = ({
  name,
  value,
  label,
  onRadioChange,
  isDisabled=false,
  checked = false,
  ...props
}) => (
  <>
    <StyledInput
      type='radio'
      name={name}
      value={value}
      id={value}
      checked={checked}
      onChange={onRadioChange}
      {...props}
    />
    <StyledLabel htmlFor={value}>{label}</StyledLabel>
  </>
);

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onRadioChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  checked: PropTypes.bool
}

export default Radio;
