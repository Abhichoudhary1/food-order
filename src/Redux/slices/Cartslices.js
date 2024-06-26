import { createSlice } from "@reduxjs/toolkit";

const Cartslices = createSlice({
    name:"cart",
    initialState:{
        cart:[],
    },
    reducers:{
         addtocart:(state, action)=>{
            state.cart.push(action.payload)
         },
         removeFromcart:(state,action)=>{
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
         }
    },
})
export const {addtocart, removeFromcart} = Cartslices.actions

export default Cartslices.reducer