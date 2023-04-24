import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import PopUp from '../components/popup/popup';
import type miniApp from '../types/miniApp';
import { serialize } from '../utils/reactSerializer';

interface AppReviver {
    type: string;
    props: {};

}

interface DesktopState {
    items: Array<AppReviver>;
}

const initialState: DesktopState = {
    items: [
        {
            type: "PopUp",
            props: {
                titleText: 'Welcome to my portfolio!',
                mainText:
                "My name is Hannah Hendrickson. If you're here, you already know that I'm a developer. Thanks for checking out my site!",
                buttonOptions: ['Ok', 'Cancel'],
            }
        }
    ]
};

export const desktopSlice = createSlice({
    name: 'desktop',
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

export const { addItem, removeItem, clearItems } = desktopSlice.actions;
export default desktopSlice.reducer;
