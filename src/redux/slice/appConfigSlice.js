import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/AxiosClient";
// import axios from "axios";

export const getTables=createAsyncThunk('table/getalltable',async ()=>{
    try {
        const response=await axiosClient.get('/table/getalltable');
        // console.log(response.data.table);
        return response.data.table;
        
    } catch (error) {
        
    }
})


const appConfigSlice=createSlice({
    name: 'appConfigSlice',
    initialState:{
        tables:[

        ]
    },

    extraReducers:(builder)=>{
        builder.addCase(getTables.fulfilled,(state,action)=>{
           
            state.tables=action.payload
        })
    }
})

export default appConfigSlice.reducer;

export const{getUser}=appConfigSlice.actions;