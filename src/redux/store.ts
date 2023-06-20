import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import generalReducer from './generalSlice';
import taskBarReducer from './taskbarSlice';
import menuReducer from './menuSlice';
import desktopReducer from './desktopSlice';
import calculatorReducer from './calculatorSlice';

const rootReducer = combineReducers({
    general: generalReducer,
    taskBar: taskBarReducer,
    menu: menuReducer,
    desktop: desktopReducer,
    calculator: calculatorReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
