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
            id: Date.now(),
            name: 'About',
            iconURL: '../src/assets/application_xp.jpg',
            type: miniAppType.popup,
        } as miniApp,
    ],
    menuVisible: false,
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
