s
let expenses = [5000, 1500, 8000, 2000, 1000];

let total = 0;

for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
}

let average = total / expenses.length;
let tax = total * 0.10;
let finalAmount = total;
finalAmount += tax;

console.log("Total Expenses: Rs. " + total.toFixed(2));
console.log("Average Expenses: Rs. " + average.toFixed(2));
console.log("Tax (10%): Rs. " + tax.toFixed(2));
console.log("Final Amount: Rs. " + finalAmount.toFixed(2));
