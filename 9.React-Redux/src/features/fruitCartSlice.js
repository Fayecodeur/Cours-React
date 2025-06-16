import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const fruitCartSlice = createSlice({
  name: "fruitCart",
  initialState,
  reducers: {
    AddOn: (state, action) => {
      // Vérifie si le fruit existe déjà dans le panier
      const index = state.cart.findIndex((obj) => obj.id === action.payload.id);

      if (index !== -1) {
        // S'il est déjà là, on augmente la quantité
        state.cart[index].quantity += 1;
      } else {
        // Sinon on l'ajoute avec une quantité de 1
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    RemoveOn: (state, action) => {
      const fruit = state.cart.find((obj) => obj.id !== action.payload.id);
      if (fruit) {
        if (fruit.quantity === 1) {
          state.cart = state.cart.filter(
            (fruit) => fruit.id !== action.payload
          );
        } else {
          fruit.quantity--;
        }
      }
    },
  },
});

export const { AddOn, RemoveOn } = fruitCartSlice.actions;
export default fruitCartSlice.reducer;
