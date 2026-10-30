class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm() {
        let formHTML = `<h2>Custom Form</h2><form id="myForm">`;

        this.fields.forEach(function(field) {
            formHTML += `
                <label>${field.label}</label><br>
                <input type="${field.type}" name="${field.name}" required>
                <br><br>
            `;
        });

        formHTML += `
            <button type="submit">Submit</button>
            </form>
            <p id="result"></p>
        `;

        document.body.innerHTML = formHTML;

        document.getElementById("myForm").addEventListener("submit", (event) => {
            event.preventDefault();

            let data = this.getFormData();

            document.getElementById("result").innerText =
                JSON.stringify(data);
        });
    }

    getFormData() {
        let formData = {};
        let inputs = document.querySelectorAll("#myForm input");

        inputs.forEach(function(input) {
            formData[input.name] = input.value;
        });

        return formData;
    }
}

let fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];

let form = new FormBuilder(fields);

form.createForm();