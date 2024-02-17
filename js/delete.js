document.getElementById('deleteForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting in the default way

    // Get form data
    var personId = document.getElementById('personId').value;

    // Make a DELETE request using fetch API
    fetch('http://localhost:9090/api/person/' + personId, {
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.httpStatus == "NOT_FOUND") {
                alert("record with " + personId + "not found")
            } else {
                // Handle success, show a message or perform other actions
                console.log(data)
            }
            // You can redirect to another page or perform additional actions here
        })
        .catch(error => {
            // Handle error, show an error message or perform other actions
            console.error('Error:', error);
        });
});


const homeButton = document.getElementById("returnHome");
homeButton.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/index.html"
})

const searchPage = document.getElementById("search");
searchPage.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/search.html"
})
