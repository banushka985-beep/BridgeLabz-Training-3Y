
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];
const under18 = [];

for (let i = 0; i < rawData.length; i++) {
    const lineNumber = i + 1;

    try {
        const person = JSON.parse(rawData[i]);

        // Check required keys.
        if (person.user == null || person.age == null) {
            throw new Error("Missing user or age");
        }

        // Convert age to Number.
        const age = Number(person.age);

        if (!Number.isFinite(age)) {
            throw new Error("Invalid age");
        }

        const validPerson = {
            user: person.user,
            age: age
        };

        clean.push(validPerson);

        if (age < 18) {
            under18.push(validPerson);
        }

        console.log(`Line ${lineNumber}: Valid entry`);
    } catch (error) {
        errors.push({
            line: lineNumber,
            message: error.message
        });

        console.log(`Line ${lineNumber}: Error - ${error.message}`);
    }
}

console.log("\n----- JSON Audit Report -----");
console.log("Clean Data:", clean);
console.log("Errors:", errors);
console.log("Valid Count:", clean.length);
console.log("Invalid Count:", errors.length);
console.log("Under-18 Users:", under18);