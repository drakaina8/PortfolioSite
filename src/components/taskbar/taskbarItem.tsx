import React, { MouseEventHandler, useEffect, useState } from 'react';
import miniApp from '../../types/miniApp';

interface taskbarItemProps {
    item: miniApp;
}

const TaskbarItem = (props: taskbarItemProps): JSX.Element => {
    let { item } = props;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const element = document.getElementById('APP' + e.currentTarget.id);
        if (element && element.style.display == 'none') {
            element.style.display = '';
        } else if (element) {
            element.style.display = 'none';
        }
    };

    return (
        <>
            <button
                className="taskbar-item"
                id={item.id.toString()}
                key={'task-bar-' + item.id.toString()}
                onClick={handleClick}
            >
                <i className={item.faClasses + " taskbar-icon"}></i>
            </button>
        </>
    );
};

export default TaskbarItem;
