// calculator.ts
export function calculate(num1: number, num2: number, operator: string): number | string {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        default: return "Error: Invalid operator";
    }
}
