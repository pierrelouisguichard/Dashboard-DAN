import React from "react";
import styled from "styled-components";
import { useMsal } from "@azure/msal-react";

export const SignOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  };

  return <StyledButton onClick={handleLogout}>Sign Out</StyledButton>;
};

const StyledButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  margin-left: auto;
  border-radius: 0.25rem;

  &:hover {
    background-color: #5a6268;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
  }
`;
