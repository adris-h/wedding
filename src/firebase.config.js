import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

export const firebaseConfig = {
    apiKey: "AIzaSyDx7v_ex7fJzQLhJ_NF0Vp6Qe4lei-BZ80",
    authDomain: "svatba-mejstky.firebaseapp.com",
    projectId: "svatba-mejstky",
    storageBucket: "svatba-mejstky.firebasestorage.app",
    messagingSenderId: "2117358990",
    appId: "1:2117358990:web:23ea6a243f031db00000df",
    measurementId: "G-3DDT16GHN4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);