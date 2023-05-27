import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { setCurrentNumber } from "../../../redux/calculatorSlice";

interface NumberButtonProps {
    value: string
}

const NumberButton = (props: NumberButtonProps): JSX.Element => {

    let { value } = props;

    const dispatch: AppDispatch = useDispatch();
    const currentNumber = useAppSelector((state) => state.calculator.currentNumber);

    function handleClick() {
        if (value == "." && currentNumber.toString().includes(".")) {
            throw new Error
        } else if (currentNumber == 0) {
            dispatch(setCurrentNumber(parseFloat(value)))
        } else {
            dispatch(setCurrentNumber(parseFloat(currentNumber.toString() + value)))
        }
    }

    // The numberButton for 0 needs special classes added
    if (value == "0") {
        return(
            <button id={value} className="number calc-button double-width left-bottom-corner" onClick={handleClick}>
                {value}
            </button>
        )
    }

    return(
        <button id={value} className="number calc-button" onClick={handleClick}>
            {value}
        </button>
    )
}

export default NumberButton;