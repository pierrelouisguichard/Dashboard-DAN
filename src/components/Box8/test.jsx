import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 20px;
`;

const SlideInPage = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  animation: ${({ isVisible }) => (isVisible ? slideIn : slideOut)} 0.3s
    forwards;
  z-index: 100;
`;

const MinimizeButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
`;

const Test = () => {
  const [isPageVisible, setIsPageVisible] = useState(false);

  const togglePage = () => {
    setIsPageVisible(!isPageVisible);
  };

  return (
    <Container>
      <Button onClick={togglePage}>Show Page</Button>
      <SlideInPage isVisible={isPageVisible}>
        <MinimizeButton onClick={togglePage}>Minimize</MinimizeButton>
        <h2>Slide-In Page</h2>
        <p>This is the content of the slide-in page.</p>
      </SlideInPage>
    </Container>
  );
};

export default Test;
