import React from "react";
import styled from "styled-components";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

// Enhanced styled button component
const StyledButton = styled.button`
  background-color: #dedede;
  color: #2a2a2a;
  padding: 0.75rem 1.5rem; /* Increased padding */
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  margin-left: auto;
  border-radius: 0.5rem; /* More rounded corners */
  transition: 0.3s ease, transform 0.2s ease; /* Smooth transitions */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Shadow effect */

  &:hover {
    background-color: #939393;
    transform: translateY(-2px); /* Lift effect on hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(215, 215, 215, 0.5); /* Highlighted outline on focus */
  }

  &:active {
    transform: translateY(0); /* Reset transform on active */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Reduced shadow on click */
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

  return <StyledButton onClick={handleLogin}>Login</StyledButton>;
};
