import React, { FC  } from "react";
import styled from "styled-components";

import step1 from '../assets/images/step1.png';

const StyledDiv = styled.div`
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