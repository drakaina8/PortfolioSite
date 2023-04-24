import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import miniApp from '../../types/miniApp';
import BeginMenuItem from './beginMenuItem';

const BeginMenu = (): JSX.Element => {
    const menuItems = useAppSelector((state) => state.menu.menuItems) || [];

    return (
        <div id="beginmenu">
            {menuItems.map((item) => {
                return <BeginMenuItem key={item.name} item={item} />;
            })}
        </div>
    );
};

export default BeginMenu;
