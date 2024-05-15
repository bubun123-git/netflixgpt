// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh_KN5wvjwiLmfnQrDOHvFC9wPt-kxQvk",
  authDomain: "netflixgpt-9eb02.firebaseapp.com",
  projectId: "netflixgpt-9eb02",
  storageBucket: "netflixgpt-9eb02.appspot.com",
  messagingSenderId: "917028117163",
  appId: "1:917028117163:web:a7045c4dba00c658a335ee",
  measurementId: "G-F24V4D20D0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth