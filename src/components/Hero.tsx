"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import * as THREE from "three";
import SectionDivider from "../app/common/SectionDivider";

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const titleMobileRef = useRef<HTMLHeadingElement | null>(null);
  const ctaContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mounted = true;
    const loadVanta = async () => {
      const VANTA = await import("vanta/dist/vanta.net.min.js");
      if (mounted && !vantaEffect && containerRef.current) {
        const effect = VANTA.default({
          el: containerRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x8a2be2,
          backgroundColor: 0x0d0d12,
          points: 14.0,
          maxDistance: 22.0,
        });
        setVantaEffect(effect);
      }
    };
    loadVanta();

    return () => {
      mounted = false;
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  // GSAP アニメーション
  useEffect(() => {
    if (!ctaContainerRef.current || !scrollRef.current) return;

    // デスクトップ用タイトルアニメーション
    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll(".char");
      if (chars.length > 0) {
        gsap.from(chars, {
          opacity: 0,
          y: 50,
          rotationX: -90,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.06,
        });
      }
    }

    // モバイル用タイトルアニメーション
    if (titleMobileRef.current) {
      gsap.from(titleMobileRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
    }

    // サブテキスト
    gsap.from(".hero-sub", {
      opacity: 0,
      y: 24,
      duration: 1,
      delay: 1.2,
      ease: "power3.out",
    });

    // CTAボタンコンテナ
    gsap.from(ctaContainerRef.current, {
      opacity: 0,
      y: 30,
      duration: 1.2,
      delay: 1.6,
      ease: "power3.out",
    });

    // スクロール表示
    gsap.from(scrollRef.current, {
      opacity: 0,
      y: 10,
      duration: 1.2,
      delay: 2.0,
      ease: "power2.out",
    });
  }, []);

  const splitText = (text: string) =>
    text.split("").map((char, i) => (
      <span key={i} className="char inline-block" style={{ display: "inline-block" }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <>
      <section
        ref={containerRef}
        className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
        aria-label="Hero"
      >
        <div className="z-10 text-center px-6">
          {/* モバイル用タイトル */}
          <h1
            ref={titleMobileRef}
            className="md:hidden text-6xl font-orbitron text-white leading-tight"
          >
            ECLIPSE <br /> STUDIO
          </h1>

          {/* デスクトップ用タイトル */}
          <h1
            ref={titleRef}
            className="hidden md:block text-5xl md:text-7xl lg:text-8xl font-orbitron text-white leading-tight"
          >
            {splitText("ECLIPSE STUDIO")}
          </h1>

          <p className="hero-sub mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
            We craft immersive digital experiences — blending design, technology, and storytelling.
          </p>

          <div
            ref={ctaContainerRef}
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="#works"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#6D28D9] to-[#06B6D4] text-white font-medium shadow-lg hover:scale-[1.03] transition-transform duration-300"
            >
              Explore Our Works
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#6D28D9] to-[#06B6D4] text-white/90 hover:scale-[1.03] transition duration-300"
            >
              Start a Project
            </a>
          </div>

          {/* Scroll down */}
          <div
            ref={scrollRef}
            className="mt-10 text-white text-sm tracking-widest animate-bounce"
          >
            SCROLL ↓
          </div>
        </div>
      </section>
      <SectionDivider />
    </>
  );
}