function calculate(expression: string[]): number {

    let hasMultiply = expression.findIndex(item => item == "x")
    let hasDivide = expression.findIndex(item => item == "/")
    let hasAdd = expression.findIndex(item => item == "+")
    let hasSubtract = expression.findIndex(item => item == "-")

    //let result: number = expression.length >= 1 ? expression.at(0)! : 0;
    let inProgress: string[] = [];
    let result;

    if (hasMultiply >= 0) {
        let product = (parseFloat(expression[hasMultiply -1]) * parseFloat(expression[hasMultiply +1])).toString();
        inProgress = rebuildExpression(expression, hasMultiply, product);
    } else if (hasDivide >= 0) {
        
    } else if (hasAdd >= 0) {

    } else if (hasSubtract >= 0) {

    }

    if (inProgress.length > 1) {
        result = calculate(inProgress);
    } else {
        result = inProgress[0];
    }

    return result;
}

function rebuildExpression(expression: string[], indexToReplace: number, newValue: string) {
    let inProgress: string[] = [];

    if (indexToReplace == 1) {
        inProgress.push(newValue);
        inProgress.concat(expression.slice(indexToReplace -1, expression.length -1));
    } else {
        inProgress = inProgress.concat(
            expression.slice(0, indexToReplace-2), 
            [newValue],
            expression.slice(indexToReplace + 3, expression.length -1)
        ) as string[];
    }

    return(inProgress);
}

export { calculate }