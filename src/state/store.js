import {createSlice,configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import {api} from "state/api";

const initialState={
    mode:"dark",
    user:null,
    check:null,
};

const globalSlice = createSlice({
    name:"global",
    initialState,
    reducers:{
        setMode: (state) =>{
            state.mode = (state.mode==="dark") ? "light" :"dark";
        },
        setUser : (state,data)=>{
            console.log(data,"hello inside");
            if(data.payload) state.user=data.payload.data;
            else state.user=null;
            console.log(state.user,"updated");
        },
        setDevice : (state)=>{
            state.isMobile =(!state.isMobile)
        },
        setCheck : (state,data)=>{
            console.log(data,"hello inside");
            state.check=data.payload;
            // else state.check=null;
            console.log(state.check,"updated");
        },
    },
});

const globalReducer = globalSlice.reducer;

const store = configureStore({
    reducer:{
        global:globalReducer,
        [api.reducerPath]:api.reducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});

setupListeners(store.dispatch);

const {setMode,setUser,setDevice,setCheck} = globalSlice.actions;
export {globalSlice,globalReducer,setMode,setUser,setDevice,setCheck};
export default store;
