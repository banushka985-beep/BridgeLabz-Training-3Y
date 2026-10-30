document.body.innerHTML = `
    <h2>Student Registration Form</h2>

    <form id="studentForm">
        <input type="text" id="name" placeholder="Enter Name"><br><br>
        <input type="text" id="email" placeholder="Enter Email"><br><br>
        <input type="text" id="phone" placeholder="Enter Phone"><br><br>
        <input type="password" id="password" placeholder="Enter Password"><br><br>

        <button type="submit">Register</button>
    </form>

    <p id="message"></p>
`;

let form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");

    let valid = true;

    let namePattern = /^[A-Za-z ]+$/;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let phonePattern = /^[0-9]{10}$/;

    let passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).+$/;

    function checkField(field, pattern) {
        if (pattern.test(field.value.trim())) {
            field.style.border = "2px solid green";
        } else {
            field.style.border = "2px solid red";
            valid = false;
        }
    }

    checkField(name, namePattern);
    checkField(email, emailPattern);
    checkField(phone, phonePattern);
    checkField(password, passwordPattern);

    let message = document.getElementById("message");

    if (valid) {
        message.innerText = "Registration Successful!";
        message.style.color = "green";
    } else {
        message.innerText = "Please enter valid details.";
        message.style.color = "red";
    }
});