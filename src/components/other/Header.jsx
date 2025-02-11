import React from "react";
import styled from "styled-components";

const Header = ({ title, icon }) => {
  return (
    <StyledHeader>
      <TitleText>{title}</TitleText>
      {icon && <IconWrapper>{icon}</IconWrapper>}
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

const IconWrapper = styled.div`
  font-size: 1.2rem;
  color: #186e98;
`;

const TitleText = styled.div`
  font-size: 1.2rem;
  color: #186e98;
`;
