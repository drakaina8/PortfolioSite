import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import ClearButton from './buttons/clearButton';
import EqualsButton from './buttons/equalsButton';
import NegateButton from './buttons/negateButton';
import NumberButton from './buttons/numberButton';
import OperatorButton from './buttons/operatorButton';
import PercentageButton from './buttons/percentageButton';
import TickerTape from './tickerTape/tickerTape';

const Calculator = (): JSX.Element => {
    const currentNumber = useAppSelector((state) => state.calculator.currentNumber);

    const layout = [
        ['c', '-/+', '%', '/'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '='],
    ];

    // Takes into consideration numbers with too many digits to fit on the screen
    // Also displays friendlier error messages 
    function formatDisplay(currentNumber: string): string {
        let formattedNum: string = currentNumber.toString();
        if (currentNumber.toString().length > 9) {
            formattedNum = parseFloat(currentNumber).toExponential(4);
        }

        if (formattedNum == Infinity.toString()) {
            return "Overflow";
        }

        return formattedNum;
    }

    return (
        <div id="calculator">
            <div id="calc-display">{formatDisplay(currentNumber)}</div>
            <div id="calc-buttons">
                {layout.map((row) => {
                    return (
                        <div className="button-row" key={row.toString()}>
                            {row.map((value) => {
                                if (value === 'c') {
                                    return <ClearButton value={value} key={value} />;
                                }
                                if (value === '=') {
                                    return <EqualsButton value={value} key={value} />;
                                }
                                if (value === '-/+') {
                                    return <NegateButton value={value} key={value} />;
                                }
                                if (value === '%') {
                                    return <PercentageButton value={value} key={value} />;
                                }
                                if (['+', '-', 'x', '/'].includes(value)) {
                                    return <OperatorButton value={value} key={value} />;
                                } else return <NumberButton value={value} key={value} />;
                            })}
                        </div>
                    );
                })}
            </div>

            <TickerTape />
        </div>
    );
};

export default Calculator;
