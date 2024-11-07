import React from "react";
import { PageLayout } from "./components/Navbar";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import GridLayout from "./components/Grid";
import styled from "styled-components";

/**
 * If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered.
 */
const MainContent = () => {
  return (
    <MainContainer>
      <AuthenticatedTemplate>
        <GridLayout />
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <PageLayout />
        <h5 className="card-title">
          Please sign-in to see your profile information.
        </h5>
      </UnauthenticatedTemplate>
    </MainContainer>
  );
};

export default function App() {
  return (
    <>
      <MainContent />
    </>
  );
}

/** Styled-components for the Main Content */
const MainContainer = styled.div`
  background-color: #f0f0f0;
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Nunito";
`;
