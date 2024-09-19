import React from "react";
import styled from "styled-components";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

export const PageLayout = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Container>
      <NavbarContainer>
        <NavbarBrand href="/">d'Angelin Dashboard</NavbarBrand>
        <NavbarRight>
          {isAuthenticated ? <SignOutButton /> : <SignInButton />}
        </NavbarRight>
      </NavbarContainer>
    </Container>
  );
};

const NavbarContainer = styled.nav`
  width: 100%;
  max-width: 1800px;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const NavbarBrand = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.25rem;
  &:hover {
    color: white;
    text-decoration: none;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Container = styled.div`
  background-color: #232323;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
