
 // Store the user's name and current hour
let userName = "Anushka";
let currentHour = new Date().getHours();

// Check the current time and print a greeting
if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currentHour <= 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}
