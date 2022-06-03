import styled from "styled-components";
import Section from "./Section";
import ImpactReport from "../components/ImpactReport";
import Header from "./Header";
function Home() {
  return (
    <HomeContainer>
      <div className="impact">
        <ImpactReport />
      </div>
      <div className="header">
        <Header />
      </div>
      <div className="home">
        <Section
          title="Model 3"
          description="Order online for"
          span="Touchless Delivery"
          link="https://www.tesla.com/support/taking-delivery?redirect=no"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model Y"
          description="Order online for"
          span="Touchless Delivery"
          link="https://www.tesla.com/support/taking-delivery?redirect=no"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model S"
          description="Order online for"
          span="Touchless Delivery"
          link="https://www.tesla.com/support/taking-delivery?redirect=no"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model X"
          description="Order online for"
          span="Touchless Delivery"
          link="https://www.tesla.com/support/taking-delivery?redirect=no"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Solar Panels"
          description="Low Cost Solar Panels in America"
          link="https://www.tesla.com/support/taking-delivery?redirect=no"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />
        <Section
          title="Solar Roof"
          description="Produce Clean Energy
          From Your Roof"
          link="https://www.tesla.com/support/taking-delivery?redirect=no"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />
        <Section
          title="Accessories"
          description="Produce Clean Energy
          From Your Roof"
          link="https://www.tesla.com/support/taking-delivery?redirect=no"
          backgroundImg="accessories.jpg"
          singleBtnText="Shop Now"
        />
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
    width: 100%;
  }
  .impact {
    position: fixed;
    top: 0;
    width: 100%;
  }
  .header {
    position: fixed;
    top: 50px;
    width: 100%;
  }
`;
