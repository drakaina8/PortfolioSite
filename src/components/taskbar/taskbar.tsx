import React, { ReactFragment, useEffect, useState } from 'react';
import TaskbarItem from './taskbarItem';
import taskbarSlice, { addTaskbarItem, removeTaskbarItem, clearTaskbarItems } from '../../redux/taskbarSlice';
import store from '../../redux/store';
import { useAppSelector } from '../../redux/hooks';
import BeginButton from './beginButton';
import BeginMenu from './beginMenu';

const Taskbar = (): JSX.Element => {
    const taskbarItems = useAppSelector((state) => state.taskBar.items) || [];

    return (
        <div id="taskbar">
            <BeginButton />
            {taskbarItems.map((item) => {
                return <TaskbarItem key={item.id} item={item} />;
            })}
        </div>
    );
};

export default Taskbar;
