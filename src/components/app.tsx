import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { deserialize } from '../utils/reactSerializer';
import Taskbar from './taskbar/taskbar';
import BeginMenu from './taskbar/beginMenu';

const App = (): JSX.Element => {
    const theme = useAppSelector((state) => state.general.theme);
    const desktopItems = useAppSelector((state) => state.desktop.items);
    const menuVisible = useAppSelector((state) => state.menu.menuVisible);

    return (
        <div id="theme-root" data-theme={theme}>
            {desktopItems.map((item) => {
                return deserialize(item);
            })}
            <Taskbar />
            {menuVisible ? <BeginMenu /> : <></>}
        </div>
    );
};

export default App;
