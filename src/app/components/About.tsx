"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVanta } from "@/hooks/useVanta";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const vantaRef = useVanta({
    midtoneColor: 0x6699ff,
    speed: 0.8,
    zoom: 1.0,
  });

  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={vantaRef}
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen text-center text-white overflow-hidden"
    >
      {/* 背景にオーバーレイをかけて文字を見やすく */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 max-w-2xl px-6">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-6 tracking-wide"
        >
          ABOUT
        </h2>
        <p
          ref={textRef}
          className="text-lg md:text-xl leading-relaxed text-gray-300"
        >
          ECLIPSE STUDIO is a conceptual design lab exploring the boundary between light and shadow.<br />
          We combine creative code, visual motion, and interactive art to create futuristic digital experiences.
        </p>
      </div>
    </section>
  );
}