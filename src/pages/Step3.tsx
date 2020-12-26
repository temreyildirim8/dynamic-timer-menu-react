import React, { FC  } from "react";
import styled from "styled-components";

import step3 from '../assets/images/step3.png';

const StyledDiv = styled.div`
`
const StyledImg = styled.img`
  height: 500px;
`

const Step3: FC = () => {
  return(
    <StyledDiv>
      <StyledImg src={step3} alt=""></StyledImg>
    </StyledDiv>
  )
}

export default Step3;