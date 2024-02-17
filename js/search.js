const myForm = document.getElementById("myform");

myForm.addEventListener("submit", (ev) => {
    ev.preventDefault();


    const hiddenParagraph = document.getElementById("hiddenPara");
    hiddenParagraph.classList.add("d-none");
    hiddenParagraph.classList.remove("d-show");
    hiddenParagraph.textContent = ""

    const selectedOption = document.getElementById("sort").value;
    const optionValue = document.getElementById("myInput").value;

    console.log(selectedOption);
    console.log(optionValue);

    let apiUrl = null; // Use let instead of const
    switch (selectedOption) {
        case "personId":
            apiUrl = "http://localhost:9090/api/person/";
            fetchFromApi(apiUrl, optionValue);
            break;
        case "firstName":
            apiUrl = "http://localhost:9090/api/person/firstName/";
            fetchFromApi(apiUrl, optionValue);
            break;
        case "lastName":
            apiUrl = "http://localhost:9090/api/person/lastName/";
            fetchFromApi(apiUrl, optionValue);
            break;
        case "email":
            apiUrl = "http://localhost:9090/api/person/email/";
            fetchFromApi(apiUrl, optionValue);
            break;
        case "contactNumber":
            apiUrl = "http://localhost:9090/api/person/contact/";
            fetchFromApi(apiUrl, optionValue);
            break;
    }
});

function fetchFromApi(url, optionValue) {
    showResults();
    fetch(url + optionValue)
        .then(response => {
            if (!response.ok) {
                hiddenPara();
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            let jsonData = data.content;
            console.log(jsonData);
            // get tbody Element
            const tbody = document.getElementById("tableBody"); // Update to "tableBody"

            // Clear existing rows in the table body
            tbody.innerHTML = "";

            for (let i = 0; i < jsonData.length; i++) {
                // get row values
                const record = jsonData[i];

                // create cell and row element in the table
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
}

function showResults() {
    const table = document.getElementById("hiddenInfo");
    table.classList.add("d-show");
    table.classList.remove("d-none");

    const resultTable = document.getElementById("resultTable");
    resultTable.classList.remove("d-none");
}


const clearResults = document.getElementById("clear");
clearResults.addEventListener("click", () => {
    const table = document.getElementById("hiddenInfo");
    table.classList.add("d-none");
    table.classList.remove("d-show");

    const hiddenParagraph = document.getElementById("hiddenPara");
    hiddenParagraph.classList.add("d-none");
    hiddenParagraph.classList.remove("d-show");
    hiddenParagraph.textContent = ""
})


const homeButton = document.getElementById("returnHome");
homeButton.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/index.html"
})

function hiddenPara() {
    const hiddenParagraph = document.getElementById("hiddenPara");
    hiddenParagraph.classList.remove("d-none");
    hiddenParagraph.classList.add("d-show");
    hiddenParagraph.textContent = "No Records found"

    const resultTable = document.getElementById("resultTable");
    resultTable.classList.add("d-none");
}
