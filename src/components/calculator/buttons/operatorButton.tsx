import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { clearCurrentNumber,addToCalcStack, popCalcStack } from "../../../redux/calculatorSlice";

interface OperatorButtonProps {
    value: string
}

const OperatorButton = (props: OperatorButtonProps): JSX.Element => {

    let { value } = props;

    const dispatch: AppDispatch = useDispatch();
    let currentNumber = useAppSelector((state) => state.calculator.currentNumber);

    function handleClick() {
        if (currentNumber !== 0) {
            dispatch(addToCalcStack(currentNumber.toString()));
            dispatch(addToCalcStack(value));
            dispatch(clearCurrentNumber());
        } else {
            // If the last addition to the calcStack was another operator, we replace it with the newly selected one
            // This mimics the functionality of the Windows calculator
            dispatch(popCalcStack());
            dispatch(addToCalcStack(value));
        }
    }

    return(
        <button id={value} className="number calc-button" onClick={handleClick}>
            {value}
        </button>
    )
}

export default OperatorButton;