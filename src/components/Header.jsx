import { useState } from "react";
import "../assets/styles/index.css";
import styled from "styled-components";
import Sidebar from "./Sidebar";

function Header() {
  const [visible, setVisible] = useState(false);
  function toggleSidebar() {
    setVisible((prevState) => !prevState);
  }
  return (
    <Container>
      <div className="App">
        <header className="app-header">TESLA</header>
        <div className="links">
          <a href="https://www.tesla.com/models" className="menu">
            Model S
          </a>
          <a href="https://www.tesla.com/model3" className="menu">
            Model 3
          </a>
          <a href="https://www.tesla.com/modelx" className="menu">
            Model X
          </a>
          <a href="https://www.tesla.com/modely" className="menu">
            Model Y
          </a>
          <a href="https://www.tesla.com/solarroof" className="menu">
            Solar Roof
          </a>
          <a href="https://www.tesla.com/solarpanels" className="menu">
            Solar Panels
          </a>
        </div>
        <div className="links">
          <a href="https://www.tesla.com/solarpanels" className="menu">
            Shop
          </a>
          <a href="https://www.tesla.com/solarpanels" className="menu">
            Account
          </a>
          <p className="menu" onClick={toggleSidebar}>
            Menu
          </p>
        </div>
        <div className="sidebar-menu menu" onClick={toggleSidebar}>
          Menu
        </div>
      </div>
      <div className="sidebar">
        <Sidebar toggleSidebar={toggleSidebar} visible={visible} />
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
    color: #000;
    padding-top: 10px;
    border-radius: 12px;
    transition: all 200ms ease-in-out;
    text-decoration: none;
  }
  .menu:hover {
    transform: scale(1.02);
    background-color: #0000001b;
  }

  .links {
    display: none;
  }

  .sidebar-menu {
    display: block;
    background-color: #0000001b;
  }
  @media screen and (min-width: 1200px) {
    .sidebar-menu {
      display: none;
    }
    .links {
      display: block;
      display: flex;
      flex-direction: row;
      text-decoration: none;
      gap: 20px;
      .link {
        font-family: "Gotham Medium";
        font-size: 14px;
        margin: 0rem 1rem;
        background-color: #e6e6e667;
        cursor: pointer;
        color: #000;
        text-decoration: none;
        &:hover {
        }
      }
    }
  }
`;
