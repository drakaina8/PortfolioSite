import React from "react";
import { useAppSelector } from "../../../redux/hooks";

interface tickerTapeProps {

}

// export const newLine = () => {
//     const tape = document.querySelector("#tape");
//     const newLine = document.createElement('p');
//     newLine.className = 'tape-line';
//     newLine.innerText = '';
//     tape.appendChild(newLine);
// }

// export const updateLastLine = (newStackElement, deleteContent=false) => {

//     const lastLine = document.querySelector("#tape > p:last-child");

//     let tempStack = [];

//     if (deleteContent) {
//         tempStack.push(newStackElement);
//     } else {
//         let calcStack = JSON.parse(window.localStorage.getItem('calcStack'));
//         // calling concat on a blank array allows non-array elements to be concated with currentStack
//         tempStack = [].concat(calcStack, newStackElement); 
//     }

//     let updatedLineText = '';
//     tempStack.forEach(item => {
//         updatedLineText += item + ' ';
//     });

//     lastLine.innerHTML = updatedLineText.replace(/,/g, ' ');;
// }

// export const clearAllLines = () => {
//     const tape = document.querySelector("#tape");
//     let child = tape.lastElementChild;
//     while(child) {
//         tape.removeChild(child);
//         child = tape.lastElementChild;
//     }

//     newLine();
// }

const TickerTape = (): JSX.Element => {
    // tickerTapeLines is an array of strings to represent each line of the tape
    const tickerTapeLines = useAppSelector(state => state.calculator.tickerTapeLines)
    return(
        <>
            {tickerTapeLines.map(line => {
                <p>
                    {line}
                </p>
            })}
        </>
    );
}

export { tickerTapeProps };
export default TickerTape;