
"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (let i = 0; i < employees.length; i++) {
    try {
        const employee = employees[i];

        if (!employee || employee.name == null ||
            employee.salary == null || employee.years == null) {
            throw new Error("Employee information is missing");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new Error("Invalid salary or experience");
        }

        const bonus = years > 3 ? salary * 0.10 : salary * 0.05;
        const totalSalary = salary + bonus;

        console.log("\n----- Employee Details -----");
        console.log(`Name: ${employee.name}`);
        console.log(`Salary: Rs. ${salary}`);
        console.log(`Experience: ${years} years`);
        console.log(`Bonus: Rs. ${bonus}`);
        console.log(`Total Salary: Rs. ${totalSalary}`);
    } catch (error) {
        console.log("Error:", error.message);
    }
}
