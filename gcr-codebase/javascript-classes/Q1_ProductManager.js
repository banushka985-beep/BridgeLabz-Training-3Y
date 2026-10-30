class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount() {
        this.price = this.price - (this.price * 10 / 100);
    }

    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

let product1 = new Product(1, "Laptop", 50000, "Electronics");
let product2 = new Product(2, "Mouse", 800, "Accessories");
let product3 = new Product(3, "Keyboard", 1500, "Accessories");
let product4 = new Product(4, "Phone", 20000, "Electronics");

let products = [product1, product2, product3, product4];

product1.applyDiscount();
product2.applyDiscount();

console.log("All Products:");

products.forEach(function(product) {
    console.log(product.displayDetails());
});

let filteredProducts = products.filter(function(product) {
    return product.price > 1000;
});

console.log("Products with price greater than 1000:");

filteredProducts.forEach(function(product) {
    console.log(product.displayDetails());
});