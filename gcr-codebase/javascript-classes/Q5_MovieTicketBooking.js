document.body.innerHTML = `
    <h2>Movie Ticket Booking</h2>

    <form id="bookingForm">
        <input type="text" id="name" placeholder="Enter Name"><br><br>
        <input type="text" id="email" placeholder="Enter Email"><br><br>
        <input type="number" id="seats" placeholder="Enter Seats"><br><br>

        <button type="submit">Book Ticket</button>
    </form>

    <div id="ticket"></div>
`;

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let seats = Number(document.getElementById("seats").value);

    let namePattern = /^[A-Za-z ]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!namePattern.test(name)) {
        alert("Enter a valid name.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Enter a valid email.");
        return;
    }

    if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        alert("Seats must be between 1 and 10.");
        return;
    }

    let booking = {
        name: name,
        email: email,
        seats: seats
    };

    document.getElementById("ticket").innerHTML = `
        <h3>Booking Successful!</h3>
        <p>Name: ${booking.name}</p>
        <p>Email: ${booking.email}</p>
        <p>Seats: ${booking.seats}</p>
    `;
});