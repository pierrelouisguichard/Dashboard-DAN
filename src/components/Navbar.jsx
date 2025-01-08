import React from "react";
import styled from "styled-components";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton, SignOutButton } from "./AuthButtons";
import logo from "../assets/logo.png"; // Import the logo

export const PageLayout = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Container>
      <NavbarContainer>
        <NavbarBrand href="/">
          <Logo src={logo} alt="Logo" />
          d'Angelin Cyber Security Dashboardd
        </NavbarBrand>
        <NavbarRight>
          {isAuthenticated ? <SignOutButton /> : <SignInButton />}
        </NavbarRight>
      </NavbarContainer>
    </Container>
  );
};

const NavbarContainer = styled.nav`
  width: 100%;
  max-width: 2800px;
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const NavbarBrand = styled.a`
  color: #efefef;
  text-decoration: none;
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  align-items: center; // Align logo and text vertically
  gap: 1rem; // Add space between logo and text
  &:hover {
    color: white;
    text-decoration: none;
  }
`;

const Logo = styled.img`
  width: 50px; // Adjust the size of the logo
  height: 50px;
`;

const NavbarRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Container = styled.div`
  background-color: #3a3a3a; // Charcoal color
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px; // Add some padding for a better look
`;
