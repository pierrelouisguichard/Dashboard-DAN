import React from "react";
import styled from "styled-components";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../API/authConfig";

const Btn = styled.button`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: 0.3s;
  background-color: white;

  &:hover {
    background-color: #1f8cb6;
    width: 125px;
    border-radius: 40px;
    transition-duration: 0.3s;

    .sign {
      width: 30%;
      padding-left: 20px;
      transition-duration: 0.3s;

      svg path {
        fill: white;
      }
    }

    .text {
      opacity: 1;
      width: 70%;
      transition-duration: 0.3s;
      padding-right: 10px;
    }
  }

  &:active {
    transform: translate(2px, 2px);
  }
`;

const Sign = styled.div`
  width: 100%;
  transition-duration: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 17px;
  }

  svg path {
    fill: #1f8cb6;
  }
`;

const Text = styled.div`
  position: absolute;
  right: 0%;
  width: 0%;
  opacity: 0;
  color: white;
  font-size: 1.2em;
  font-weight: 600;
  transition-duration: 0.3s;
`;

export const SignOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  };

  return (
    <Btn onClick={handleLogout}>
      <Sign className="sign">
        <svg viewBox="0 0 512 512">
          <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
        </svg>
      </Sign>

      <Text className="text">Logout</Text>
    </Btn>
  );
};

export const PrintButton = () => {
  const handlePrint = () => {
    window.print(); // Triggers the browser's print dialog
  };

  return (
    <Btn onClick={handlePrint}>
      <Sign className="sign">
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m 5 1 c -0.550781 0 -1 0.449219 -1 1 v 1 h 8 v -1 c 0 -0.550781 -0.449219 -1 -1 -1 z m -3 3 c -1.109375 0 -2 0.890625 -2 2 v 4 c 0 1.109375 0.890625 2 2 2 v 1 c 0 1.089844 0.910156 2 2 2 h 8 c 1.089844 0 2 -0.910156 2 -2 v -1 c 1.109375 0 2 -0.890625 2 -2 v -4 c 0 -1.109375 -0.890625 -2 -2 -2 z m 2 6 h 8 v 3 h -8 z m 0 0"
            fill="#2e3436"
          />
        </svg>
      </Sign>

      <Text className="text">Print</Text>
    </Btn>
  );
};

const StyledButton2 = styled.button`
  --primary-color: #1f8cb6;
  --secondary-color: #fff;
  --hover-color: #111;
  --arrow-width: 10px;
  --arrow-stroke: 2px;
  box-sizing: border-box;
  border: 0;
  border-radius: 50px;
  color: var(--secondary-color);
  padding: 1em 1.8em;
  background: var(--primary-color);
  display: flex;
  transition: 0.2s background;
  align-items: center;
  gap: 0.6em;
  font-size: 1.1rem;
  font-weight: bold;

  .arrow-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .arrow {
    margin-top: 1px;
    width: var(--arrow-width);
    background: var(--primary-color);
    height: var(--arrow-stroke);
    position: relative;
    transition: 0.2s;
  }

  .arrow::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    border: solid var(--secondary-color);
    border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
    display: inline-block;
    top: -3px;
    right: 3px;
    transition: 0.2s;
    padding: 3px;
    transform: rotate(-45deg);
  }

  &:hover {
    background-color: var(--hover-color);
  }

  &:hover .arrow {
    background: var(--secondary-color);
  }

  &:hover .arrow::before {
    right: 0;
  }
`;

export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.error(e);
    });
  };

  return (
    <StyledButton2 onClick={handleLogin}>
      Go To Dashboard
      <div className="arrow-wrapper">
        <div className="arrow" />
      </div>
    </StyledButton2>
  );
};
