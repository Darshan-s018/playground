import * as readline from 'readline';
import { calculate } from './calculator';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first number: ', (num1) => {
    rl.question('Enter operator (+, -, *, /): ', (operator) => {
        rl.question('Enter second number: ', (num2) => {
            const result = calculate(parseFloat(num1), parseFloat(num2), operator);
            console.log(`Result: ${result}`);
            rl.close();
        });
    });
});
