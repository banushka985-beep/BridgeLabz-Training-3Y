const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let discountedTotal = 0;

for (let product of cart) {
    let price = product.price;

    if (product.category === "electronics") {
        price = price - (price * 10 / 100);
    } else if (product.category === "fashion") {
        price = price - (price * 5 / 100);
    }

    discountedTotal += price;

    console.log(product.item, "Final Price:", price);
}

if (discountedTotal > 50000) {
    discountedTotal = discountedTotal - (discountedTotal * 5 / 100);
}

let originalTotal = cart.reduce((sum, product) => sum + product.price, 0);

console.log("Original Cart Total:", originalTotal);
console.log("Final Cart Total:", discountedTotal);
