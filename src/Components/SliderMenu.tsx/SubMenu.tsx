import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IProps } from "./InterFace";

const Container = styled(Link)`
  display: flex;
  color: white;
  height: 80px;
  padding: 20px;
  align-items: center;
  transition: 0.3s ease-in;
  justify-content: space-between;
  &:hover {
    background-color: gray;
    cursor: pointer;
    color: black;
  }
`;
const DropDown = styled(Link)`
  height: 60px;
  padding: 20px;
  display: flex;
  align-items: center;
  font-size: 18px;
  color: white;
  margin-left: 30px;
`;

const Label = styled.span`
  margin-left: 20px;
`;

export default function SubMenu({ item }: IProps) {
  const [subNav, setSubNav] = useState(false);
  const toggleSubNav = () => setSubNav((prev) => !prev);

  return (
    <>
      <Container to={item.path} onClick={item.subNav && toggleSubNav}>
        <div>
          {item.icon}
          <Label>{item.title}</Label>
        </div>

        <div>
          {item.subNav && subNav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Container>
      {subNav &&
        item.subNav?.map((item, index) => (
          <DropDown to={item.path} key={index}>
            {item.icon}
            <Label>{item.title}</Label>
          </DropDown>
        ))}
    </>
  );
}
