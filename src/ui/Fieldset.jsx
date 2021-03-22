import React from "react";
import styled from "styled-components";
import { legendText } from "../utils/typography";

const StyledFieldset = styled.div``;
const StyledLegend = styled.h2`
  ${legendText};
  margin-bottom: 6px;
`;

const FieldSet = ({title, children, ...props}) => (
  <StyledFieldset {...props}>
    <StyledLegend>{title}</StyledLegend>
    {children}
  </StyledFieldset>
);

export default FieldSet;
