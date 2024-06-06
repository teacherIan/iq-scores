import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDWY_g349ODfl6i2k3WdfPmWdbayQ1VPo0',
  authDomain: 'iq-scoreboard.firebaseapp.com',
  projectId: 'iq-scoreboard',
  storageBucket: 'iq-scoreboard.appspot.com',
  messagingSenderId: '162137592800',
  appId: '1:162137592800:web:6130ed85e2ff12b8005185',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
