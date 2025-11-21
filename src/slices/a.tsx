import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    a: String
}

const a = createSlice({
    name: "a",
    initialState,
    reducers: {
        addA: (state, action) => { state.a = action.payload }
    }
})

export const { addA } = a.actions
export default a.reducer
