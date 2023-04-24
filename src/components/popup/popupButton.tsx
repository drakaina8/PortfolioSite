import React from 'react';

interface popupButtonProps {
    buttonText: string;
}

const PopUpButton = (props: popupButtonProps): JSX.Element => {
    let { buttonText } = props;

    return <div className="popup-button">{buttonText}</div>;
};

export default PopUpButton;
