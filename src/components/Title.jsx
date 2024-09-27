import React from "react";
import styled from "styled-components";

const Title = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.div`
  /* background-color: blue; */
  height: 70px;
  min-height: 70px;
  width: 90%;
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: left;
  border-bottom: 2px solid #ccc;
  margin: 0;
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
`;
