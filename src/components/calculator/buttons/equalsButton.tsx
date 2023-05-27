import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { addToCalcStack } from "../../../redux/calculatorSlice";

interface EqualsButtonProps {
    value: string
}

const EqualsButton = (props: EqualsButtonProps):JSX.Element => {

    let { value } = props;

    const dispatch: AppDispatch = useDispatch();

    function handleClick() {
        dispatch(addToCalcStack(value))
    }

    return(
        <button id={value} className="calc-button calc-right-bottom-corner" onClick={handleClick}>
            {value}
        </button>
    )
}

export default EqualsButton;