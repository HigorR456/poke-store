import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/cartSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})