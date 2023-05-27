import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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
        addTaskbarItem: (state, action: PayloadAction<miniApp>) => {
            state.items.push(action.payload);
        },
        removeTaskbarItem: (state, action: PayloadAction<miniApp>) => {
            state.items = [...state.items.filter((item) => item.id !== action.payload.id)];
        },
        clearTaskbarItems: (state) => {
            state.items = [];
        },
    },
});

export const { addTaskbarItem, removeTaskbarItem, clearTaskbarItems } = taskbarSlice.actions;
export default taskbarSlice.reducer;
