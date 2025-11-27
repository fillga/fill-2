"use client";

import { useEffect, useState, useCallback } from "react";
import sdk from "@farcaster/frame-sdk";

export default function Home() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const load = async () => {
      // 1. Beritahu Farcaster bahwa aplikasi siap (Loading spinner hilang)
      sdk.actions.ready();
      
      // 2. Ambil data context (siapa user yang membuka)
      const context = await sdk.context;
      if (context && context.user) {
        setUser(context.user);
      }
    };

    // Cek jika kita berada di lingkungan Farcaster
    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
    }
  }, [isSDKLoaded]);

  // Fungsi untuk menutup aplikasi
  const closeApp = useCallback(() => {
    sdk.actions.close();
  }, []);

  if (!isSDKLoaded) {
    return <div>Loading App...</div>;
  }

  return (
    <div style={{ 
      padding: "20px", 
      textAlign: "center", 
      fontFamily: "sans-serif",
      backgroundColor: "#f0f0f0",
      minHeight: "100vh"
    }}>
      <h1>🪙 Coin Nine</h1>
      
      <div style={{ 
        background: "white", 
        padding: "20px", 
        borderRadius: "12px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        marginTop: "20px"
      }}>
        {user ? (
          <>
            <img 
              src={user.pfpUrl} 
              alt="Profile" 
              style={{ width: "60px", borderRadius: "50%", marginBottom: "10px" }}
            />
            <h3>Halo, {user.username}! 👋</h3>
            <p>FID Kamu: {user.fid}</p>
            <p style={{ color: "green", fontWeight: "bold" }}>Status: Terhubung ke Farcaster</p>
          </>
        ) : (
          <p>Membuka di Browser biasa (Bukan di Warpcast)</p>
        )}
      </div>

      <button 
        onClick={closeApp}
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          backgroundColor: "#855DCD",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Tutup Aplikasi
      </button>
    </div>
  );
}
