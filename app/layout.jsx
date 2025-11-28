import { Web3Provider } from './Web3Provider'
import "./globals.css";

export const metadata = {
  title: "Coin Launcher",
  description: "Mini App peluncuran koin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Kita bungkus aplikasi di sini */}
        <Web3Provider>
          {children}
        </Web3Provider>
      </body>
    </html>
  );
}
