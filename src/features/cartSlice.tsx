import { createSlice } from '@reduxjs/toolkit';

const initialState: any = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.push(action.payload);
        },
        reset: (state) => {
            state = []
        }
    }
});

export const { increment, reset } = cartSlice.actions;

export default cartSlice.reducer;