"use client";

import { useEffect, useState, useCallback } from "react";
import sdk from "@farcaster/frame-sdk";

export default function Home() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const load = async () => {
      // Memberitahu Farcaster bahwa app sudah siap
      sdk.actions.ready();
      
      // Mengambil data user
      const context = await sdk.context;
      if (context && context.user) {
        setUser(context.user);
      }
    };

    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
    }
  }, [isSDKLoaded]);

  const closeApp = useCallback(() => {
    sdk.actions.close();
  }, []);

  if (!isSDKLoaded) {
    return <div style={{ padding: "20px" }}>Loading...</div>;
  }

  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      textAlign: 'center', 
      padding: '20px',
      maxWidth: '400px',
      margin: '0 auto'
    }}>
      <h1>Coin Nine 🪙</h1>
      
      <div style={{ 
        border: '1px solid #ddd', 
        borderRadius: '12px', 
        padding: '20px', 
        margin: '20px 0',
        backgroundColor: '#f9f9f9'
      }}>
        {user ? (
          <>
            <img 
              src={user.pfpUrl} 
              alt="Profile" 
              style={{ width: '60px', borderRadius: '50%', marginBottom: '10px' }}
            />
            <h3>Halo, {user.username}!</h3>
            <p>FID: {user.fid}</p>
          </>
        ) : (
          <p>Membuka di luar Farcaster.</p>
        )}
      </div>

      <button 
        onClick={closeApp}
        style={{
          padding: '10px 20px',
          background: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Tutup Aplikasi
      </button>
    </div>
  );
}