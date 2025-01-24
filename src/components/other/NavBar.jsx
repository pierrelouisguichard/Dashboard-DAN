import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { SignOutButton, PrintButton } from "./AuthButtons";

const Wrapper = styled.div`
  background-color: white;
  height: 10vh;
  font-size: 2.5rem;
  margin: 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  color: #186e98;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 2000px) {
    font-size: 1.5rem;
    padding: 8px;
  }
`;

const LogoLink = styled(Link)`
  position: absolute;
  left: 10px;
`;

const Logo = styled.img`
  width: 300px;
  height: auto;

  @media (max-width: 2000px) {
    width: 250px;
  }
`;

const TitleText = styled.div`
  text-align: center;
  flex-grow: 1;
`;

function NavBar() {
  return (
    <Wrapper>
      <LogoLink to="/agreement">
        <Logo src={logo} alt="Logo" />
      </LogoLink>
      <TitleText>d’Angelin Cyber Security Dashboard</TitleText>
      <SignOutButton />
      <PrintButton />
    </Wrapper>
  );
}

export default NavBar;
