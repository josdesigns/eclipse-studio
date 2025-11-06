"use client";

export default function SectionDivider() {
  return (
    <div className="relative w-full h-1 overflow-hidden">
      {/* メインの蛍光ライン */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent opacity-80"></div>
      
      {/* グロー効果 */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40 blur-sm"
        style={{
          boxShadow: '0 0 20px #00FFFF, 0 0 40px #00FFFF, 0 0 60px #00FFFF',
        }}
      ></div>
      
      {/* アニメーション用のパルス効果 */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 animate-pulse"
        style={{
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }}
      ></div>
    </div>
  );
}

