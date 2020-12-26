import React, { FC } from "react";
import styled from "styled-components";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
interface MenuItemWrapperProps {
  isActive?: boolean;
}
const MenuItemWrapper = styled.div<MenuItemWrapperProps>`
  width: 620px;
  background-color: ${({isActive}) => isActive ? '#F7F9FF' : '#FFFFFF'};

  border-radius: 16px;
  padding: 17px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IconWrapper = styled.div<MenuItemWrapperProps>`
  width: 56px;
  height: 56px;
  background-color: white;
  border-radius: 50%;
  margin-right: 20px;
  border: ${({isActive}) => !isActive && '1px solid #EAEEFB'};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div``;

const Title = styled.h3`
  margin: 0 0 15px;
  color: #161E34;
  font-weight: 900;
  font-size: 16px;
`;

const Description = styled.p`
  margin: 0;
  color: #3B4767;
  font-weight: 500;
  font-size: 14px;
`;

interface MenuItemProps {
  isActive?: boolean;
  icon?: string;
  title: string;
  description: string;
  value?: number;
  maxValue?: number;
}

const MenuItem: FC<MenuItemProps> = ({isActive, icon, title, description, value, maxValue}) => {
  
  return(
    <MenuItemWrapper isActive={isActive}>
      <IconWrapper isActive={isActive}>
        {isActive ? (<CircularProgressbarWithChildren counterClockwise  styles={{path: {
      stroke: `#0083FF`,
    }, trail: {
      stroke: '#F7F9FF',
    },}}  strokeWidth={4} value={Number(value)} maxValue={Number(maxValue)}>
          <img src={icon} alt="icon"/>
        </CircularProgressbarWithChildren>) : <img src={icon} alt="icon"/>}
      </IconWrapper>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </MenuItemWrapper>
  )
}

export default MenuItem;
