import Home from "./components/Home";
import styled from "styled-components";
function App() {
  return (
    <HomeContainer>
      <Home />
    </HomeContainer>
  );
}

export default App;
const HomeContainer = styled.div`
  gap: 0px;
`;
