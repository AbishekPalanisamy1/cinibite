
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBbcvtCj2yidVUjKU30y_2eAIh9JG8bN6g",
  authDomain: "cinibite-59d4b.firebaseapp.com",
  projectId: "cinibite-59d4b",
  storageBucket: "cinibite-59d4b.appspot.com",
  messagingSenderId: "942400158716",
  appId: "1:942400158716:web:1100eddc3d3f5ea5da1079"
};


const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);