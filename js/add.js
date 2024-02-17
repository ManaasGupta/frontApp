//Using Java Script to call POST api made in Spring boot


const myForm = document.getElementById("personForm");

myForm.addEventListener("submit", ev => {
    ev.preventDefault();


    const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        contactNumber: document.getElementById("contactNumber").value
    };



    fetch("http://localhost:9090/api/person/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then(function (res) {
        return res.json()
    }).then(function (json) {
        console.log(json);
    }).catch(reportError => console.error(reportError))
})

const homeButton = document.getElementById("returnHome");
homeButton.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/index.html"
})

const searchPage = document.getElementById("search");
searchPage.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/search.html"
})