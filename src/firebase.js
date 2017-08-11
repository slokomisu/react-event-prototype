import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyCsyTzFHVsVrYypXtdRgJN_DSEiyhR5meY",
  authDomain: "facebook-event-aggregator.firebaseapp.com",
  databaseURL: "https://facebook-event-aggregator.firebaseio.com",
  projectId: "facebook-event-aggregator",
  storageBucket: "facebook-event-aggregator.appspot.com",
  messagingSenderId: "863570320235"
};
firebase.initializeApp(config);
export default firebase;