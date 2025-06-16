import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 1,
      name: "Mango",
      price: 5,
      url: "/images/mango.jpg",
    },
    {
      id: 2,
      name: "Watermelon",
      price: 7,
      url: "/images/watermelon.jpg",
    },
  ],
};

export const fruitsSlice = createSlice({
  name: "fruits",
  initialState,
  reducers: {},
});

export default fruitsSlice.reducer;
