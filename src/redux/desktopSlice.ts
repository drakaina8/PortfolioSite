import React from 'react';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import PopUp from '../components/popup/popup';
import type miniApp from '../types/miniApp';
import { serialize } from '../utils/reactSerializer';
import { popupProps } from '../components/popup/popup';

interface AppReviver {
    type: 'PopUp' | 'EmailForm' | 'Game';
    props: popupProps

}

interface DesktopState {
    items: Array<AppReviver>;
}

const initialState: DesktopState = {
    items: [
        {
            type: "PopUp",
            //id: Date.now(),
            props: {
                id: Date.now(),
                titleText: 'Welcome to my portfolio!',
                mainText: "My name is Hannah Hendrickson. If you're here, you already know that I'm a developer. Thanks for checking out my site!",
                buttonOptions: ['Ok', 'Cancel'],
            }
        }
    ]
};

export const desktopSlice = createSlice({
    name: 'desktop',
    initialState,
    reducers: {
        addDesktopItem: (state, action: PayloadAction<AppReviver>) => {
            state.items.push(action.payload);
        },
        removeDesktopItem: (state, action: PayloadAction<number>) => {
            state.items = [...state.items.filter(item => item.props.id !== action.payload)];
        },
        clearDesktopItems: (state) => {
            state.items = [];
        },
    },
});

export {AppReviver};
export const { addDesktopItem, removeDesktopItem, clearDesktopItems } = desktopSlice.actions;
export default desktopSlice.reducer;
