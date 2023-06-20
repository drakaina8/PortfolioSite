import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../redux/generalSlice';

interface settingsProps {
    id: number;
}

const Settings = (props: settingsProps): JSX.Element => {
    const [elementId, setElementId] = useState<number>(-1);

    const dispatch = useDispatch();
    const elementRef = useRef<HTMLDivElement | null>(null);
    const [mouseDown, setMouseDown] = useState<boolean>(false);

    useEffect(() => {
        const handleMouseUp = () => setMouseDown(false);

        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.addEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => handleDrag(e.movementX, e.movementY);

        if (mouseDown) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseDown]);

    const handleMouseDown = () => setMouseDown(true);

    const handleDrag = (movementX, movementY) => {
        const popUp = elementRef.current;
        if (!popUp) return;

        const { x, y } = popUp.getBoundingClientRect();

        popUp.style.left = `${x + movementX}px`;
        popUp.style.top = `${y + movementY}px`;
    };

    const setThemeAndCookie = (themeName: string) => {
        document.cookie = `theme=${themeName}; samesite=strict`;
        dispatch(setTheme(themeName));
    };

    return (
        <div id="settings" className="popup" ref={elementRef}>
            <div className="window-titlebar" onMouseDown={handleMouseDown}>
                Theme Settings
            </div>
            Choose a theme for the site:
            <form>
                <div>
                    <input
                        id="radio"
                        type="radio"
                        name="Default"
                        value="default-theme"
                        checked={document.cookie == 'default-theme'}
                        onChange={(e) => setThemeAndCookie(e.currentTarget.defaultValue)}
                    />
                    <label htmlFor="default-theme">Default</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="Orchid"
                        value="orchid"
                        checked={document.cookie == 'aquarium'}
                        onChange={(e) => setThemeAndCookie(e.currentTarget.defaultValue)}
                    />
                    <label htmlFor="orchid">Orchid</label>
                </div>
            </form>
        </div>
    );
};

export { settingsProps };
export default Settings;
