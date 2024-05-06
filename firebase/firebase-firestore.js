// firebase/firebase-firestore.js
const firestore = firebase.firestore();

// Function to add a member to Firestore
function addMember(memberData) {
    return firestore.collection('members').add(memberData);
}

// Function to update member details in Firestore
function updateMember(memberId, updatedData) {
    return firestore.collection('members').doc(memberId).update(updatedData);
}

// Function to get all members from Firestore
function getAllMembers() {
    return firestore.collection('members').get();
}

// Function to create a bill in Firestore
function createBill(billData) {
    return firestore.collection('bills').add(billData);
}

// Function to get all bills from Firestore
function getAllBills() {
    return firestore.collection('bills').get();
}

// Function for admin login (Assuming authentication is handled separately)
function adminLogin(username, password) {
    // Add your authentication logic here
}

// Function to add or update members and also delete members from Firestore
function updateDeleteMembers(memberId, newData) {
    // Check if newData contains 'delete' key to determine whether to delete or update member
    if (newData.delete) {
        return firestore.collection('members').doc(memberId).delete();
    } else {
        return firestore.collection('members').doc(memberId).set(newData, { merge: true });
    }
}

// Function to show diet details for a member from Firestore
function showDietDetails(memberId) {
    return firestore.collection('members').doc(memberId).collection('diet').get();
}

// Function to open a supplement store (Example of adding documents to a 'supplementStore' collection)
function openSupplementStore(itemData) {
    return firestore.collection('supplementStore').add(itemData);
}

// Function to export report (Example of exporting a report to a 'reports' collection)
function exportReport(reportData) {
    return firestore.collection('reports').add(reportData);
}

// Function to assign notifications to members
function assignNotification(memberId, notificationData) {
    return firestore.collection('members').doc(memberId).collection('notifications').add(notificationData);
}

// Function to assign a fee package to a member
function assignFeePackage(memberId, feePackageData) {
    return firestore.collection('members').doc(memberId).collection('feePackages').add(feePackageData);
}

// Function for member login
function memberLogin(email, password) {
    // Add your member authentication logic here
}

// Function to view bill receipts
function viewBillReceipts(memberId) {
    return firestore.collection('members').doc(memberId).collection('bills').get();
}

// Function to view bill notifications
function viewBillNotification(memberId) {
    return firestore.collection('members').doc(memberId).collection('notifications').where('type', '==', 'bill').get();
}

// Function to view member details
function viewDetails(memberId) {
    return firestore.collection('members').doc(memberId).get();
}

// Function to search records
function searchRecords(collectionName, fieldName, searchQuery) {
    return firestore.collection(collectionName).where(fieldName, '==', searchQuery).get();
}
