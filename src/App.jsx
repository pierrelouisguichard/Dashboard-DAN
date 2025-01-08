import React from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import GridLayout from "./components/Grid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Agreement from "./components/new/Agreement";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton, SignOutButton } from "./components/AuthButtons";
import styled from "styled-components";
/**
 * If a user is authenticated, the GridLayout component is rendered. Otherwise, a sign-in prompt is displayed.
 */
const MainContent = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      <AuthenticatedTemplate>
        <GridLayout />
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <Grey>{isAuthenticated ? <SignOutButton /> : <SignInButton />}</Grey>
      </UnauthenticatedTemplate>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/agreement" element={<Agreement />} />
      </Routes>
    </Router>
  );
}

const Grey = styled.div`
  background-color: grey;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
