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
    const calcStack = useAppSelector((state) => state.calculator.calcStack);

    const layout = [
        ['c', '-/+', '%', '/'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '='],
    ];

    return (
        <div id="calculator">
            <div id="calc-display">{currentNumber}</div>
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
