function calculate(expression: []): number {

    let hasMultiply = expression.findIndex(item => item == "*")
    let hasDivide = expression.findIndex(item => item == "/")
    let hasAdd = expression.findIndex(item => item == "+")
    let hasSubtract = expression.findIndex(item => item == "-")

    let result: number = expression.length >= 1 ? expression.at(0)! : 0;
    let inProgress;

    if (hasMultiply >= 0) {
        inProgress = expression.slice(hasMultiply - 2, hasMultiply + 2).push('7')
    } else if (hasDivide >= 0) {
        
    } else if (hasAdd >= 0) {

    } else if (hasSubtract >= 0) {

    }

    return result;
}

export { calculate }