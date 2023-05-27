import React, { ReactFragment } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';
import './styles.css';
import { Provider } from 'react-redux';
import store from './redux/store';

const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
