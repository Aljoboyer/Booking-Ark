import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";

const initializationFirebase = () => {
    return initializeApp(firebaseConfig);
}

export default initializationFirebase;