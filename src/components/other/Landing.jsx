import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { SignInButton } from "./AuthButtons";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: #f0f1f4;
  position: relative;
  font-family: "Nunito";

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background: #d9e5ef;
    clip-path: ellipse(75% 50% at 50% 0);
    opacity: 0.6;
    filter: blur(8px);
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 0px;
  width: 600px;
`;

const Content = styled.div`
  padding-top: 200px;
  text-align: left;
  color: black;

  width: 80%;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

const LandingPage = () => {
  return (
    <Container>
      <Logo src={logo} alt="Logo" />
      <Content>
        <Title>Welcome to Your Dashboard</Title>
        <Description>
          A one-page cybersecurity dashboard to monitor security metrics.
        </Description>
        <SignInButton />
      </Content>
    </Container>
  );
};

export default LandingPage;
