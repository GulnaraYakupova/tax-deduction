import React from 'react';
import MainScreen from '../MainScreen/MainScreen';
import styled from 'styled-components';
import {font} from '../../utils/mixins';

const StyledMain = styled.main`
  ${font.labGrotesque};
  font-weight: 400;
  font-size: 12px;
`
const App = () => (
    <StyledMain>
      <MainScreen />
    </StyledMain>
);

export default App;
