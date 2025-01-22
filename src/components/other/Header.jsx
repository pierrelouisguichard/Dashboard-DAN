import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const Header = ({ title, text, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledHeader>
      <TitleWrapper>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <TitleText>{title}</TitleText>
      </TitleWrapper>
      <InfoButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FontAwesomeIcon icon={faInfo} />
        {isHovered && <Tooltip>{text}</Tooltip>}
      </InfoButton>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  padding: 10px 30px;
  height: 60px;
  color: #186e98;
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-right: 10px;

  font-size: 1.2rem;
  color: #186e98;
`;

const TitleText = styled.div`
  font-size: 1.2rem;
  color: #186e98;
`;

const InfoButton = styled.button`
  background-color: #fbfbfb;
  color: #186e98;
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: relative;
  transition: background-color 0.3s ease, transform 0.2s ease;

  svg {
    font-size: 18px;
  }

  &:hover {
    background-color: #186e98;
    color: white;
    transform: scale(1.1);
  }
`;

const Tooltip = styled.div`
  position: absolute;
  top: 55px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 99999;
  width: 280px;
  max-width: 300px;
  word-wrap: break-word;
  text-align: left;
  white-space: normal;
  pointer-events: none;
`;
