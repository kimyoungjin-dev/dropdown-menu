import { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Data } from "./Data";
import SubMenu from "./SubMenu";

const Container = styled.div`
  height: 80px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const IConContainer = styled(Link)`
  margin-left: 20px;
  color: white;
  font-size: 30px;
`;

const LeftContainer = styled.div<{ current: boolean }>`
  width: 250px;
  height: 100vh;
  background-color: black;
  position: fixed;
  transition: 0.6s ease-in-out;
  left: ${(props) => (props.current ? "0" : "-100%")};
  z-index: 10;
`;

const Wrapper = styled.div``;

export default function SliderMenubar() {
  const [isClick, setIsClick] = useState(false);
  const toggleSideVar = () => setIsClick((prev) => !prev);

  return (
    <>
      <Container>
        <IConContainer to="#">
          <GiHamburgerMenu onClick={toggleSideVar} />
        </IConContainer>
      </Container>

      <LeftContainer current={isClick}>
        <Wrapper>
          <IConContainer to="#">
            <AiOutlineCloseCircle onClick={toggleSideVar} />
          </IConContainer>

          {Data.map((item, index) => (
            <SubMenu key={index} item={item} />
          ))}
        </Wrapper>
      </LeftContainer>
    </>
  );
}
