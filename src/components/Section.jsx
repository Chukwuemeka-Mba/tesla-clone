import styled from "styled-components";
import img from "../assets/images/model-3.jpg";
import Header from "./Header";
function Section() {
  return (
    <SectionWrapper>
      <Header />
      <div className="main">
        <h1>Model 3</h1>
        <p>
          Order online for{" "}
          <a href="https://www.tesla.com/support/taking-delivery?redirect=no">
            Touchless Delivery
          </a>
        </p>
      </div>
    </SectionWrapper>
  );
}

export default Section;
const SectionWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${img});
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a {
      color: #000;
    }
  }
`;
