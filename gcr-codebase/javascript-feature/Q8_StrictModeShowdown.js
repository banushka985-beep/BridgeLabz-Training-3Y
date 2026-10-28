
"use strict";

// Original code:
// function demo(a, a) {
//     total = 10;
//     delete total;
// }
// demo(5, 10);
//
// Strict mode mein duplicate parameter names ki wajah se
// SyntaxError aayega.

// Correct code using ES6 rules:
function demo(first, second) {
    const total = 10;

    console.log("First parameter:", first);
    console.log("Second parameter:", second);
    console.log("Total:", total);
}

demo(5, 10);

// Output:
// First parameter: 5
// Second parameter: 10
// Total: 10
