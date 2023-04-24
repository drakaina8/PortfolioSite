import React, { useEffect, useState, useRef } from 'react';
import Taskbar from './taskbar/taskbar';
import { useAppSelector } from '../redux/hooks';
import BeginMenu from './taskbar/beginMenu';

const App = (): JSX.Element => {
    const menuVisible = useAppSelector((state) => state.menu.menuVisible);
    const desktopItems = useAppSelector((state) => state.desktop.items);

    return (
        <>
            {desktopItems.map((item) => {
                return item;
            })}
            <Taskbar />
            {menuVisible ? <BeginMenu /> : <></>}
        </>
    );
};

export default App;
