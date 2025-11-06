"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GlowLine() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      lineRef.current,
      { height: "0%" },
      {
        height: "100%",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="fixed left-1/2 top-0 -translate-x-1/2 w-[2px] z-50">
      <div
        ref={lineRef}
        className="w-full bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent shadow-[0_0_20px_rgba(0,200,255,0.8)]"
      ></div>
    </div>
  );
}