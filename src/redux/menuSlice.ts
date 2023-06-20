import { createSlice, PayloadAction, createAction, createReducer } from '@reduxjs/toolkit';
import miniApp from '../types/miniApp';
import miniAppType from '../types/miniAppTypeEnum';

interface menuState {
    menuItems: Array<miniApp>;
    menuVisible: boolean;
}

const initialState: menuState = {
    menuItems: [
        {
            id: Date.now() - 2000,
            name: 'About',
            faClasses: "fa-solid fa-question",
            type: miniAppType.popup,
        },
        {
            id: Date.now() - 1000,
            name: 'Calculator',
            faClasses: "fa-solid fa-calculator",
            type: miniAppType.calculator
        },
        {
            id: Date.now() - 500,
            name: 'Settings',
            faClasses: "fa-solid fa-gear",
            type: miniAppType.settings
        }
    ],
    menuVisible: true,
};

export const menuSlice = createSlice({
    name: 'showmenu',
    initialState,
    reducers: {
        invertBoolean: (state, action) => {
            state.menuVisible = !state.menuVisible;
        },
    },
});

export const { invertBoolean } = menuSlice.actions;
export default menuSlice.reducer;
