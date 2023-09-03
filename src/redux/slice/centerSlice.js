import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/AxiosClient";

export const getActiveTable=createAsyncThunk("table/gettable",async(body)=>{
    try {
        // console.log(body,"body");
        const response=await axiosClient.post('/table/gettable',body);
        // console.log(response," im data");
        return response.data;
    } catch (error) {
        console.log(error,"erroe")
    }
})

const centerSlice=createSlice({
    name:'ceterSlice',
    initialState:{
        topProfile:''
    },

    extraReducers:(builder)=>{
        builder.addCase(getActiveTable.fulfilled,(state,action)=>{
            state.topProfile=action.payload;
            // console.log(state.topProfile,"top profile");
        })
    }
})

export default centerSlice.reducer;

export const{getId}=centerSlice.actions;