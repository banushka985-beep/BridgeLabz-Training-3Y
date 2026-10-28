
"use strict";

const apiData = [
    "25", "true", "false", "NaN", " ", "100px", "3.14",
    null, undefined
];

const validNumbers = [];
const invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log("\n----- Data Report -----");
    console.log("Original Value:", value);
    console.log("Number:", numberValue);
    console.log("Boolean:", booleanValue);
    console.log("String:", stringValue);

    if (Number.isNaN(numberValue) ||
        (typeof value === "string" && value.trim() === "")) {
        invalidNumbers.push(value);
        console.log("Status: Invalid");
    } else {
        validNumbers.push(numberValue);
        console.log("Status: Valid");
    }
}

console.log("\nValid Numbers:", validNumbers);
console.log("Invalid Values:", invalidNumbers);
console.log("Valid Count:", validNumbers.length);
console.log("Invalid Count:", invalidNumbers.length);
