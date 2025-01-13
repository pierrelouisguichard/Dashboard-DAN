import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useIsAuthenticated,
  useMsal,
} from "@azure/msal-react";
import GridLayout from "./components/Grid";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Agreement from "./components/new/Agreement";
import { SignInButton, SignOutButton } from "./components/AuthButtons";
import styled from "styled-components";
import MaterialTable from "./components/new/MaterialTable";
import { loginRequest } from "./authConfig";
import React, { useEffect, useState } from "react";
import { fetchDeviceData } from "./graph";

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

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated ? element : <Navigate to="/" replace />;
};

export default function App() {
  const { instance, accounts } = useMsal();
  const [deviceData, setDeviceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (accounts.length > 0) {
        try {
          const response = await instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0],
          });
          const data = await fetchDeviceData(response.accessToken);
          console.log("Fetched data:", data);
          setDeviceData(data.value || []); // Ensure it's an array

          console.log("Fetched data:", data); // Log the fetched data
          setDeviceData(data || []); // Update the state with fetched data
        } catch (error) {
          console.error("Error fetching device data", error);
        }
      } else {
        console.log("No accounts available.");
      }
    };

    fetchData();
  }, [accounts, instance]);

  useEffect(() => {
    console.log("Device data updated:", deviceData); // Log when deviceData changes
  }, [deviceData]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route
          path="/agreement"
          element={<ProtectedRoute element={<Agreement />} />}
        />
        <Route
          path="/devices"
          element={
            <ProtectedRoute element={<MaterialTable data={deviceData} />} />
          }
        />
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
