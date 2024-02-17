const myForm = document.getElementById("personForm");

myForm.addEventListener("submit", ev => {
    ev.preventDefault();

    const personId = document.getElementById("personId").value;

    const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        contactNumber: document.getElementById("contactNumber").value
    };



    fetch("http://localhost:9090/api/person/" + personId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then(function (res) {
        return res.json()
    }).then(function (json) {
        console.log(json);
    }).catch(reportError => console.error(reportError))

    const showMessage = document.getElementById("hiddenMessage");
    showMessage.classList.add("d-show");
    showMessage.classList.remove("d-none");

})

const homeButton = document.getElementById("returnHome");
homeButton.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/index.html"
})

const hideMessage = document.getElementById("hideMessage");
hideMessage.addEventListener('click', () => {
    const hiddenMessage = document.getElementById("hiddenMessage");
    hiddenMessage.classList.add("d-none");
    hiddenMessage.classList.remove("d-show");
})

const searchPage = document.getElementById("search");
searchPage.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/search.html"
})