import {createSlice,PayloadAction} from '@reduxjs/toolkit';


const initialState:string[] = [];

const watchlistSlice = createSlice(
    {
        name:'watchlist',
        initialState,
        reducers:{
            add:(state,action:PayloadAction<string>)=>{
                 state.push(action.payload);
            },
            remove:(state,action:PayloadAction<string>)=>{
                state.filter((item)=>(action.payload!==item));
            },

        },
    }
)

export default watchlistSlice.reducer
export const {add,remove}= watchlistSlice.actions
