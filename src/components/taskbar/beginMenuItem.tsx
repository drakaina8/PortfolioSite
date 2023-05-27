import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks';
import miniApp from '../../types/miniApp';
import miniAppType from '../../types/miniAppTypeEnum';
import PopUp from '../popup/popup';
import EmailForm from '../email/emailForm';
import { addDesktopItem } from '../../redux/desktopSlice';
import { serialize } from '../../utils/reactSerializer';

interface BeginMenuItemProps {
    key: string;
    item: miniApp;
}

function getImgClass(type: miniAppType): string {
    switch (type) {
        case miniAppType.popup:
            return 'popup-img';
        case miniAppType.email:
            return 'email-img';
    }
    // default return
    return 'game-img';
}

const BeginMenuItem = (props: BeginMenuItemProps): JSX.Element => {
    let { item } = props;
    const dispatch = useDispatch();
    const desktopItems = useAppSelector((state) => state.desktop.items) || [];

    const handleClick = (item: miniApp) => {
        let newElement: JSX.Element;
        switch (item.type) {
            case miniAppType.popup:
                dispatch(addDesktopItem({type: 'PopUp', props:{
                    id: item.id,
                    titleText:"About",
                    mainText:"This site was made using React, Redux Toolkit, and it was written in TypeScript! I though a desktop environment would be a fun and flexible way to demonstrate my abilities. Take a look around and maybe stay awhile!",
                    buttonOptions:[]
        }}));
                break;
            // case miniAppType.email:
            //     newElement = <EmailForm />;
            //     dispatch(addDesktopItem({type: 'EmailForm', props: {}}));
            //     break;
            // case miniAppType.game:
            //     newElement = <></>;
            //     dispatch(addItem(serialize(<></>,newElement)));
            //     break;
        }
        // dispatch(addItem(serialize(newElement)));
    };

    return (
        <div className="menu-item" key={item.name}>
            <button className={`menu-item-img ${getImgClass(item.type)}`} onClick={() => handleClick(item)} />
            <div className="menu-item-label">{item.name}</div>
        </div>
    );
};

export default BeginMenuItem;
