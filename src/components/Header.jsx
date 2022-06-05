import { useState } from "react";
import "../assets/styles/index.css";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [visible, setVisible] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);

  function toggleSidebar() {
    setVisible((prevState) => !prevState);
  }

  return (
    <Container>
      <div className="App">
        <header className="app-header">TESLA</header>
        <div className="links">
          {cars.map((car) => (
            <a href={car.link} className="menu">
              {car.name}
            </a>
          ))}
        </div>
        <div className="links">
          <a href="https://shop.tesla.com/" className="menu">
            Shop
          </a>
          <a
            href="https://auth.tesla.com/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US"
            className="menu"
          >
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
