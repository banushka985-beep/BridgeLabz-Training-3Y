let total = 7500;
let discountPercentage;

if (total >= 10000) {
    discountPercentage = 25;
} else if (total >= 5000) {
    discountPercentage = 15;
} else if (total >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

let discount = total * discountPercentage / 100;
let finalPrice = Math.round(total - discount);

console.log("Original Total: Rs. " + total);
console.log("Discount: " + discountPercentage + "%");
console.log("Discount Amount: Rs. " + Math.round(discount));
console.log("Final Price: Rs. " + finalPrice);
