import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { AppDispatch } from '../../../redux/store';
import { useDispatch } from 'react-redux';
import { addToCalcStack, setCalcStack, setCurrentNumber } from '../../../redux/calculatorSlice';

interface EqualsButtonProps {
    value: string; // Should always be "="
}

const EqualsButton = (props: EqualsButtonProps): JSX.Element => {
    let { value } = props;

    const dispatch: AppDispatch = useDispatch();

    let currentNumber = useAppSelector((state) => state.calculator.currentNumber);
    let calcStack = useAppSelector((state) => state.calculator.calcStack);

    function handleClick() {
        // First, check that the last addition to the calcStack (not the equals sign) was an operator
        // If it was, then we supply the last number entered (this mimics the functionality of the Windows calculator)
        if (isNaN(parseFloat(calcStack[calcStack.length - 1]))) {
            dispatch(addToCalcStack(calcStack[calcStack.length - 2]));
            dispatch(addToCalcStack(value));
        } else {
            // These dispatches add the previously selected number and then an equals sign to the calcStack
            // The addToCalcStack reducer has logic for completing the calculation
            dispatch(addToCalcStack(value));
        }
    }

    return (
        <button id={value} className="calc-button right-bottom-corner" onClick={handleClick}>
            {value}
        </button>
    );
};

export default EqualsButton;
