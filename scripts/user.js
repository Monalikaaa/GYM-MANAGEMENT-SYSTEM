// scripts/user.js

document.getElementById('main-content').innerHTML = `
    <h2>Welcome User!</h2>
    <button onclick="userLogin()">Login</button>
    <button onclick="viewDetails()">View Details</button>
    <button onclick="searchRecords()">Search Records</button>
`;

// Function to authenticate user
function loginUser(email, password) {
    // Simulating authentication with a delay
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "user@example.com" && password === "password") {
                resolve({ user: { email: email } });
            } else {
                reject(new Error("Invalid credentials"));
            }
        }, 1000); // Simulated delay of 1 second
    });
}

function userLogin() {
    const email = prompt("Enter user email:");
    const password = prompt("Enter user password:");

    loginUser(email, password)
        .then(userCredential => {
            console.log('User logged in:', userCredential.user.email);
            // Redirect to dashboard upon successful login
            window.location.href = "index.html"; // Change the URL to your desired dashboard page
        })
        .catch(error => {
            console.error('User login error:', error.message);
            alert('Invalid email or password. Please try again.');
        });
}

function viewDetails() {
    // Fetch details of the currently logged-in user
    const currentUserEmail = "user@example.com"; // Example user email
    firebase.firestore().collection("users").doc(currentUserEmail).get()
        .then(doc => {
            if (doc.exists) {
                console.log("User details:", doc.data());
                // Display user details on the UI
                alert(`User details:\nName: ${doc.data().name}\nAge: ${doc.data().age}`);
            } else {
                console.log("No such document!");
                alert('User details not found.');
            }
        })
        .catch(error => {
            console.error("Error getting user details:", error);
            alert('Failed to fetch user details.');
        });
}

function searchRecords() {
    // Prompt user for search query
    const searchQuery = prompt("Enter search query:");

    // Search for records based on the search query
    firebase.firestore().collection("records").where("field", "==", searchQuery).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc.id, " => ", doc.data());
                // Process and display search results on the UI
                const resultElement = document.createElement('li');
                resultElement.textContent = `${doc.id}: ${doc.data().field}`;
                document.getElementById('search-results').appendChild(resultElement);
            });
            // Inform user if no records found
            if (querySnapshot.empty) {
                alert('No records found.');
            }
        })
        .catch(error => {
            console.error("Error searching records:", error);
            alert('Failed to search records.');
        });
}
