"use client"; // Mark this as a Client Component

import React, { useEffect, useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import Script from 'next/script';

const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    const consentStatus = localStorage.getItem('cookiesAccepted');
    if (consentStatus === 'true') {
      setCookiesAccepted(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    setCookiesAccepted(true);
    localStorage.setItem('cookiesAccepted', 'true');
  };

  return (
    <>
      {/* Google Analytics */}
      {GA_TRACKING_ID && cookiesAccepted && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `}
          </Script>
        </>
      )}

      {/* Cookie Consent */}
      <CookieConsent
        location="bottom"
        buttonText="Accept All"
        declineButtonText="Decline"
        enableDeclineButton
        style={{ 
            background: 'linear-gradient(to right, #fff7ed, #ffe8d6)',
            color: "#333",
            fontSize: "13px",
            padding: "5px 20px",
            borderRadius: "10px",
            boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
            maxWidth: "1200px",
            textAlign: "center",
            position: "fixed",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "20px",
            border: '0.5px solid #d3d3d3',
            zIndex: "9999",
        }}
        buttonStyle={{ 
            background: "#ff4500",
            color: '#fff',
            borderRadius: "20px",
            padding: "8px 16px",
            fontSize: "12px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
        }}
        declineButtonStyle={{ 
            background: "#ddd",
            color: "#333",
            borderRadius: "20px",
            padding: "8px 16px",
            fontSize: "12px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
        }}
        onAccept={handleAcceptCookies}
        cookieName="nutribulkcut_cookies"
      >
  This website uses cookies to enhance your browsing experience.{" "}
  <a
    href="/cookie-policy"
    style={{
      color: "#ff4500",
      textDecoration: "underline",
      fontWeight: "bold",
    }}
  >
    Learn more
  </a>
      </CookieConsent>

      {/* Render children */}
      {children}
    </>
  );
};

export default ClientWrapper;
