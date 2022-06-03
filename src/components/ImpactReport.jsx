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
    background-color: #000;
    padding: 1.5rem 0;
    a {
      font-family: "Inter";
      color: #fff;
      text-decoration: none;
      border-bottom: 1px solid #fff;
    }
    a:hover {
      border-bottom: 2px solid #fff;
    }
  }
`;
