import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter"; // ici tu peux le nommer comme tu veux

export const store = configureStore({
  reducer: {
    counter: counterReducer, // ce "counter" sera utilisé dans useSelector : state.counter.value
  },
});
