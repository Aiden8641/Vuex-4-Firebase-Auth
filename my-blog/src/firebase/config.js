import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCI9O3EYgQgkpg1bodjGvMAsWcKM0-ykjw",
    authDomain: "vuex-4-fb-auth-a48cb.firebaseapp.com",
    projectId: "vuex-4-fb-auth-a48cb",
    storageBucket: "vuex-4-fb-auth-a48cb.appspot.com",
    messagingSenderId: "645472278213",
    appId: "1:645472278213:web:4ecb0c2eb95a566ffa02ac"
  };

  //init 
  initalizeApp(firebaseConfig)

  //init firebase auth
  const auth = getAuth()

  export { auth }