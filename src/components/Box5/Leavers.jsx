import React from "react";
import Header from "../other/Header";
import Table from "../Box8/Table";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";

function Leavers() {
  const headers = ["Name", "Date"];
  const rows = [
    ["Aarman Murgai", "21 Dec 2024"],
    ["Lucrezia Rossini", "21 Dec 2024"],
    ["Federico Rotolo", "20 Nov 2024"],
    ["Nicolas Goig", "08 Nov 2024"],
    ["Gennaro Bertolino ", "07 Nov 2024"],
  ];

  return (
    <Container>
      <Header
        text={
          <>
            <p>
              The Leavers component shows the most recent employees who have
              left the organisation, along with the date they left.
            </p>
          </>
        }
        title={"Leavers"}
        icon={<FontAwesomeIcon icon={faUserMinus} />}
      />
      <YellowBox>
        <Table headers={headers} rows={rows} />
      </YellowBox>
    </Container>
  );
}

export default Leavers;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const YellowBox = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
