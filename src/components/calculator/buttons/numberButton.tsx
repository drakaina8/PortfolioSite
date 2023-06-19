import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { AppDispatch } from '../../../redux/store';
import { useDispatch } from 'react-redux';
import { addToCalcStack, popCalcStack, setCurrentNumber } from '../../../redux/calculatorSlice';

interface NumberButtonProps {
    value: string;
}

const NumberButton = (props: NumberButtonProps): JSX.Element => {
    let { value } = props;

    const dispatch: AppDispatch = useDispatch();
    const currentNumber = useAppSelector((state) => state.calculator.currentNumber);

    function handleClick() {
        // Multiple decimal points cannot exist in a number
        if (value == '.' && currentNumber.toString().includes('.')) {
            
        } else if (currentNumber == "0") {
            // If the currentNumber is 0, we do not need to worry about concatenating it
            dispatch(setCurrentNumber(value));
            dispatch(addToCalcStack(value));
        } else {
            // If the currentNumber is being added to, we continually update the last index of the calcStack
            let concatCurrentNumber = currentNumber.toString() + value;
            dispatch(setCurrentNumber(concatCurrentNumber));
            dispatch(popCalcStack());
            dispatch(addToCalcStack(concatCurrentNumber));
        }
    }

    // The numberButton for 0 needs special classes added
    if (value == '0') {
        return (
            <button id={value} className="number calc-button double-width left-bottom-corner" onClick={handleClick}>
                {value}
            </button>
        );
    }

    return (
        <button id={value} className="number calc-button" onClick={handleClick}>
            {value}
        </button>
    );
};

export default NumberButton;
