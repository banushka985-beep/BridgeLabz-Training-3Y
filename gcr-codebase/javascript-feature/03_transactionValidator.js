
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

class TransactionError extends Error {
    constructor(type, message) {
        super(message);
        this.type = type;
    }
}

for (let i = 0; i < transactions.length; i++) {
    try {
        const transaction = transactions[i];

        if (transaction === null) {
            throw new TransactionError("NullEntry", "Transaction is null");
        }

        if (transaction.id == null || transaction.amount == null) {
            throw new TransactionError(
                "MissingData", "Missing id or amount"
            );
        }

        if (transaction.amount < 0) {
            throw new TransactionError(
                "NegativeAmount", "Amount cannot be negative"
            );
        }

        valid.push(transaction);
        console.log(`Transaction ${transaction.id}: Valid`);
    } catch (error) {
        invalid.push({
            index: i,
            type: error.type,
            message: error.message
        });

        console.log(`Transaction ${i + 1} failed: ${error.message}`);
    }
}

console.log("\n----- Transaction Report -----");
console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log("Successful Count:", valid.length);
console.log("Failed Count:", invalid.length);
