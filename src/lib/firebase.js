import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA2JKwm485Js_5AOP2gKnuInkO8uibk9j0',
  authDomain: 'instagram-yt-b848f.firebaseapp.com',
  projectId: 'instagram-yt-b848f',
  storageBucket: 'instagram-yt-b848f.appspot.com',
  messagingSenderId: '125446140149',
  appId: '1:125446140149:web:104bd0b602f3ee764855bc'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
