import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { persistStore , persistReducer } from 'redux-persist';
interface isFull {
    isFullwidth : boolean 
}
const initialState : isFull = {
    isFullwidth : false
}

export const fullStateslice = createSlice({
    name : 'fullstate',
    initialState,
    reducers : {
        fullwidth : (state) => {
            state.isFullwidth = !state.isFullwidth
        },

       
    }
})

export const {fullwidth } = fullStateslice.actions

export default fullStateslice.reducer