import React from "react";
import styled from "styled-components";
import agreement from "../../assets/agreement.png";

// Styled component to make the container take up the full page
const FullPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Agreement() {
  return (
    <FullPageContainer>
      <img src={agreement} alt="Agreement" />
    </FullPageContainer>
  );
}

export default Agreement;
