import React from "react";
import styled from "styled-components";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton, SignOutButton } from "../AuthButtons";

// Wrapper style for the button container
const Wrapper = styled.div`
  background-color: #186e98;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-weight: bold;
  box-sizing: border-box;

  /* Simple hover effect */
  &:hover {
    background-color: #1f8cb6; /* Slightly lighter background on hover */
    cursor: pointer;
  }
`;

function LogButton() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <Wrapper>{isAuthenticated ? <SignOutButton /> : <SignInButton />}</Wrapper>
  );
}

export default LogButton;
