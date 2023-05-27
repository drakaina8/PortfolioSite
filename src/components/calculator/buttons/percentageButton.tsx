import React from "react";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../redux/hooks";
import { setCurrentNumber } from "../../../redux/calculatorSlice";

interface PercentageButtonProps {
    value: string
}

const PercentageButton = (props: PercentageButtonProps): JSX.Element => {

    let { value } = props;

    const dispatch: AppDispatch = useDispatch();

    let currentNumber = useAppSelector((state) => state.calculator.currentNumber);

    function handleClick() {
        dispatch(setCurrentNumber(currentNumber / 100));
    }

    return(
        <button id={value} className="number calc-button" onClick={handleClick}>
            {value}
        </button>
    )
}

export default PercentageButton;