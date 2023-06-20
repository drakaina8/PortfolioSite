import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface GeneralState {
    theme: string
}

const initialState: GeneralState = {
    theme: "default-theme"
};

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload;
            document.documentElement.dataset.theme = action.payload;
        }
    },
});

export const { setTheme } = generalSlice.actions;
export default generalSlice.reducer;
