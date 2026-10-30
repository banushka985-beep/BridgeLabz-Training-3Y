class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        let item = {
            name: name,
            price: price,
            quantity: quantity
        };

        this.items.push(item);
    }

    getTotal() {
        let total = 0;

        this.items.forEach(function(item) {
            total = total + (item.price * item.quantity);
        });

        return total;
    }

    applyCoupon(coupon) {
        let couponPattern = /^(SAVE|DISC)(10|20)$/;

        if (couponPattern.test(coupon)) {
            let discount = Number(coupon.match(/\d+/)[0]);

            let total = this.getTotal();

            let finalTotal = total - (total * discount / 100);

            console.log("Coupon Applied: " + coupon);
            console.log("Discount: " + discount + "%");
            console.log("Final Total: ₹" + finalTotal);
        } else {
            console.log("Invalid Coupon Code!");
            console.log("Total Amount: ₹" + this.getTotal());
        }
    }
}

let cart = new Cart();

// Add items
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("Keyboard", 1500, 1);

console.log("Shopping Cart:");

cart.items.forEach(function(item) {
    console.log(item.name + " - ₹" + item.price + " x " + item.quantity);
});

console.log("Total Amount: ₹" + cart.getTotal());

// Apply coupon
cart.applyCoupon("SAVE20");