import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { SignOutButton, PrintButton } from "./AuthButtons";

const Wrapper = styled.div`
  /* background-color: blue; */
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
  max-width: 1900px;

  @media (max-width: 2000px) {
    font-size: 1.5rem;
    padding: 8px;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoLink = styled(Link)`
  margin-right: 10px;
`;

const Logo = styled.img`
  width: 300px;
  height: auto;

  @media (max-width: 2000px) {
    width: 250px;
  }
`;

const Pill = styled.div`
  width: 15px;
  height: 15px;
  background-color: #186e98;
  border-radius: 50%;
  margin-right: 10px;
`;

const TitleText = styled.div`
  text-align: left;
`;

const Inside = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

function Title() {
  return (
    <Inside>
      <Wrapper>
        <LeftContainer>
          <LogoLink to="/agreement">
            <Logo src={logo} alt="Logo" />
          </LogoLink>
          <Pill />
          <TitleText>Cyber Security Dashboard</TitleText>
        </LeftContainer>
        <ButtonContainer>
          <SignOutButton />
          <PrintButton />
        </ButtonContainer>
      </Wrapper>
    </Inside>
  );
}

export default Title;
