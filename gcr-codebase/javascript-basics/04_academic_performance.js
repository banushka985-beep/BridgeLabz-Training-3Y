
 // Marks of five subjects
let marks = [90, 85, 78, 88, 92];

let total = 0;
let failed = false;

// Calculate total and check for failing marks
for (let i = 0; i < marks.length; i++) {
    total += marks[i];

    if (marks[i] < 35) {
        failed = true;
    }
}

let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

console.log("Average: " + average.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");

// Decide the result
if (failed || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}
