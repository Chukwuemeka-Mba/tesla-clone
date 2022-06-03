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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem 1rem;
    font-family: "Gotham Book";
    font-size: 14px;
    font-weight: bold;
    background-color: #e6e6e6e8;
    color: #000;
    padding-top: 10px;
    border-radius: 12px;
    transition: all 200ms ease-in-out;
  }
  .menu:hover {
    transform: scale(1.02);
  }
`;
