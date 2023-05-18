import { initializeApp } from "firebase/app";
const databaseURL = import.meta.env.VITE_REACT_APP_API_DATABASE;
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
const projectId = import.meta.env.VITE_REACT_APP_API_PROJECT;
const appId = import.meta.env.VITE_REACT_APP_API_ID;
const messagingSenderId = import.meta.env.VITE_REACT_APP_API_MESSAGI;
const authDomain = import.meta.env.VITE_REACT_APP_API_AUTH;
const storageBucket = import.meta.env.VITE_REACT_APP_API_STORAGE;

const confiChat = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
};

const app = initializeApp(confiChat);
