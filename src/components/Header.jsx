import "../assets/styles/index.css";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <div className="App">
        <header className="app-header">TESLA</header>
        <div className="menu">Menu</div>
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  .App {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    width: 100%;
    background-color: transparent;
  }
  .app-header {
    font-family: "Tesla";
    font-size: 20px;
    letter-spacing: 5px;
  }
  .menu {
    padding: 0.5rem 1rem;
    font-family: "Inter";
    font-size: 14px;
    font-weight: bold;
    background-color: #ccc;
    color: #000;
    border-radius: 12px;
    transition: all 200ms ease-in-out;
  }
  .menu:hover {
    transform: scale(1.02);
  }
`;
