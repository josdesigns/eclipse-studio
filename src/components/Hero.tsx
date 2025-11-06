"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import * as THREE from "three";
import SectionDivider from "../app/common/SectionDivider";

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
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

  // GSAP アニメーション - 一文字ずつ浮き上がる
  useEffect(() => {
    // タイトルの各文字をアニメーション
    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll(".char");
      gsap.from(chars, {
        opacity: 0,
        y: 50,
        rotationX: -90,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.09, // 文字ごとの遅延
      });
    }

    // サブタイトルのアニメーション
    gsap.from(".subtitle", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 1.5, // タイトルアニメーション後に表示
      ease: "power3.out",
    });
  }, []);

  // テキストを一文字ずつspanで囲む関数
  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="char inline-block"
        style={{ display: "inline-block" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <>
      <section
        ref={containerRef}
        className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="z-10 text-center">
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl font-orbitron text-white"
          >
            {splitText("ECLIPSE STUDIO")}
          </h1>
          <p className="subtitle mt-6 text-2xl md:text-3xl text-white">
            FUTURE DESIGN AGENCY
          </p>
        </div>
      </section>
      <SectionDivider />
    </>
  );
}