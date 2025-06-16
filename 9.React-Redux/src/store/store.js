import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter";
import fruitsSlice from "../features/fruitsSlice.js";
import fruitCartSlice from "../features/fruitCartSlice.js";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fruits: fruitsSlice,
    fruitCart: fruitCartSlice,
  },
});
