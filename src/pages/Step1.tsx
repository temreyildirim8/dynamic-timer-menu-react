import React, { FC  } from "react";
import styled, { keyframes } from "styled-components";

import step1 from '../assets/images/step1.png';

const spin = keyframes`
  from { transform: translate( 0%, 0% ) rotate(1turn); }
  to { transform: translate( 0%, 0% ) rotate(0turn); }
`;

const StyledDiv = styled.div`
  animation: ${spin} 1s 1;
`

const StyledImg = styled.img`
  height: 500px;
`

const Step1: FC = () => {
  return(
    <StyledDiv>
      <StyledImg src={step1} alt=""></StyledImg>
    </StyledDiv>
  )
}

export default Step1;