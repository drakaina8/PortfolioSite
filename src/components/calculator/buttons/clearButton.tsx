import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { setCurrentNumber, setCalcStack } from "../../../redux/calculatorSlice";

interface ClearButtonProps {
    value: string
}

const ClearButton = (props: ClearButtonProps): JSX.Element => {

    const dispatch: AppDispatch = useDispatch();
    let { value } = props;
    const currentNumber = useAppSelector((state) => state.calculator.currentNumber)
    const calcStack = useAppSelector((state) => state.calculator.calcStack)

    function handleClick() {
        // The clear button will always set the currentNumber to 0
        // and empty the calcStack
        dispatch(setCurrentNumber(0))
        dispatch(setCalcStack([]))
    }

    return(
        <button className="calc-number calc-button" onClick={handleClick}>
            {value}
        </button>

    )
}

export default ClearButton;