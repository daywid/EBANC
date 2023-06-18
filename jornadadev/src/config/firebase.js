import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaLIgVtMcxTMde8onpSYMrjUTD3-xQODA",
  authDomain: "tiktok---daywid.firebaseapp.com",
  projectId: "tiktok---daywid",
  storageBucket: "tiktok---daywid.appspot.com",
  messagingSenderId: "248914989237",
  appId: "1:248914989237:web:41de8b62debc48d78ceefc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;