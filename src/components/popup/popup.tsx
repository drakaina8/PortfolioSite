import React, { ElementRef, MutableRefObject, ReactElement, useEffect, useRef, useState } from 'react';
import miniApp from '../../types/miniApp';
import miniAppType from '../../types/miniAppTypeEnum';
import taskbarSlice, { addItem, removeItem, clearItems } from '../../redux/taskbarSlice';
import store from '../../redux/store';
import { useDispatch } from 'react-redux';

interface popupProps {
    titleText: string;
    mainText: string;
    buttonOptions: Array<string>;
}

const PopUp = (props: popupProps): JSX.Element => {
    let { titleText, mainText, buttonOptions } = props;
    const [elementId, setElementId] = useState<number>(-1);

    const dispatch = useDispatch();
    const popUpRef = useRef<HTMLDivElement | null>(null);
    const [mouseDown, setMouseDown] = useState<boolean>(false);
    const itemCurrent = {
        id: Date.now(),
        name: 'Welcome!',
        iconURL: '../src/assets/application_xp.jpg',
        type: miniAppType.popup,
    } as miniApp;

    useEffect(() => {
        dispatch(addItem(itemCurrent));
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
        popUp.remove();
        dispatch(removeItem(itemCurrent));
    };

    return (
        <React.Fragment>
            <div id={'APP' + elementId} className="popup" ref={popUpRef}>
                <div className="popup-header" onMouseDown={handleMouseDown}>
                    {titleText}
                </div>

                <div className="popup-maintext">{mainText}</div>

                <div className="popup-buttonset">
                    {buttonOptions &&
                        buttonOptions.map((buttonText) => {
                            return (
                                <button className="popup-button button-3d" key={buttonText} onClick={handleClick}>
                                    {buttonText}
                                </button>
                            );
                        })}
                </div>
            </div>
        </React.Fragment>
    );
};

export default PopUp;
