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
                    console.log(e)
                    if (e.name === action.payload.name) {
                        e.quantity += action.payload.quantity;
                        i++;
                    } else {
                        return i
                    }
                }));
                (i === 0 ? state.push(action.payload) : console.log('quantity changed'))
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
        removeArr: (state, action) => {
            state.map((e:any) => {
                if (e.name === action.payload) {
                    state.splice((state.indexOf(e)), 1)
                }
            })
        },
        reset: (state) => {
            state = []
        }
    }
});

export const { assignArr, increment, decrement, removeArr, reset } = cartSlice.actions;

export default cartSlice.reducer;