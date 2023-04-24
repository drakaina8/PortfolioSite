import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import taskBarReducer from './taskbarSlice';
import menuReducer from './menuSlice';
import desktopReducer from './desktopSlice';

const rootReducer = combineReducers({
    taskBar: taskBarReducer,
    menu: menuReducer,
    desktop: desktopReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
