import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';
import './assets/styles.css';
import { Provider } from 'react-redux';
import store, { AppDispatch } from './redux/store';
import { useDispatch } from 'react-redux';
import { setTheme } from './redux/generalSlice';
import { useAppSelector } from './redux/hooks';

if (!document.cookie) {
    document.cookie = 'theme=default-theme; samesite=strict';
}

const theme = document.cookie.split("=")[1];
const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);
const htmlNode = document.documentElement;
htmlNode.dataset.theme = theme;


root.render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>,
);
