import React from "react";
import styled from "styled-components";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

// Enhanced styled button component
const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  width: 100%;
  height: 100%;
`;

// SignOutButton component
export const SignOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  };

  return <StyledButton onClick={handleLogout}>Sign Out</StyledButton>;
};

// SignInButton component
export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.log(e);
    });
  };

  return <StyledButton onClick={handleLogin}>Login</StyledButton>;
};
