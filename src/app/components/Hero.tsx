"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import * as THREE from "three";

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // SSR対策：クライアント側でのみ import
    const loadVanta = async () => {
      const VANTA = await import("vanta/dist/vanta.net.min.js");
      if (!vantaEffect && containerRef.current) {
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
          backgroundColor: 0x0a0a0a,
          points: 15.0,
          maxDistance: 22.0,
        });
        setVantaEffect(effect);
      }
    };
    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  // GSAP アニメーション
  useEffect(() => {
    gsap.from(".fade-in", {
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="z-10 text-center">
        <h1 className="fade-in text-5xl md:text-7xl font-orbitron text-white">
          ECLIPSE STUDIO
        </h1>
        <p className="fade-in mt-4 text-xl md:text-2xl text-accent text-white">
          FUTURE DESIGN AGENCY
        </p>
        <button className="fade-in mt-8 px-6 py-3 bg-primary rounded-lg text-white hover:bg-accent transition-colors">
          Explore
        </button>
      </div>
    </section>
  );
}