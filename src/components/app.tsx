import React, { useEffect, useState, useRef } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { useAppSelector } from '../redux/hooks';
import { deserialize } from '../utils/reactSerializer';
import Taskbar from './taskbar/taskbar';
import BeginMenu from './taskbar/beginMenu';
import Calculator from './calculator/calculator'

const App = (): JSX.Element => {
    const desktopItems = useAppSelector((state) => state.desktop.items);
    const menuVisible = useAppSelector((state) => state.menu.menuVisible);

    return (
        <>
            < Calculator />
            {desktopItems.map((item) => {
                return deserialize(item);
            })}
            <Taskbar />
            {menuVisible ? <BeginMenu /> : <></>}

        </>
    );
};

export default App;
