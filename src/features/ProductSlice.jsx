import { createSlice } from "@reduxjs/toolkit";

function findIndex(array, id) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id)
            return i;
    }
    // Return -1 instead of null for index not found
    return -1;
}

export const productSlice = createSlice({
  name: "Product_Details", // Name of the slice
  initialState: [], // Initial state
  reducers: {
    // Reducer function to get the products
    getproductDetails: (state, action) => {
      return action.payload;
    },
    // Reducer function to increase the products
    increase_cart: (state, action) => {
      let { id } = action.payload;
      let index = findIndex(state, id);
      if (index !== -1) {
        state[index]={
            ...state[index],quantity : (state[index].quantity || 1) + 1
        }
      }
    },
    // Reducer function to decrease the products
    decrease_cart: (state, action) => {
      let { id } = action.payload;
      let index = findIndex(state, id);
      if (index !== -1 && state[index].quantity > 1) {
        state[index].quantity -= 1;
      }
    },
    remove_cart: (state, action) => {
      // Reduce function to remove the item from the cart
      let { id } = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});

//Extracting action creators and reducer function from the slice
export const { getproductDetails, increase_cart, decrease_cart, remove_cart } =
  productSlice.actions;
// Reducer function to be used in the Redux store
export default productSlice.reducer;
