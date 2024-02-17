document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:9090/api/person/")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            let jsonData = data.content;

            // get tbody Element
            const tbody = document.getElementById("records");

            // Clear existing rows in the table body
            tbody.innerHTML = "";

            for (let i = 0; i < jsonData.length; i++) {
                // get row values
                const record = jsonData[i];

                // create cell and row element in table
                const row = document.createElement("tr");
                const pId = document.createElement("td");
                const firstNameCell = document.createElement("td");
                const lastNameCell = document.createElement("td");
                const emailCell = document.createElement("td");
                const contactNumberCell = document.createElement("td");

                // set value for cells
                pId.textContent = record.personId;
                firstNameCell.textContent = record.firstName;
                lastNameCell.textContent = record.lastName;
                emailCell.textContent = record.email;
                contactNumberCell.textContent = record.contactNumber;

                // appending cells in a row
                row.appendChild(pId);
                row.appendChild(firstNameCell);
                row.appendChild(lastNameCell);
                row.appendChild(emailCell);
                row.appendChild(contactNumberCell);

                // appending row in tbody
                tbody.appendChild(row);
            }
        })
        .catch(err => {
            console.error("Error fetching data:", err);
        });
});



const homeButton = document.getElementById("returnHome");

homeButton.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/index.html"
})
