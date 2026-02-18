import { initializeApp } from 'firebase/app';
import {connectAuthEmulator, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAP9UZMRFHfqiGPH1nUko3dTAqEJFV_nz0",
  authDomain: "willhaben-advanced-agent.firebaseapp.com",
  projectId: "willhaben-advanced-agent",
  storageBucket: "willhaben-advanced-agent.firebasestorage.app",
  messagingSenderId: "274233537078",
  appId: "1:274233537078:web:0e66ec5d533cda57cc5e97",
  measurementId: "G-8KY87QLW21"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

if (import.meta.env.DEV) {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
}