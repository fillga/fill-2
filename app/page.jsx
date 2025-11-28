export default function BannerC9() {
  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <svg
        viewBox="0 0 1200 630"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
      >
        {/* Background Abu-abu gelap (agar telur hitam terlihat) */}
        <rect width="1200" height="630" fill="#1A1A1A" />
        
        {/* Definisi Gradient agar telur terlihat 3D */}
        <defs>
          <radialGradient id="eggShine" cx="35%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#666666" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>
        </defs>

        {/* Bentuk Telur */}
        <ellipse 
          cx="600" 
          cy="315" 
          rx="180" 
          ry="240" 
          fill="url(#eggShine)" 
        />

        {/* Teks C9 */}
        <text
          x="600"
          y="350"
          fontFamily="Arial, sans-serif"
          fontSize="140"
          fontWeight="bold"
          fill="#FFFFFF"
          textAnchor="middle"
        >
          C9
        </text>
      </svg>
    </div>
  );
}
