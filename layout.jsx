import React from 'react';

// Jika Anda memiliki file CSS global, hilangkan tanda komentar (//) di baris bawah ini:
// import './globals.css';

export const metadata = {
  title: "Coin Nine",
  description: "Aplikasi launch base coin Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
