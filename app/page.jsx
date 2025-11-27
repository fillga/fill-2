export const metadata = {
  title: "COIN NINE Mini App",
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://your-vercel-url.vercel.app/preview.png",
    "fc:frame:button:1": "Claim Free C9",
    "fc:frame:tx": "https://your-vercel-url.vercel.app/api/tx",
    "fc:frame:tx:button:1": "Claim Now"
  }
};

export default function Page() {
  return (
    <div style={{ padding: 28 }}>
      <h1>COIN NINE Mini App</h1>
      <p>Claim 100 C9 with only 0.0001 ETH fee on Base.</p>
    </div>
  );
}
