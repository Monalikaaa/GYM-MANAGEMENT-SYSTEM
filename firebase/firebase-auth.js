// firebase/firebase-auth.js
const auth = firebase.auth();

// Function to handle user login
function loginUser(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
}

// Function to handle user logout
function logoutUser() {
    return auth.signOut();
}
