import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
// import firebase from 'firebase'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTDrFBEhTxzIXP8_13fTOggv6RnCwI-IA",
  authDomain: "brandandfame.firebaseapp.com",
  projectId: "brandandfame",
  storageBucket: "brandandfame.appspot.com",
  messagingSenderId: "660084164112",
  appId: "1:660084164112:web:2705234cdc5d03c48f6c95",
  measurementId: "G-D4KZ4W4JYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  analytics,
  render: h => h(App)
}).$mount('#app')
