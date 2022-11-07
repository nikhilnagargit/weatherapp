import {createSlice,PayloadAction} from '@reduxjs/toolkit';


const initialState:any = {mylist:[]};

const watchlistSlice = createSlice(
    {
        name:'watchlist',
        initialState,
        reducers:{
            add:(state,action:PayloadAction<any>)=>{
                 state.mylist.push(action.payload);
            },
            remove:(state,action:PayloadAction<string>)=>{
                state.mylist = state.mylist.filter((item:any)=>(action.payload!==item.name));
            },
        },
    }
)

export default watchlistSlice.reducer
export const {add,remove}= watchlistSlice.actions
