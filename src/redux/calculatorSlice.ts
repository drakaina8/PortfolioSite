import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import TickerTape from '../components/calculator/tickerTape/tickerTape';
import { calculate } from '../components/calculator/calcUtils';

interface CalculatorState {
    currentNumber: number,
    calcStack: string[],
    tickerTapeLines: string[],
}

const initialState: CalculatorState = {
    currentNumber: 0,
    calcStack: [],
    tickerTapeLines: [],
};

export const calculatorSlice = createSlice({
    name: 'desktop',
    initialState,
    reducers: {
        setCurrentNumber: (state, action: PayloadAction<number>) => {
            state.currentNumber = action.payload
        },
        clearCurrentNumber: (state) => {
            state.currentNumber = 0;
        },
        setCalcStack: (state, action: PayloadAction<[]>) => {
            state.calcStack = action.payload
        },
        addToCalcStack: (state, action: PayloadAction<string>) => {
            state.calcStack.push(action.payload)
            if (action.payload == "=") {
                let product = calculate(state.calcStack);
                state.currentNumber = product;
            }
        },
        popCalcStack: (state, action: PayloadAction<void>) => {
            state.calcStack.pop
        },
        addToTickerTape: (state, action: PayloadAction<string>) => {
            state.tickerTapeLines.push(action.payload)
        },
        updateTickerTapeLastLine: (state, action: PayloadAction<string>) => {
            state.tickerTapeLines[state.tickerTapeLines.length -1] = action.payload
        },
        clearTickerTape: (state) => {
            state.tickerTapeLines = []
        }
    },
});

export const { 
    clearCurrentNumber, 
    setCurrentNumber, 
    setCalcStack, 
    addToCalcStack, 
    popCalcStack 
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
