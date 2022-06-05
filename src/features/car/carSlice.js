import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [
    {
      name: "Model 3",
      link: "https://www.tesla.com/modelx",
    },
    {
      name: "Model Y",
      link: "https://www.tesla.com/modely",
    },
    {
      name: "Model S",
      link: "https://www.tesla.com/models",
    },
    {
      name: "Model X",
      link: "https://www.tesla.com/modelx",
    },
    {
      name: "Solar Panels",
      link: "https://www.tesla.com/solarpanels",
    },
    {
      name: "Solar Roof",
      link: "https://www.tesla.com/solarroof",
    },
  ],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
