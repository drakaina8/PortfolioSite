import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { addToCalcStack, popCalcStack } from "../../../redux/calculatorSlice";

interface OperatorButtonProps {
    value: string
}

const OperatorButton = (props: OperatorButtonProps): JSX.Element => {

    let { value } = props;

    const dispatch: AppDispatch = useDispatch();
    let currentNumber = useAppSelector((state) => state.calculator.currentNumber);
    let calcStack = useAppSelector((state) => state.calculator.calcStack);


    function handleClick() {
        if (currentNumber !== 0) {
            dispatch(addToCalcStack(currentNumber.toString()));
            dispatch(addToCalcStack(value));
        } else {
            dispatch(popCalcStack());
            dispatch(addToCalcStack(value))
        }
    }

    return(
        <button id={value} className="number calc-button" onClick={handleClick}>
            {value}
        </button>
    )
}

export default OperatorButton;