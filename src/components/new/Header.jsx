import React from "react";
import styled from "styled-components";

const Header = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default Header;

const StyledTitle = styled.div`
  /* background-color: blue; */
  width: 100%;
  color: #186e98;
  font-size: 1.6rem;
  font-weight: bold;
  position: absolute; /* Position it absolutely */
  top: 0; /* Align it to the top of the container */
  padding-left: 25px;
  padding-top: 15px;
`;
