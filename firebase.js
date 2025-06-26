// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCs2FNr2skE-uoPdcp3HluHMtVaHq0CXAI",
  authDomain: "cdata-60ef3.firebaseapp.com",
  projectId: "cdata-60ef3",
  storageBucket: "cdata-60ef3.appspot.com",
  messagingSenderId: "586910406377",
  appId: "1:586910406377:web:0b335bd9b014a62ea5c278"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
