
"use strict";
let rows = Number(process.argv[2] || 5);

if (!Number.isInteger(rows) || rows < 1) {
    console.log("Please enter a positive whole number.");
} else {
    for (let i = 1; i <= rows; i++) {
        let pattern = "";

        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern.trim());
    }
}
