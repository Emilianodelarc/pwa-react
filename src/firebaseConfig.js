import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtR2hkkG9_tViXLRsbM4lYhA6RdGsXV5A",
  authDomain: "my-medical-history-63f7b.firebaseapp.com",
  projectId: "my-medical-history-63f7b",
  storageBucket: "my-medical-history-63f7b.appspot.com",
  messagingSenderId: "91845880740",
  appId: "1:91845880740:web:c8cd38bfd19d1de6342f31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;