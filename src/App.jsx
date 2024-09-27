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
    <div className="App">
      <AuthenticatedTemplate>
        <GridLayout />
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
      <AngledBanner>PROTOTYPE</AngledBanner> {/* Angled Banner */}
      <MainContent />
    </>
  );
}

/** Styled-components for the Angled Banner */
const AngledBanner = styled.div`
  position: absolute;
  top: 20px;
  right: -50px; /* Moves the banner slightly outside the viewport */
  background-color: rgba(255, 0, 0, 0.8);
  color: white;
  padding: 10px 50px; /* Larger padding for the angled look */
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  transform: rotate(45deg); /* Rotate to create the angled look */
  z-index: 1000; /* Ensure it's always on top */
  pointer-events: none; /* Prevent interaction with the banner */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;
