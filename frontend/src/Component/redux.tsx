
import { createSlice } from '@reduxjs/toolkit'
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