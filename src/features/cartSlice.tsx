import { createSlice } from '@reduxjs/toolkit';

const initialState: any = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        assignArr: (state, action) => {
            if (state.length === 0) {
                state.push(action.payload);
            } else {
                let i = 0;
                (state.map((e:any) => {
                    if (e.name === action.payload.name) {
                        e.quantity++;
                        i++;
                    } else {
                        return i
                    }
                }));
                (i === 0 ? state.push(action.payload) : console.log('no'))
            }
        },
        increment: (state, action) => {
            state.map((e:any) => {
                if (e.name === action.payload) {
                    e.quantity++;
                } 
            });

        },
        decrement: (state, action) => {
            state.map((e:any) => {
                if (e.name === action.payload) {
                    e.quantity--;
                }
            });
        },
        reset: (state) => {
            state = []
        }
    }
});

export const { assignArr, increment, decrement, reset } = cartSlice.actions;

export default cartSlice.reducer;