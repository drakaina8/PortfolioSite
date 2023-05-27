import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CalculatorState {
    currentNumber: number,
    calcStack: string[],
}

const initialState: CalculatorState = {
    currentNumber: 0,
    calcStack: [],
};

export const calculatorSlice = createSlice({
    name: 'desktop',
    initialState,
    reducers: {
        setCurrentNumber: (state, action: PayloadAction<number>) => {
            state.currentNumber = action.payload
        },
        setCalcStack: (state, action: PayloadAction<[]>) => {
            state.calcStack = action.payload
        },
        addToCalcStack: (state, action: PayloadAction<string>) => {
            state.calcStack.push(action.payload)
        },
        popCalcStack: (state, action: PayloadAction<void>) => {
            state.calcStack.pop
        }
        
    },
});

export const { setCurrentNumber, setCalcStack, addToCalcStack, popCalcStack } = calculatorSlice.actions;
export default calculatorSlice.reducer;
