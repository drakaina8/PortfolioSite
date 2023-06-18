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
            id: Date.now() - 200,
            name: 'About',
            faClasses: "fa-solid fa-question",
            type: miniAppType.popup,
        },
        {
            id: Date.now(),
            name: 'Calculator',
            faClasses: "fa-solid fa-calculator",
            type: miniAppType.calculator
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
