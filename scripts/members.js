// scripts/members.js

document.getElementById('main-content').innerHTML = `
    <h2>Member Dashboard</h2>
    <button onclick="memberLogin()">Login</button>
    <button onclick="viewBillReceipts()">View Bill Receipts</button>
    <button onclick="viewBillNotification()">View Bill Notification</button>
    <button onclick="viewDetails()">View Details</button>
    <button onclick="searchRecords()">Search Records</button>
`;

function memberLogin() {
    const email = prompt("Enter member email:");
    const password = prompt("Enter member password:");

    if (!email || !password) {
        console.error('Invalid email or password.');
        return;
    }

    loginUser(email, password)
        .then(userCredential => {
            console.log('Member logged in:', userCredential.user.email);
            // Implement redirection or other actions upon successful login
        })
        .catch(error => {
            console.error('Member login error:', error.message);
        });
}

function viewBillReceipts() {
    const billReceiptsContainer = document.getElementById('bill-receipts');
    billReceiptsContainer.innerHTML = ''; // Clear previous data

    const billReceiptsRef = collection(db, 'billReceipts');

    getDocs(billReceiptsRef)
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const billData = doc.data();
                // Display bill data in UI
                billReceiptsContainer.innerHTML += `<div>${JSON.stringify(billData)}</div>`;
            });
        })
        .catch(error => {
            console.error('Error fetching bill receipts:', error.message);
        });
}

function viewBillNotification() {
    const billNotificationsContainer = document.getElementById('bill-notifications');
    billNotificationsContainer.innerHTML = ''; // Clear previous data

    const billNotificationsRef = collection(db, 'billNotifications');

    getDocs(billNotificationsRef)
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const notificationData = doc.data();
                // Display notification data in UI
                billNotificationsContainer.innerHTML += `<div>${JSON.stringify(notificationData)}</div>`;
            });
        })
        .catch(error => {
            console.error('Error fetching bill notifications:', error.message);
        });
}

function viewDetails() {
    const memberId = prompt("Enter member ID:");
    if (!memberId) {
        console.error('Invalid member ID.');
        return;
    }

    const memberDetailsContainer = document.getElementById('member-details');
    memberDetailsContainer.innerHTML = ''; // Clear previous data

    const memberRef = doc(db, 'members', memberId);

    getDoc(memberRef)
        .then(docSnapshot => {
            if (docSnapshot.exists()) {
                const memberData = docSnapshot.data();
                // Display member details in UI
                memberDetailsContainer.innerHTML = `<div>${JSON.stringify(memberData)}</div>`;
            } else {
                console.log('Member not found');
            }
        })
        .catch(error => {
            console.error('Error fetching member details:', error.message);
        });
}

function searchRecords() {
    const searchTerm = prompt("Enter search term:");
    if (!searchTerm) {
        console.error('Invalid search term.');
        return;
    }

    const searchResultsContainer = document.getElementById('search-results');
    searchResultsContainer.innerHTML = ''; // Clear previous data

    const recordsRef = collection(db, 'records');

    const query = query(recordsRef, where('fieldToSearch', '==', searchTerm));

    getDocs(query)
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const recordData = doc.data();
                // Display record data in UI
                searchResultsContainer.innerHTML += `<div>${JSON.stringify(recordData)}</div>`;
            });
        })
        .catch(error => {
            console.error('Error searching records:', error.message);
        });
}
