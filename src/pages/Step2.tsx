import React, { FC  } from "react";
import styled from "styled-components";

import step2 from '../assets/images/step2.png';

const StyledDiv = styled.div`
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