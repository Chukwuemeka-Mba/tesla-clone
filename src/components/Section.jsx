import styled from "styled-components";
import img from "../assets/images/model-3.jpg";
import Header from "./Header";
function Section() {
  return (
    <SectionWrapper>
      <Header />
      <div className="body-container">
        <div className="title-text">
          <h1>Model 3</h1>
          <p>
            Order online for{" "}
            <a href="https://www.tesla.com/support/taking-delivery?redirect=no">
              Touchless Delivery
            </a>
          </p>
        </div>
        <div className="buttons">
          <div className="left-button">CUSTOM-ORDER</div>
          <div className="right-button">EXISTING INVENTORY</div>
        </div>
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
  .body-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    .title-text {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-top: 8vh;
      h1 {
        margin-bottom: 10px;
        font-size: 40px;
        font-weight: 900;
      }
      a {
        color: #000;
      }
    }

    .buttons {
      display: flex;
      position: fixed;
      flex-direction: row;
      bottom: 50px;
      font-size: 14px;
      gap: 20px;
      .left-button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ccc;
        width: 100%;
        height: 30px;
        border-radius: 20px;
      }
      .right-button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ccc;
        width: 500px;
        height: 30px;
        border-radius: 20px;
      }
    }
  }
`;
