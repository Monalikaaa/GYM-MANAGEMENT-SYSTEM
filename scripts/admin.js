// scripts/admin.js

document.getElementById('main-content').innerHTML = `
    <h2>Welcome Admin!</h2>
    <button onclick="adminLogin()">Login</button>
    <button onclick="addMember()">Add Member</button>
    <button onclick="updateDeleteMembers()">Update/Delete Members</button>
    <button onclick="createBills()">Create Bills</button>
    <button onclick="assignFeePackage()">Assign Fee Package</button>
    <button onclick="assignNotification()">Assign Notification for Monthly</button>
    <button onclick="exportReport()">Report Export</button>
    <button onclick="openSupplementStore()">Supplement Store</button>
    <button onclick="showDietDetails()">Diet Details</button>
`;


function adminLogin() {
    const email = prompt("Enter admin email:");
    const password = prompt("Enter admin password:");

    loginUser(email, password)
        .then(userCredential => {
            console.log('Admin logged in:', userCredential.user.email);
            // Implement redirection or other actions upon successful login
        })
        .catch(error => {
            console.error('Admin login error:', error.message);
        });
}

function addMember() {
    const memberData = {
        name: prompt("Enter member name:"),
        email: prompt("Enter member email:"),
        phoneNumber: prompt("Enter member phone number:"),
        membershipType: prompt("Enter member membership type:")
    };

    // Assuming you have a Firestore collection named 'members'
    addDoc(collection(db, 'members'), memberData)
        .then(docRef => {
            console.log('Member added with ID:', docRef.id);    
        })
        .catch(error => {
            console.error('Error adding member:', error.message);
        });
}

function updateDeleteMembers(memberId, newData) {
    // Assuming you have a Firestore collection named 'members'
    const memberRef = doc(db, 'members', memberId);

    // Update member data
    updateDoc(memberRef, newData)
        .then(() => {
            console.log('Member updated successfully');
            // Implement any additional actions upon successful member update
        })
        .catch(error => {
            console.error('Error updating member:', error.message);
        });

    // Alternatively, to delete a member
    // deleteDoc(memberRef)
    //     .then(() => {
    //         console.log('Member deleted successfully');
    //         // Implement any additional actions upon successful member deletion
    //     })
    //     .catch(error => {
    //         console.error('Error deleting member:', error.message);
    //     });
}

function createBills() {
    // Assuming you have a function to generate bills for members
    generateBills()
        .then(bill => {
            // Implement logic to save bill data to Firestore or perform other actions
            console.log('Bill created:', bill);
        })
        .catch(error => {
            console.error('Error creating bill:', error.message);
        });
}

function assignFeePackage(memberId, feePackage) {
    const memberRef = doc(db, 'members', memberId);

    // Update member data with new fee package
    updateDoc(memberRef, { feePackage })
        .then(() => {
            console.log('Fee package assigned successfully');
            // Implement any additional actions upon successful assignment
        })
        .catch(error => {
            console.error('Error assigning fee package:', error.message);
        });
}

function assignNotification() {
    // Assuming you have a function to send notifications to members
    sendNotification()
        .then(() => {
            console.log('Notification assigned successfully');
            // Implement any additional actions upon successful assignment
        })
        .catch(error => {
            console.error('Error assigning notification:', error.message);
        });
}

function exportReport() {
    // Assuming you have a function to generate and export reports
    generateReport()
        .then(report => {
            // Implement logic to export report data or perform other actions
            console.log('Report exported:', report);
        })
        .catch(error => {
            console.error('Error exporting report:', error.message);
        });
}

function openSupplementStore() {
    // Assuming you have a function to open a supplement store interface
    openStoreInterface()
        .then(() => {
            console.log('Supplement store opened');
            // Implement any additional actions upon successful store opening
        })
        .catch(error => {
            console.error('Error opening supplement store:', error.message);
        });
}

function showDietDetails() {
    // Assuming you have a function to fetch and display diet details
    fetchDietDetails()
        .then(dietDetails => {
            // Implement logic to display diet details to the user
            console.log('Diet details:', dietDetails);
        })
        .catch(error => {
            console.error('Error fetching diet details:', error.message);
        });
}
