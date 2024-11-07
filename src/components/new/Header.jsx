import React from "react";
import styled from "styled-components";

const Header = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default Header;

const StyledTitle = styled.div`
  /* background-color: blue; */
  width: 100%;
  padding-top: 10px;
  padding-left: 30px;
  height: 50px;
  color: #186e98;
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;
