import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'counter',
  initialState: {
    cartArray: [],
  },
  reducers: {
    addToCart:function(state,action){
        state.cartArray=[...state.cartArray,action.payload];
    }
   
  },
})

// Action creators are generated for each case reducer function
export const {  } = cartSlice.actions

export default cartSlice.reducer