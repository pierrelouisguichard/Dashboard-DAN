import React from "react";
import styled from "styled-components";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../API/authConfig";

// Enhanced styled button component
const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  width: 100%;
  height: 100%;
`;

const StyledButton2 = styled.button`
  background-color: white;
  border-radius: 5px;
  border: none;
  color: black;
  width: 200px;
  height: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    outline: 2px solid #000;
  }
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

  return <StyledButton2 onClick={handleLogin}>Go To Dashboard</StyledButton2>;
};
