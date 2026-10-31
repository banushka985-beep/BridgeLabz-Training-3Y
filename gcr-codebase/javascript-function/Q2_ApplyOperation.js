function applyOperation(numbers, operation) {

    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        result.push(operation(numbers[i]));
    }

    return result;
}

let numbers = [1, 2, 3, 4];

let doubleResult = applyOperation(numbers, function(num) {
    return num * 2;
});

let squareResult = applyOperation(numbers, function(num) {
    return num * num;
});

console.log("Doubled Numbers:", doubleResult);
console.log("Squared Numbers:", squareResult);