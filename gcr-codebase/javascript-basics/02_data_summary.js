
 // Variables of different data types
let userName = "Anushka";
let age = 20;
let isStudent = true;
let subjects = ["Java", "HTML", "CSS"];
let student = { name: "Anushka", year: 3 };
let address = null;
let phoneNumber;

let report = [
    { Label: "Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "Student Object", Value: JSON.stringify(student), Type: typeof student },
    { Label: "Address", Value: address, Type: "null" },
    { Label: "Phone", Value: phoneNumber, Type: typeof phoneNumber }
];

console.table(report);
