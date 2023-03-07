import { createSlice } from '@reduxjs/toolkit';

const initialState: any = [{base_experience: 0}]

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        searchedItem: (state, action) => {
            state.pop()
            state.push(action.payload)
        }
    }
});

export const { searchedItem } = itemSlice.actions;

export default itemSlice.reducer;