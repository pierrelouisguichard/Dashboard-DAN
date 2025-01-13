import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link for navigation
import logo from "../../assets/logo.png"; // Import the logo

const Wrapper = styled.div`
  font-size: 2.5rem;
  margin: 0;
  padding: 10px;
  width: 100%; /* Prevents overflow */
  box-sizing: border-box; /* Includes padding in the width calculation */
  color: #186e98;
  font-weight: bold;
  display: flex;
  align-items: center; /* Vertically align the logo and text */
  justify-content: center; /* Center the title within the container */
  position: relative; /* Allows positioning the logo absolutely */
  @media (max-width: 2000px) {
    font-size: 1.5rem; /* Decrease font size for smaller screens */
    padding: 8px; /* Adjust padding */
    justify-content: right;
    padding-right: 30px;
  }
  @media (max-width: 1000px) {
  }
`;

const LogoLink = styled(Link)`
  position: absolute;
  left: 10px; /* Adjust as needed to set the distance from the left edge */
  display: inline-block; /* Ensure the link doesn't disrupt layout */
`;

const Logo = styled.img`
  width: 300px; /* Default logo size */
  height: auto; /* Maintain aspect ratio */
  @media (max-width: 2000px) {
    width: 250px; /* Adjust logo size for tablets and smaller devices */
  }
`;

const TitleText = styled.div`
  text-align: center; /* Ensure title is centered */
`;

function Title() {
  return (
    <Wrapper>
      <LogoLink to="/agreement">
        <Logo src={logo} alt="Logo" />
      </LogoLink>
      <TitleText>d’Angelin Cyber Security Dashboard</TitleText>
    </Wrapper>
  );
}

export default Title;
