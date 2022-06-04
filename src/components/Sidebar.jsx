import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

function Sidebar(props) {
  return (
    <div className="container">
      {props.visible && (
        <SidebarContainer>
          <div className="close">
            <FontAwesomeIcon icon={"xmark"} onClick={props.toggleSidebar} />
          </div>
          <div className="sidebar-links">
            <a href="https://www.tesla.com/models">Model S</a>
            <a href="https://www.tesla.com/model3">Model 3</a>
            <a href="https://www.tesla.com/modelx">Model X</a>
            <a href="https://www.tesla.com/modely">Model Y</a>
            <a href="https://www.tesla.com/solarroof">Solar Roof</a>
            <a href="https://www.tesla.com/solarpannels">Solar Panels</a>
            <a href="https://www.tesla.com/inventory/new/m3?arrangeby=relevance&zip=02131&range=200">
              Existing Inventory
            </a>
            <a href="https://www.tesla.com/inventory/used/m3?arrangeby=plh&zip=02131">
              Used Inventory
            </a>
            <a href="https://www.tesla.com/tradein">Trade In</a>
            <a href="https://www.tesla.com/drive">Test Drive</a>
            <a href="https://www.tesla.com/insurance">Insurance</a>
            <a href="https://www.tesla.com/powerwall">Powerwall</a>
            <a href="https://www.tesla.com/commercial">Commercial Energy</a>
            <a href="https://www.tesla.com/utilities">Utilities</a>
            <a href="https://www.tesla.com/charging">Charging</a>
            <a href="https://www.tesla.com/findus?v=2&bounds=61.4587011446099%2C-67.5820324375%2C8.969686368911985%2C-130.9511730625&zoom=4&filters=store%2Cservice%2Csupercharger%2Cdestination%20charger%2Cbodyshop%2Cparty">
              Find Us
            </a>
            <a href="https://www.tesla.com/support">Support</a>
            <a href="https://ir.tesla.com/#tab-quarterly-disclosure">
              Investor Relations
            </a>
            <a href="https://shop.tesla.com/">Shop</a>
            <a href="https://auth.tesla.com/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US">
              Account
            </a>
            <p>
              More
              <FontAwesomeIcon icon={"angle-right"} />
            </p>
          </div>
        </SidebarContainer>
      )}
    </div>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  background-color: #fff;
  z-index: 0;
  .close {
    display: flex;
    justify-content: flex-end;
    align-items: right;
    width: 100%;
    padding: 2rem;
  }
  .sidebar-links {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    overflow-y: hidden;
    overflow: scroll;
    width: 90%;
    padding-top: 15px;
  }
  .container {
    width: 100%;
  }
  a {
    text-align: left;
    margin: 0rem 1rem;
    font-size: 14px;
    padding: 0.5rem 0.5rem;
    color: black;
    width: 90%;
    text-decoration: none;
    border-radius: 15px;
    padding-top: 15px;
    padding-bottom: 2px;
  }
  a:hover {
    background-color: #0000001b;
  }
`;
