function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    console.log("Brand: " + this.brand);
    console.log("Model: " + this.model);
};

let car1 = new Car("Tata", "Nexon");
let car2 = new Car("Mahindra", "Thar");

car1.getDetails();

console.log("---------------");

car2.getDetails();