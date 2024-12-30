import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const useWaitlist = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email : string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleJoinWaitlist = async () => {
    setLoading(true);
    setMessage("");

    try {
      if (!email.trim()) {
        setMessage("Email is required.");
        return;
      }

      if (!isValidEmail(email)) {
        setMessage("Please enter a valid email address.");
        return;
      }
      // Save email to Firestore
      await addDoc(collection(db, "waitlist"), { email, createdAt: new Date() });

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "waitlist_signup", {
        event_category: "engagement",
        event_label: "WaitList Form",
        value: 1,
      })};

      setMessage("Thank you for signing up!");
      setEmail(""); // Clear the email input after submission
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
