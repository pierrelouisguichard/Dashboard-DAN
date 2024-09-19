import React, { useEffect, useState } from "react";
import { PageLayout } from "./components/Navbar";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import styled from "styled-components";
import GridLayout from "./components/Grid";

/**
 * If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered.
 */
const MainContent = () => {
  return (
    <div className="App">
      <AuthenticatedTemplate>
        <Container>
          <GridLayout />
        </Container>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <h5 className="card-title">
          Please sign-in to see your profile information.
        </h5>
      </UnauthenticatedTemplate>
    </div>
  );
};

export default function App() {
  return (
    <>
      <PageLayout />
      <MainContent />
    </>
  );
}

const Container = styled.div`
  /* background-color: green; */
  max-width: 1800px;
  margin: 0 auto; // Centers the container horizontally
  display: flex; // Optional: If you want to use flex properties inside the container
  justify-content: center; // Optional: If you want to center contents horizontally inside the container
  align-items: center; // Optional: If you want to center contents vertically inside the container
`;
