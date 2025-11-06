"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // GSAP初期化
  useEffect(() => {
    const header = headerRef.current;

    // ヘッダー出現アニメーション
    gsap.fromTo(
      header,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // 発光ラインアニメーション
    gsap.to(lineRef.current, {
      width: "100%",
      duration: 2.5,
      repeat: -1,
      ease: "power1.inOut",
      yoyo: true,
    });

    // スクロールで背景にブラーを追加
    const handleScroll = () => {
      if (!header) return;
      if (window.scrollY > 100) {
        header.classList.add("bg-dark/80", "backdrop-blur-md");
      } else {
        header.classList.remove("bg-dark/80", "backdrop-blur-md");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Works", href: "#works" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 text-white px-6 md:px-10 py-4 flex justify-between items-center transition-all duration-500"
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-lg md:text-xl font-orbitron tracking-widest text-primary hover:text-accent transition-colors"
      >
        ECLIPSE STUDIO
      </Link>

      {/* 発光ライン */}
      <div
        ref={lineRef}
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-primary via-accent to-primary opacity-60 glow-line"
      ></div>

      {/* --- PC Nav --- */}
      <nav className="hidden md:flex space-x-8 text-sm font-inter">
        {navItems.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="relative group"
          >
            <span className="group-hover:text-accent transition-colors">
              {label}
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      {/* --- ハンバーガー --- */}
      <button
        className="md:hidden relative w-8 h-8 flex flex-col justify-between items-center"
        onClick={toggleMenu}
      >
        <span
          className={`block w-full h-[2px] bg-white transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-[15px]" : ""
          }`}
        ></span>
        <span
          className={`block w-full h-[2px] bg-white transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-full h-[2px] bg-white transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-[15px]" : ""
          }`}
        ></span>
      </button>

      {/* --- モバイルメニュー --- */}
      <div
        className={`fixed top-0 right-0 z-1000 h-screen w-3/4 bg-dark/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 text-lg font-inter transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navItems.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-accent transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}