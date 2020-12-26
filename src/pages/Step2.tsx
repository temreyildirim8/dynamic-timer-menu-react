import React, { FC  } from "react";
import styled, { keyframes } from "styled-components";

import step2 from '../assets/images/step2.png';

const spin = keyframes`
  from { transform: translate( 0%, 0% ) rotate(0turn); }
  to { transform: translate( 0%, 0% ) rotate(1turn); }
`;

const StyledDiv = styled.div`
  animation: ${spin} 1s 1;
`

const StyledImg = styled.img`
  height: 500px;
`

const Step2: FC = () => {
  return(
    <StyledDiv>
      <StyledImg src={step2} alt=""></StyledImg>
    </StyledDiv>
  )
}

export default Step2;