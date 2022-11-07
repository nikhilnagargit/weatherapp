import {createAsyncThunk, createSlice,PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

type InitialState = {
    data:{},
    loading:boolean,
    error:string,
    name:string
}

const initialState:InitialState = {data:{},loading:false,error:"",name:""};

export const fetchWeatherData = createAsyncThunk('currentCity/fetchWeatherData',(city:string)=>{
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f3f4545773e85105040df83d7f0ae631`)
                .then((res)=>{  return res.data;});
});


const currentCitySlice = createSlice(
    {
        name:'currentCity',
        initialState,
        reducers:{
            setCityName:(state,action:PayloadAction<string>)=>{
                state.name = action.payload;
            },
            removeCityName:(state)=>{
                state.name = "";
                state.data = {};
                state.error = "";
            }
        },
        extraReducers:(builder)=>{
            builder.addCase(fetchWeatherData.pending,(state)=>{
                state.loading = true;
            })
            builder.addCase(fetchWeatherData.fulfilled,(state,action)=>{
                state.loading = false
                state.data = action.payload
            })
            builder.addCase(fetchWeatherData.rejected,(state,action)=>{
                state.loading =false;
                state.data = {}
                state.error = action.error.message||"something went wrong"
            })

        }
    }
)

export default currentCitySlice.reducer;
export const {setCityName,removeCityName} = currentCitySlice.actions;
