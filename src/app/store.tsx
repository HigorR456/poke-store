import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/cartSlice';
import itemSlice from '../features/itemSlice';

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        item: itemSlice,
    }
})