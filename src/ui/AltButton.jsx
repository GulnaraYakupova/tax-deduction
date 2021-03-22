import React from 'react';
import styled from 'styled-components';
import { baseTransition } from '../utils/mixins';
import { legendText } from '../utils/typography';
import { color } from '../utils/vars';
import PropTypes from 'prop-types';

const StyledButton = styled.div`
  cursor: pointer;
  border: none;
  background: none;
  color: ${color.darkRed};
  font: inherit;
  ${legendText};
  ${baseTransition('color')}

  &:hover {
    color: ${color.blurRed};
  }

  &:active {
    color: ${color.darkRed};
  }
`

const AltButton = ({onCountButtonClick, children, ...props}) => {
  return (
    <StyledButton type='button' onClick={onCountButtonClick} {...props}>{children}</StyledButton>
  );
};

StyledButton.propTypes = {
  onCountButtonClick: PropTypes.func,
}

export default AltButton;
