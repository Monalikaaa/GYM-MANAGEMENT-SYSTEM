const firebaseConfig = {
  apiKey: "AIzaSyAPhTjKgSEk4eq4ks--nZfyMxRasPfO-WY",
  authDomain: "your-gym-app-dc71e.firebaseapp.com",
  projectId: "your-gym-app-dc71e",
  storageBucket: "your-gym-app-dc71e.appspot.com",
  messagingSenderId: "88974019383",
  appId: "1:88974019383:web:be42f584e60a156c1ea8b2",
  measurementId: "G-22HPZQZ390"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);