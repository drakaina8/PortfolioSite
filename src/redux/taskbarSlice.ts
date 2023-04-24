import { createSlice } from '@reduxjs/toolkit';
import type miniApp from '../types/miniApp';

interface TaskBarState {
    items: Array<miniApp>;
}

const initialState: TaskBarState = {
    items: [],
};

export const taskbarSlice = createSlice({
    name: 'taskbar',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            return [...state.items.filter((item) => item.id !== action.payload.id)];
        },
        clearItems: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearItems } = taskbarSlice.actions;
export default taskbarSlice.reducer;
