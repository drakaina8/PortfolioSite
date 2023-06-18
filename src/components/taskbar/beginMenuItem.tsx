import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks';
import miniApp from '../../types/miniApp';
import miniAppType from '../../types/miniAppTypeEnum';
import { addDesktopItem } from '../../redux/desktopSlice';
import { serialize } from '../../utils/reactSerializer';

interface BeginMenuItemProps {
    key: string;
    item: miniApp;
}

const BeginMenuItem = (props: BeginMenuItemProps): JSX.Element => {
    let { item } = props;
    const dispatch = useDispatch();

    const handleClick = (item: miniApp) => {
        switch (item.type) {
            case miniAppType.popup:
                dispatch(
                    addDesktopItem({
                        type: 'PopUp',
                        props: {
                            id: Date.now(),
                            titleText: 'About',
                            mainText:
                                'This site was made using React, Redux Toolkit, and it was written in TypeScript! I though a desktop environment would be a fun and flexible way to demonstrate my abilities. Take a look around and maybe stay awhile!',
                            buttonOptions: ['Cool!'],
                        },
                    }),
                );
                break;
            case miniAppType.calculator:
                dispatch(
                    addDesktopItem({
                        type: 'Calculator',
                        props: {
                            id: Date.now(),
                        },
                    }),
                );
                break;
        }
    };

    return (
        <div className="menu-item" key={"menu-item-" + item.id}>
            <button className={item.faClasses + ' menu-item-button'} onClick={() => handleClick(item)}>
                <span className="menu-item-text">{item.name}</span>
            </button>
        </div>
    );
};

export default BeginMenuItem;