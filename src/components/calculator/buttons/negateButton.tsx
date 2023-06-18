import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import { setCurrentNumber } from "../../../redux/calculatorSlice";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";

interface NegateButtonProps {
    value: string
}

const NegateButton = (props: NegateButtonProps): JSX.Element => {
    
    let { value } = props;
    const currentNumber = useAppSelector((state) => state.calculator.currentNumber);
    const dispatch: AppDispatch = useDispatch();
    
    function handleClick() {
        if(currentNumber !== 0) {
            dispatch(setCurrentNumber(currentNumber * -1));
        }
    }
    return(
        <button id={value} className="calc-number calc-button" onClick={handleClick}>
            {value}
        </button>
    )
}

export default NegateButton;