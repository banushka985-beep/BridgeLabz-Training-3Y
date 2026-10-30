let user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

document.body.innerHTML = `
    <h2>Edit User Details</h2>

    <form id="userForm">
        <input type="text" id="name" placeholder="Name">
        <br><br>

        <input type="email" id="email" placeholder="Email">
        <br><br>

        <input type="number" id="age" placeholder="Age">
        <br><br>

        <button type="submit">Update</button>
    </form>

    <h3>Updated User Details:</h3>
    <p id="details"></p>
`;

document.getElementById("name").value = user.name;
document.getElementById("email").value = user.email;
document.getElementById("age").value = user.age;

function displayUser() {
    document.getElementById("details").innerText =
        JSON.stringify(user, null, 2);
}

displayUser();

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = Number(document.getElementById("age").value);

    displayUser();

    alert("User details updated successfully!");
});