import React, { useEffect, useRef, useState } from 'react';
import miniApp from '../../types/miniApp';
import miniAppType from '../../types/miniAppTypeEnum';
import { addTaskbarItem, removeTaskbarItem } from '../../redux/taskbarSlice';
import { useDispatch } from 'react-redux';
import { removeDesktopItem } from '../../redux/desktopSlice';

interface PopupProps {
    id: number;
    titleText: string;
    mainText: string;
    buttonOptions: Array<string>;
}

const PopUp = (props: PopupProps): JSX.Element => {
    const { id, titleText, mainText, buttonOptions } = props;
    const [elementId, setElementId] = useState<number>(-1);

    const dispatch = useDispatch();
    const popUpRef = useRef<HTMLDivElement | null>(null);
    const [mouseDown, setMouseDown] = useState<boolean>(false);
    const itemCurrent = {
        id: id,
        name: 'Welcome!',
        faClasses: 'fa-regular fa-window-maximize',
        type: miniAppType.popup,
    } as miniApp;

    useEffect(() => {
        dispatch(addTaskbarItem(itemCurrent));
        setElementId(itemCurrent.id);
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
        const popUp = popUpRef.current;
        if (!popUp) return;

        const { x, y } = popUp.getBoundingClientRect();

        popUp.style.left = `${x + movementX}px`;
        popUp.style.top = `${y + movementY}px`;
    };

    const handleClick = () => {
        const popUp = popUpRef.current;
        if (!popUp) return;
        dispatch(removeDesktopItem(itemCurrent.id));
        dispatch(removeTaskbarItem(itemCurrent));
        popUp.remove();
    };

    return (
        <div>
            <div
                id={'APP' + elementId}
                key={'APP' + elementId}
                className="popup"
                ref={popUpRef}
                //onClick={increaseZIndex}
                style={{ zIndex: '1' }}
            >
                <div className="window-titlebar" onMouseDown={handleMouseDown}>
                    {titleText}
                </div>

                <div className="popup-maintext">{mainText}</div>

                <div className="popup-buttonset">
                    {buttonOptions &&
                        buttonOptions.map((buttonText) => {
                            return (
                                <button
                                    className="popup-button button-3d"
                                    key={buttonText + elementId}
                                    onClick={handleClick}
                                >
                                    {buttonText}
                                </button>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export { PopupProps };
export default PopUp;
