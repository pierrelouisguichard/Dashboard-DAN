import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const Header = ({ title, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledTitle>
      {title}
      <InfoButton
        title="How the overall score is calculated"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FontAwesomeIcon icon={faInfo} />
        {isHovered && <Tooltip>{text}</Tooltip>}
      </InfoButton>
    </StyledTitle>
  );
};

export default Header;

const StyledTitle = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  height: 50px;
  color: #186e98;
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoButton = styled.button`
  background-color: #fbfbfb;
  color: #186e98;
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 50%;
  width: 40px; /* Adjust size */
  height: 40px; /* Adjust size */
  display: flex;
  justify-content: center; /* Centers the icon horizontally */
  align-items: center; /* Centers the icon vertically */
  padding: 0;
  position: relative; /* This is to position the tooltip near the icon */
  transition: background-color 0.3s;

  svg {
    font-size: 18px; /* Adjust icon size inside the circle */
  }

  &:hover {
    background-color: #186e98;
    color: white;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  top: 50px; /* Adjust the distance from the button */
  left: 50%;
  transform: translateX(-50%);
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  white-space: normal; /* Allow text to wrap */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 200px;
  word-wrap: break-word; /* Ensure text wraps when it exceeds the max-width */
`;
