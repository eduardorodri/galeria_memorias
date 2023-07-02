import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBgkE12angUc6lDRp11PTEFXIjqfp_HDWA",
  authDomain: "galeria-projeto.firebaseapp.com",
  projectId: "galeria-projeto",
  storageBucket: "galeria-projeto.appspot.com",
  messagingSenderId: "1020675773023",
  appId: "1:1020675773023:web:7bc8ba3a116939eef801ea"
};


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const storage = getStorage(app);
const db = getFirestore(app);
export { auth, storage, db }