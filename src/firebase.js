import firebase from "firebase";

// Use your config values here.
var config = {
  apiKey: "AIzaSyANmBRCf4Lchv6Wb0vjS-x2gyPiBONI0uI",
  authDomain: "waitlist-2345d.firebaseapp.com",
  databaseURL: "https://waitlist-2345d-default-rtdb.firebaseio.com",
  projectId: "waitlist-2345d",
  storageBucket: "waitlist-2345d.appspot.com",
  messagingSenderId: "452723950245",
  appId: "1:452723950245:web:d5cad6d3e437f55191034c",
  measurementId: "G-PW0NSY787Y"
};
firebase.initializeApp(config);

export default firebase;