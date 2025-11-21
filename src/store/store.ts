import { configureStore, ReducerType } from '@reduxjs/toolkit'
import aReducer from '../slices/a'

const store = configureStore({
    reducer: {
        a: aReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
