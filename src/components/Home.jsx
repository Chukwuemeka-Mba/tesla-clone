import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <HomeContainer>
      <div className="home">
        <Section />
      </div>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: url("../assets/images/model3.png");
  }
`;
