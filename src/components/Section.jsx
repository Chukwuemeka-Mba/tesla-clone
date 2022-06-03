import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
// import img from "../assets/images/model-3.jpg";
function Section(props) {
  return (
    <SectionWrapper
      bgImage={process.env.PUBLIC_URL + "/images/" + props.backgroundImg}
    >
      <div className="body-container">
        <div className="title-text">
          <h1>{props.title}</h1>
          <p>
            {props.description} {"   "}
            <a href={props.link}>{props.span}</a>
          </p>
        </div>

        {props.singleBtnText ? (
          <div className="buttons">
            <p className="single button">{props.singleBtnText}</p>
          </div>
        ) : (
          <div className="buttons">
            <p className="left button">{props.leftBtnText}</p>
            <p className="right button">{props.rightBtnText}</p>{" "}
          </div>
        )}

        <FontAwesomeIcon icon={"angle-down"} />
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
  background-image: url(${(props) => props.bgImage});
  .body-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  .title-text {
    margin-top: 20vh;
  }
  h1 {
    font-family: "Gotham Book";
    font-size: 45px;
  }
  a {
    color: #000;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 55vh;
    gap: 10px;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 256px;
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    border-radius: 100px;
    padding-top: 7px;
    cursor: pointer;
    button-backdrop-filter: blur(8px);
    background-color: rgba(23, 26, 32, 0.8);
  }
  .right {
    background-color: rgba(244, 244, 244, 0.65);
    button-backdrop-filter: blur(8px);
    color: black;
  }
  .single {
    background-color: black;
    button-backdrop-filter: blur(8px);
    color: white;
  }
  svg {
    margin: 2rem 0;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: bounce-1;
    animation-timing-function: linear;
  }
  @keyframes bounce-1 {
    0% {
      transform: translateY(0);
    }
    45% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
