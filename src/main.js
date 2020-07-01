import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import './assets/main.css';

/* Import the firebase SDK and extend with firestore */
import firebase from 'firebase/app';
require('firebase/firestore');

/* Paste your firebase configuration below */
const config = {
  apiKey: "AIzaSyBUE57LAH2Ni5Xp7FRHECxkp-b7ECRlox4",
  authDomain: "dbdebt-d1da3.firebaseapp.com",
  databaseURL: "https://dbdebt-d1da3.firebaseio.com",
  projectId: "dbdebt-d1da3",
  storageBucket: "dbdebt-d1da3.appspot.com",
  messagingSenderId: "848342549212",
  appId: "1:848342549212:web:091cd0b2a2109da9c92a19"
};

/* Initialize firebase with your configuration */
firebase.initializeApp(config);

/* Bind firebase to your Vue instance */
Vue.prototype.$firebase = firebase;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
