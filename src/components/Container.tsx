import React, { FC } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding-top: 80px;
  width: 1280px;
  margin: 0 auto;
`

const Container:FC = ({children}) => {
  return(
    <StyledDiv>{children}</StyledDiv>
  )
}

export default Container;
