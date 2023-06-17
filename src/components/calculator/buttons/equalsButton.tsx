import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { addToCalcStack, setCalcStack, setCurrentNumber } from "../../../redux/calculatorSlice";
import { calculate } from "../calcUtils";

interface EqualsButtonProps {
    value: string
}

const EqualsButton = (props: EqualsButtonProps):JSX.Element => {

    let { value } = props;

    const dispatch: AppDispatch = useDispatch();

    let currentNumber = useAppSelector(state => state.calculator.currentNumber);
    let calcStack = useAppSelector(state => state.calculator.calcStack);

    function handleClick() {
        dispatch(addToCalcStack(currentNumber.toString()));
        // dispatch(setCurrentNumber(calculate(calcStack)))
        dispatch(addToCalcStack(value));
        // dispatch(addToCalcStack(currentNumber.toString()));
    }

    return(
        <button id={value} className="calc-button calc-right-bottom-corner" onClick={handleClick}>
            {value}
        </button>
    )
}

export default EqualsButton;