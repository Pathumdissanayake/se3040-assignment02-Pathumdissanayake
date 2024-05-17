import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAg8KCzCdDB5OoMCxTPS3l0AvI8Jjb64t8",
  authDomain: "nasa-api-36303.firebaseapp.com",
  projectId: "nasa-api-36303",
  storageBucket: "nasa-api-36303.appspot.com",
  messagingSenderId: "995794662564",
  appId: "1:995794662564:web:5565f076f96e3279916231"
};

const app = initializeApp(firebaseConfig);
const database = getAuth(app)

export default database
