document.body.innerHTML = `
    <h2>Login Form</h2>

    <form id="loginForm">
        <input type="text" id="username" placeholder="Enter Username">
        <p id="usernameError"></p>

        <input type="password" id="password" placeholder="Enter Password">
        <p id="passwordError"></p>

        <button type="submit">Login</button>
    </form>

    <h3 id="message"></h3>
`;

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let usernameError = document.getElementById("usernameError");
    let passwordError = document.getElementById("passwordError");
    let message = document.getElementById("message");

    let valid = true;
    let usernamePattern = /^.{5,}$/;

    let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;

    usernameError.innerText = "";
    passwordError.innerText = "";
    message.innerText = "";

    if (!usernamePattern.test(username)) {
        usernameError.innerText = "Username must have at least 5 characters.";
        usernameError.style.color = "red";
        valid = false;
    }

    if (!passwordPattern.test(password)) {
        passwordError.innerText =
            "Password needs 8 characters, uppercase, lowercase, number and special character.";
        passwordError.style.color = "red";
        valid = false;
    }

    if (valid) {
        message.innerText = "Login Successful!";
        message.style.color = "green";
    } else {
        message.innerText = "Please correct the errors.";
        message.style.color = "red";
    }
});