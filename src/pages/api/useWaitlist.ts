import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const useWaitlist = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleJoinWaitlist = async () => {
    setLoading(true);
    setMessage("");

    try {
      // Save email to Firestore
      await addDoc(collection(db, "waitlist"), { email, createdAt: new Date() });

      setMessage("Thank you for signing up!");
      setEmail("");
    } catch (error) {
      console.error("Error saving email: ", error);
      setMessage("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    message,
    loading,
    handleJoinWaitlist,
  };
};
