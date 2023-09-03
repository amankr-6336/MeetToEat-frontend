import {configureStore} from '@reduxjs/toolkit';
import appConfigReducer from './slice/appConfigSlice';
import centerReducer from "./slice/centerSlice";
import cartReducer from './slice/cartSlice'
import orderReducer from './slice/OrderSlice'




export default configureStore({
    reducer:{
        appConfigReducer,
        centerReducer,
        cartReducer,
        orderReducer
    }
})