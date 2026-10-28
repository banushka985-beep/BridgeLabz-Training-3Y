
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Invalid operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}

class CalculatorError extends Error {
    constructor(message) {
        super(message);
        this.name = "CalculatorError";
    }
}

for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];

    try {
        let result;

        switch (operation) {
            case "add":
                result = num1 + num2;
                break;

            case "divide":
                if (num2 === 0) {
                    throw new CalculatorError("Cannot divide by zero");
                }
                result = num1 / num2;
                break;

            case "power":
                result = num1 ** num2;
                break;

            case "root":
                if (num1 < 0) {
                    throw new CalculatorError(
                        "Cannot find square root of a negative number"
                    );
                }
                result = Math.sqrt(num1);
                break;

            case "subtract":
                result = num1 - num2;
                break;

            default:
                throw new InvalidOperationError(operation);
        }

        console.log(`${operation}: ${result}`);
    } catch (error) {
        console.log(`${operation} Error: ${error.message}`);
    }
}
