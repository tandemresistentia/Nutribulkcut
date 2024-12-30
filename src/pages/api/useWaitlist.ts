import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB3hiLlAkAr7Sc98PPqi7LOIQwGDQKb6qE",
  authDomain: "nutribulkcut.firebaseapp.com",
  projectId: "nutribulkcut",
  storageBucket: "nutribulkcut.firebasestorage.app",
  messagingSenderId: "165932166798",
  appId: "1:165932166798:web:1916e48950e062862423df",
  measurementId: "G-NKEG9W8Z57"
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
