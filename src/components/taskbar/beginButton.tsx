import React from 'react';
import { useDispatch } from 'react-redux';
import { invertBoolean } from '../../redux/menuSlice';

const BeginButton = (): JSX.Element => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(invertBoolean(true));
    };

    return (
        <button id="taskbar-beginbutton" className="button-3d" onClick={handleClick}>
            <span id="beginbutton-text">Begin</span>
        </button>
    );
};

export default BeginButton;
