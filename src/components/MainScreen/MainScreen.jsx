import React from "react";
import styled from "styled-components";
import TaxDeductionPopup from "../TaxDeductionPopup/TaxDeductionPopup";
import {useModal} from "../../utils/useModal";
import {color} from "../../utils/vars";
import Button from "../../ui/Button";
import {gradient} from "../../utils/mixins";

const StyledBlock = styled.div`
  width: 100%;
  height: 100vh;
  ${gradient};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(({isOpened}) => isOpened && `background: none;`)};
`;

const PageOverlay = styled.div`
  z-index: 5;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${color.overlayGray};
  opacity: 1;
  overflow: auto;
  pointer-events: auto;
`;

const MainScreen = () => {
  const {openModal, closeModal, isOpened} = useModal();
  return (
    <>
      <StyledBlock isOpened={isOpened}>
        <Button onClick={openModal} alternate={true}>
          Налоговый вычет
        </Button>
      </StyledBlock>
      {isOpened && (
        <>
          <PageOverlay />
          <TaxDeductionPopup closeModal={closeModal} /> 
        </>
      )}
    </>
  );
};

export default MainScreen;
