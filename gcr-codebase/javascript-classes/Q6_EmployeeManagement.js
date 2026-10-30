class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary = this.salary + (this.salary * percent / 100);
    }
}

let employees = [
    new Employee(1, "Anu", "IT", 30000),
    new Employee(2, "Riya", "HR", 25000),
    new Employee(3, "Rahul", "Sales", 35000),
    new Employee(4, "Aman", "IT", 40000),
    new Employee(5, "Priya", "Finance", 28000)
];

employees.forEach(function(employee) {
    employee.applyBonus(10);
});

employees.forEach(function(employee) {
    console.log("Employee: " + employee.name);
    console.log("Annual Salary: " + employee.getAnnualSalary());
});

let totalPayout = employees.reduce(function(total, employee) {
    return total + employee.getAnnualSalary();
}, 0);

console.log("Total Annual Payout: " + totalPayout);