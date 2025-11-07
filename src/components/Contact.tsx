"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionDivider from "../app/common/SectionDivider";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;
    const loadVanta = async () => {
      const VANTA = await import("vanta/dist/vanta.waves.min.js");
      if (!vantaEffect && containerRef.current) {
        const effect = VANTA.default({
          el: containerRef.current,
          THREE,
          mouseControls: false,
          touchControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff00ff,
          color2: 0x00ffff,
          shininess: 90.0,
          waveHeight: 30.0,
          waveSpeed: 0.8,
          zoom: 1.2,
          backgroundColor: 0x000000,
        });
        setVantaEffect(effect);
      }
    };
    loadVanta();

    return () => {
      mounted = false;
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.6,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="contact" className="relative min-h-screen text-white overflow-hidden px-6 flex flex-col justify-center items-center">
        <div ref={containerRef} className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
        <div className="relative z-20 max-w-xl w-full text-center">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-orbitron mb-14 text-white tracking-wide">
            CONTACT
          </h2>

          <form ref={formRef} className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition"
            />
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-700 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <SectionDivider />
    </>
  );
}