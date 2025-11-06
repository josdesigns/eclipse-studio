"use client";

export default function SectionDivider() {
  return (
    <div className="relative w-full h-1 overflow-hidden bg-bgDark">
      {/* メインの蛍光ライン（シアン） */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent opacity-90"></div>
      
      {/* グロー効果（シアン） */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 blur-md"
        style={{
          boxShadow: '0 0 20px #00FFFF, 0 0 40px #00FFFF, 0 0 60px #00FFFF',
        }}
      ></div>
      
      {/* パルス効果（プライマリカラー） */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"
        style={{
          animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }}
      ></div>
      
      {/* アニメーション用の走る光 */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
        style={{
          width: '30%',
          animation: 'slide 4s linear infinite',
        }}
      ></div>
    </div>
  );
}

