import { initializeApp } from "firebase/app";
// Unlike how API keys are typically used, API keys for Firebase services are not used to control access to backend resources;
// https://firebase.google.com/docs/projects/api-keys#api-keys-for-firebase-are-different
export const firebaseConfig = {
  apiKey: "AIzaSyBmq1OKSa8vK3v5Eb99rJFeAw6XBHmlftw",
  authDomain: "sqlalchemy-multi-tenancy-demo.firebaseapp.com",
  projectId: "sqlalchemy-multi-tenancy-demo",
  storageBucket: "sqlalchemy-multi-tenancy-demo.appspot.com",
  messagingSenderId: "533796976311",
  appId: "1:533796976311:web:2106ca9f1b4f3b38623f32",
  measurementId: "G-7DCS7BJEQ0"
};

export const app = initializeApp(firebaseConfig);
