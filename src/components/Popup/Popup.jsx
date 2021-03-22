import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, media } from "../../utils/vars";
import PopupContent from "../PopupContent/PopupContent";
import { ReactComponent as IconClose } from '../../assets/icons/close.svg';
import {visuallyHidden} from '../../utils/mixins';

const StyledSection = styled.section`
  position: fixed;
  top: 10%;
  left: 50%;
  margin-left: -19%;
  opacity: 1;
  z-index: 10;
  width: 38.2%;
  background-color: ${color.white};
  border-radius: 30px;
  box-sizing: border-box;
  padding: 30px;

  ${media.tablet} {
    width: 59%;
    margin-left: -29%;
  }

  ${media.mobile} {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin-left: 0;
    border-radius: 0;
    padding: 30px 24px;
  }
`;

const StyledSpan = styled.span`
  ${visuallyHidden};
`

const StyledButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 15px;
  top: 15px;

  ${media.mobile} {
    right: 24px;
    top: 16px;
  }
`;

const StyledIconClose = styled(IconClose)`
  ${media.mobile} {
    width: 24px;
    height: 24px;
  }
`

const Popup = ({title, intro, closeModal, children, ...props}) => {
  return (
    <StyledSection>
      <StyledButton onClick={closeModal}><StyledSpan>Закрыть</StyledSpan><StyledIconClose /></StyledButton>

      <PopupContent title={title} intro={intro}>
        {children}
      </PopupContent>

    </StyledSection>
  );
};

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default Popup;
