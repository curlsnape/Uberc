
import { initializeApp } from "firebase/app";

import {GoogleAuthProvider,getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA7m_PAfa_gjqI1-ryTCN-hqsLZ00YaZtc",
  authDomain: "cabme-next-live.firebaseapp.com",
  projectId: "cabme-next-live",
  storageBucket: "cabme-next-live.appspot.com",
  messagingSenderId: "781959421270",
  appId: "1:781959421270:web:5126356dd9e268e418caf7",
  measurementId: "G-9F7HRTB7D9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
const auth = new getAuth()
 
export{app,provider,auth}