import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/AxiosClient";



export const getOrderdetails=createAsyncThunk("order/orderid",async(body)=>{
    try {
        const response=await axiosClient.post('/order/orderid',body);
      
        return response.data;
    } catch (error) {
        
    }
})

const orderSlice=createSlice({
    name:'orderSlice',
    initialState:{
        orderInfo:{

        }
    },

    extraReducers:(builder)=>{
        builder.addCase(getOrderdetails.fulfilled,(state,action)=>{
            state.orderInfo=action.payload
        })
    }
});

export default orderSlice.reducer;

// export const {getId}=centerSlice.actions;