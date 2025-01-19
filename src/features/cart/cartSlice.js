import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    cart : []
}
const foodPrice ={
    Dosa : 20,
    Idly : 10,
    Kichadi : 35,
    Pongal : 35,
    Poori : 20,
    Upma : 35
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{
        createItem(state,action){
            let dumm = state.cart.filter(e => e.name ===action.payload.name)
            if(dumm.length !== 0){
                return;
            }else{
                state.cart.push(action.payload)
            }
        },

        updateItemInc(state,action){
            state.cart.map(e => {
                    if(e.name === action.payload.name){
                        let name = action.payload.name
                        e.quantity++
                        e.price = e.quantity*foodPrice[name]
                    }
                })
        },

        updateItemDec(state,action){
                state.cart.map(e => {
                    if(e.name === action.payload.name){
                        let name =action.payload.name
                        e.price = e.price - foodPrice[name]
                        e.quantity--
                        
                    }
                })
            },

        handleDel(state,action){
            let index = state.cart.findIndex(e => e.name === action.payload.name)
            if (index !== -1) {
                state.cart.splice(index, 1)
              }
        },

        clearCart(state,action){
            state.cart.splice(0,state.cart.length)
        }
    }
})

export const {createItem,updateItemDec,updateItemInc,handleDel,clearCart} = cartSlice.actions
export default cartSlice.reducer