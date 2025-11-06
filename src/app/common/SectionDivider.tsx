"use client";

export default function SectionDivider() {
  return (
    <div className="relative w-full h-px my-0">
      {/* メインの蛍光ライン */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      {/* グロー効果（上下に広がる） */}
      <div 
        className="absolute left-0 right-0 h-8 -top-4 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-xl"
      ></div>
      
      {/* アニメーション用のパルス効果 */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"
      ></div>
      
      {/* 追加のグロー（より強い発光） */}
      <div 
        className="absolute left-0 right-0 h-16 -top-8"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.3) 0%, transparent 70%)',
        }}
      ></div>
    </div>
  );
}