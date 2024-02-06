// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';
import { getFunctions } from 'firebase/functions';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyB3k4Li2co3h4tVA-ES5F1sxa4nbxdMSKs',
  authDomain: 'prject3-e2b32.firebaseapp.com',
  projectId: 'prject3-e2b32',
  storageBucket: 'prject3-e2b32.appspot.com',
  messagingSenderId: '941516456216',
  appId: '1:941516456216:web:c22b0c4af63a24abd51e6d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app, 'us-east4');
export default app;
