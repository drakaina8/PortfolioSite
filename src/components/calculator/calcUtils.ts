function calculate(expression: string[]): number {
    let multiplicationIndex = expression.findIndex((item) => item == 'x');
    let divisionIndex = expression.findIndex((item) => item == '/');
    let additionIndex = expression.findIndex((item) => item == '+');
    let substractionIndex = expression.findIndex((item) => item == '-');

    let operatorIndex = -1;
    let inProgress: string[] = [];
    let result;

    if (multiplicationIndex >= 0) {
        operatorIndex = multiplicationIndex;
        result = (
            parseFloat(expression[multiplicationIndex - 1]) * parseFloat(expression[multiplicationIndex + 1])
        ).toString();
    } else if (divisionIndex >= 0) {
        operatorIndex = divisionIndex;
        result = (parseFloat(expression[divisionIndex - 1]) / parseFloat(expression[divisionIndex + 1])).toString();
    } else if (additionIndex >= 0) {
        operatorIndex = additionIndex;
        result = (parseFloat(expression[additionIndex - 1]) + parseFloat(expression[additionIndex + 1])).toString();
    } else if (substractionIndex >= 0) {
        operatorIndex = substractionIndex;
        result = (
            parseFloat(expression[substractionIndex - 1]) - parseFloat(expression[substractionIndex + 1])
        ).toString();
    }

    inProgress = rebuildExpression(expression, operatorIndex, result);

    // We check for a length of greater than 2, because a length of 2 would be the result and an equals sign
    if (inProgress.length > 2) {
        result = calculate(inProgress);
    } else {
        result = inProgress[0];
    }

    return result;
}

function rebuildExpression(expression: string[], operatorIndex: number, newValue: string) {
    let inProgress: string[] = [];

    if (operatorIndex == 1) {
        inProgress.push(newValue);
        inProgress = inProgress.concat(expression.slice(operatorIndex + 2, expression.length));
    } else {
        inProgress = inProgress.concat(
            expression.slice(0, operatorIndex - 1),
            [newValue],
            expression.slice(operatorIndex + 2, expression.length),
        ) as string[];
    }
    console.log(inProgress);
    return inProgress;
}

export { calculate };
