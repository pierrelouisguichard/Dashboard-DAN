import React, { useEffect, useState } from "react";
import { PageLayout } from "./components/Navbar";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { callMsGraph } from "./graph";
import { ProfileData } from "./components/ProfileData";
import styled from "styled-components";
import Grid from "./components/Grid";

/**
 * Renders information about the signed-in user or a button to retrieve data about the user
 */
const ProfileContent = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  function RequestProfileData() {
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        callMsGraph(response.accessToken).then((response) => {
          setGraphData(response);
        });
      });
  }

  useEffect(() => {
    if (accounts && accounts.length > 0) {
      RequestProfileData();
    }
  }, [accounts]); // Runs only when `accounts` changes

  return (
    <>
      {/* <h5 className="card-title">Welcome {accounts[0].name}</h5> */}
      <Container>
        <Grid />
      </Container>

      {/* {graphData ? <ProfileData graphData={graphData} /> : <p>Loading</p>} */}
    </>
  );
};

/**
 * If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered.
 */
const MainContent = () => {
  return (
    <div className="App">
      <AuthenticatedTemplate>
        <ProfileContent />
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
  background-color: green;
  max-width: 1800px;
  margin: 0 auto; // Centers the container horizontally
  display: flex; // Optional: If you want to use flex properties inside the container
  justify-content: center; // Optional: If you want to center contents horizontally inside the container
  align-items: center; // Optional: If you want to center contents vertically inside the container
`;
