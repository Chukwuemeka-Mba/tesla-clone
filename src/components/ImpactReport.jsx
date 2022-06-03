import React from "react";
import styled from "styled-components";
export default function ImpactReport() {
  return (
    <ReportContainer>
      <div className="container">
        <a href="https://www.tesla.com/impact">
          Read Tesla's 2021 Impact Report
        </a>
      </div>
    </ReportContainer>
  );
}
const ReportContainer = styled.div`
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 1rem 0;
    a {
      font-family: "Gotham Book";
      color: #000;
      font-size: 14px;
      text-decoration: none;
      border-bottom: 1px solid #000;
    }
    a:hover {
      border-bottom: 1.5px solid #000;
    }
  }
`;
