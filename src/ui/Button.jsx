import React from "react";
import styled from "styled-components";
import {color, media} from "../utils/vars";
import {buttonText} from '../utils/typography';
import {baseTransition, gradient} from '../utils/mixins';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  font: inherit;
  ${buttonText};
  cursor: pointer;
  padding: 16px 32px;
  border: none;
  ${gradient};
  color: ${color.white};
  border-radius: 6px;
  ${baseTransition(['color', 'background-color'])};
  box-shadow: 0px 0px 24px ${color.opacityRed};

  &:hover,
  &:active {
    background-color: ${color.darkRed};
  }

  ${({alternate}) =>
    alternate &&
    `border: 1px solid ${color.white};
    color: ${color.white};
    filter: drop-shadow(0px 0px 44px ${color.altGray});
    background: none;

    &:hover,
    &:active {
      color: ${color.black};
      background-color: ${color.white};
      filter: none;
    }
  `}

  ${media.mobile} {
    padding: 12px 24px;
  }
  
  &:disabled {
    color: ${color.white};
    background-color: ${color.gray};
    filter: none;
  }
`;

const Button = ({alternate = false, children, onClick, ...props}) => (
  <StyledButton onClick={onClick} alternate={alternate} {...props}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  alternate: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button;
