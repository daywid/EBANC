import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

// Your web app's Firebase configuration!!
const firebaseConfig = {
  apiKey: "APIKEY",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;

