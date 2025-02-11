import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { SignOutButton, PrintButton } from "./AuthButtons";

const Wrapper = styled.div`
  background-color:white;
  height: 10vh;
  font-size: 2rem;
  padding: 12px 20px;
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
  margin-right: 15px;
`;

const Logo = styled.img`
  width: 250px;
  height: auto;

  @media (max-width: 2000px) {
    width: 200px;
  }
`;

const Pill = styled.div`
  width: 10px;
  height: 25px;
  background-color: #0d4f70;
  border-radius: 10px;
  margin-right: 12px;
`;

const TitleText = styled.div`
  text-align: left;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Timestamp = styled.div`
  font-size: 1rem;
  font-weight: normal;
  color: #186e98;
`;

function Title() {
  const [timestamp, setTimestamp] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <LeftContainer>
        <LogoLink to="/agreement">
          <Logo src={logo} alt="Logo" />
        </LogoLink>
        <Pill />
        <TitleText>Cyber Security Dashboard</TitleText>
      </LeftContainer>
      <RightContainer>
        <Timestamp>{timestamp}</Timestamp>
        <SignOutButton />
        <PrintButton />
      </RightContainer>
    </Wrapper>
  );
}

export default Title;
