import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDish=createAsyncThunk('')


const cartSlice=createSlice({
    name:'cartSlice',
    initialState:{
        cart:[

        ]
    },
    reducers:{
      
        addtoCart:(state,action)=>{
            const product=action.payload;
           

            const curItem = product ? {
                dishName: product.dishName,
                
                price: product.price,
                
                image: product.image.url,

                key: product._id,
                 
                quantity:product.quantity,

               

                

             
            } : action.payload;

            const index=state.cart.findIndex(
                (item)=>item.key===curItem.key
            );

            if(index===-1){
                state.cart.push({ ...curItem, quantity: 1 });
            }

            else{
                state.cart[index].quantity+=1;
            }

          

           
        },
        removeCart:(state,action)=>{
            const curkey=action.payload._id;

            const index=state.cart.findIndex(
                (item)=>item.key===curkey
            );

            if(index===-1){
                return;
            }
            if(state.cart[index].quantity===1){
                state.cart=state.cart.filter(
                    (item)=>item.key!==curkey
                );
            }
            else{
                state.cart[index].quantity-=1;
            }
        }
    }
})

export const{addtoCart,removeCart}=cartSlice.actions;

export default cartSlice.reducer;