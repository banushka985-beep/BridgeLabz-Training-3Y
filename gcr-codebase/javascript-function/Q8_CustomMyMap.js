Array.prototype.myMap = function(callback) {

    let result = [];

    for (let i = 0; i < this.length; i++) {

        result.push(callback(this[i], i, this));
    }

    return result;
};

let numbers = [1, 2, 3];

let doubleNumbers = numbers.myMap(function(num) {
    return num * 2;
});

let squareNumbers = numbers.myMap(function(num) {
    return num * num;
});

console.log("Original Array:", numbers);
console.log("Doubled Array:", doubleNumbers);
console.log("Squared Array:", squareNumbers);