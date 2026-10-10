
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDxbmHu_VtAWXxwS-aF1yQVBwTO42qmY8s",
    authDomain: "student-dashboard-6e440.firebaseapp.com",
    projectId: "student-dashboard-6e440",
    storageBucket: "student-dashboard-6e440.firebasestorage.app",
    messagingSenderId: "451604396884",
    appId: "1:451604396884:web:29a7894fde7a41237566c1",
    measurementId: "G-VKJ6TN7X1X"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  const analytics = getAnalytics(app);
