import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from './app';

const AppWrapper = (): JSX.Element => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export default AppWrapper;
