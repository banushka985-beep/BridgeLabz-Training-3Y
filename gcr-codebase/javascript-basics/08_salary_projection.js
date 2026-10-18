let currentSalary = 30000;
let incrementRate = 10;

let salary = currentSalary;
let salaryReport = [];

for (let year = 1; year <= 5; year++) {
    salary += salary * incrementRate / 100;

    salaryReport.push({
        Year: year,
        Salary: Math.round(salary)
    });
}

console.table(salaryReport);
