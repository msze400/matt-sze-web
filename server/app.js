// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAqAUVFMtrtgj6B7cbxXh2ce4c68yijyss',
    authDomain: 'matt-sze-web.firebaseapp.com',
    projectId: 'matt-sze-web',
    storageBucket: 'matt-sze-web.appspot.com',
    messagingSenderId: '160293466948',
    appId: '1:160293466948:web:9ed1dc07dc64863ede1d11',
    measurementId: 'G-TB5S8HXXEW',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

// Get a list of cities from your database
