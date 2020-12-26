import React, { useEffect, useState } from 'react';
import Container from "./components/Container";
import MenuItem from "./components/Menu";
import Cloud from './assets/icons/cloud.svg';
import Eyes from './assets/icons/eyes.svg';
import Revenue from './assets/icons/revenue.svg';
import styled from 'styled-components';
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";

const Row = styled.div`
  margin-bottom: 24px;
  cursor: pointer;

  &:last-child{
    margin: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 80px;
`

const MenuTitle = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: #161E34;
  margin: 0 0 16px;
`
const MenuSubTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #3B4767;
  margin: 0 0 70px;
`

const Left = styled.div`
  width: 620px;
`

const BelowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Dots = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; 
  align-items: center;

  margin: 0 auto; // to align self
`;

const StyledButton = styled.button`
  position: absolute;
  right: 200px;

  color: white;
  background-color: #0083FF;
  border-radius: 24px;
  border: none;
  width: 180px;
  height: 40px;
  padding: 12px 32px;

  :focus {
    border: 2px solid #6CB8FF;
    box-shadow: 0px 0px 0px 3px rgba(0, 131, 255, 0.2);
  }

  :hover {
    background-color: #2093FF;
  }

  :active {
    background: #0065C7;
    border: 2px solid #6CB8FF;
  }
`;

interface DotProps{
  isActive?: boolean;
}
const Dot = styled.div<DotProps>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({isActive}) => isActive ? '#0083FF' : '#E1E6F5'};
  margin: 0 8px;
  cursor: pointer;
`

const menuItems = [{
  icon: Cloud,
  title: "Make Your Message Personal",
  description: "Customize your message and add in your brand’s personality.",
  Page: Step1,
},
{
  icon: Revenue,
  title: "View Your Potential Revenue",
  description: "Easily understand your potential weekly revenue.",
  Page: Step2,
},
{
  icon: Eyes,
  title: "View Your SMS Preview",
  description: "See how your text will appear to your subscribers.",
  Page: Step3,
},
]

const App = () => {
  const [second, setSecond] = useState(8);
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);

  const handleClick = (index: number) => {
    if (activeMenuIndex !== index) {
      setSecond(8);
      setActiveMenuIndex(index);
    }
  }

  useEffect(
    () => {
      const id= setInterval(() => {
        setSecond(second - 1); 
      }, 1000);
      if(second === 0) {
        setActiveMenuIndex(activeMenuIndex + 1);
        setSecond(8);
      }
      if (activeMenuIndex === 2 && second === 0) {
        setActiveMenuIndex(0);
        setSecond(8);
      }
      return () => {
        clearInterval(id);
      };
    },
    [activeMenuIndex, second],
  );

  return (
    <Container>
      <Wrapper >
        <Left>
          {menuItems.map((Item, index) => (
            <>
              {activeMenuIndex === index && <Item.Page></Item.Page>}
            </>
          ))}
        </Left>
        <div>
          <MenuTitle>3 Steps to SMS Success</MenuTitle>
          <MenuSubTitle>Convert 20% of your Abandoned Checkouts</MenuSubTitle>
          {menuItems.map((item, index) => (
            <Row onClick={() => handleClick(index)}>
              <MenuItem value={second} icon={item.icon} title={item.title} description={item.description} isActive={index === activeMenuIndex} maxValue={8}/>
            </Row>
          ))}
        </div>
      </Wrapper>
      <BelowWrapper>
        <Dots>
          {menuItems.map((_item, index) => <Dot onClick={() => handleClick(index)} isActive={activeMenuIndex === index} />
          )}

        </Dots>
        <StyledButton> Continue </StyledButton>
      </BelowWrapper>
    </Container>
  );
}

export default App;
