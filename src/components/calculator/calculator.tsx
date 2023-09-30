import React, { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import ClearButton from './buttons/clearButton';
import EqualsButton from './buttons/equalsButton';
import NegateButton from './buttons/negateButton';
import NumberButton from './buttons/numberButton';
import OperatorButton from './buttons/operatorButton';
import PercentageButton from './buttons/percentageButton';
import TickerTape from './tickerTape/tickerTape';
import { useDispatch } from 'react-redux';
import { removeDesktopItem } from '../../redux/desktopSlice';
import miniApp from '../../types/miniApp';
import miniAppType from '../../types/miniAppTypeEnum';
import taskbarSlice, { addTaskbarItem, removeTaskbarItem, clearTaskbarItems } from '../../redux/taskbarSlice';


interface calculatorProps {
    id: number;
}

const Calculator = (props: calculatorProps): JSX.Element => {
    let { id } = props;

    const [elementId, setElementId] = useState<number>(-1);
    const currentNumber = useAppSelector((state) => state.calculator.currentNumber);
    const calcStack = useAppSelector((state) => state.calculator.calcStack);

    const dispatch = useDispatch();
    const calcRef = useRef<HTMLDivElement | null>(null);
    const [mouseDown, setMouseDown] = useState<boolean>(false);
    const itemCurrent = {
        id: id,
        name: 'Calculator',
        faClasses: "fa-solid fa-calculator",
        type: miniAppType.calculator
    } as miniApp;

    useEffect(() => {
        dispatch(addTaskbarItem(itemCurrent));
        setElementId(itemCurrent.id);
        const handleMouseUp = () => setMouseDown(false);

        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.addEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => handleDrag(e.movementX, e.movementY);

        if (mouseDown) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseDown]);

    const handleMouseDown = () => setMouseDown(true);

    const handleDrag = (movementX, movementY) => {
        const calculator = calcRef.current;
        if (!calculator) return;

        const { x, y } = calculator.getBoundingClientRect();

        calculator.style.left = `${x + movementX}px`;
        calculator.style.top = `${y + movementY}px`;
    };

    // const increaseZIndex = () => {
    //     document.getElementById("APP" + elementId)!.style.zIndex =
    //     (parseInt(document.getElementById("APP" + elementId)!.style.zIndex) +1).toString();
    // }

    const handleClick = () => {
        const calculator = calcRef.current;
        if (!calculator) return;
        dispatch(removeDesktopItem(itemCurrent.id));
        dispatch(removeTaskbarItem(itemCurrent));
        calculator.remove();
    };

    const layout = [
        ['c', '-/+', '%', '/'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '='],
    ];

    return (
        <div id={"APP" + elementId} 
        key={"APP" + elementId} 
        className='calculator' 
        ref={calcRef}
        //onClick={increaseZIndex}
        style={{zIndex: "1"}}
        >
            <div id="calc-display" onMouseDown={handleMouseDown}>
                <span className="calc-display-text">{currentNumber}</span>
                </div>
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

export { calculatorProps };
export default Calculator;