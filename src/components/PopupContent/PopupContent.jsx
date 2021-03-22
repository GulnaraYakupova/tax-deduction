import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {h1Text, introText} from "../../utils/typography";
import {color, media} from "../../utils/vars";

const StyledTitle = styled.h1`
  ${h1Text};
  margin-bottom: 20px;
`;
const StyledIntro = styled.p`
  ${introText};
  width: 90%;
  color: ${color.grey};
  margin-bottom: 24px;

  ${media.tablet} {
    width: 95%;
  }
`;
const StyledContent = styled.div`
  ${media.mobile} {
    height: 85%;
  }
`;

const PopupContent = ({title, intro, children}) => (
  <StyledContent>
    <StyledTitle>{title}</StyledTitle>
    <StyledIntro>{intro}</StyledIntro>
    {children}
  </StyledContent>
);

PopupContent.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired
}

export default PopupContent;
