"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import FOG from "vanta/dist/vanta.fog.min.js";
import * as THREE from "three";

export default function Contact() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = FOG({
        el: vantaRef.current,
        THREE,
        highlightColor: 0x00ffff,
        midtoneColor: 0x8a2be2,
        lowlightColor: 0x000000,
        blurFactor: 0.6,
        zoom: 1.2,
      });
    }

    gsap.fromTo(
      ".contact-title",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    );
    gsap.fromTo(
      ".contact-form",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" }
    );

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <section
      id="contact"
      className="relative py-32 text-center text-white overflow-hidden"
      ref={vantaRef}
    >
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="contact-title text-5xl font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 font-bold mb-8">
          CONTACT
        </h2>
        <p className="text-gray-300 mb-10">
          ご質問やお仕事のご依頼など、お気軽にお問い合わせください。
        </p>

        <form className="contact-form flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-black/40 border border-gray-700 rounded-xl p-4 focus:outline-none focus:border-cyan-400 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-black/40 border border-gray-700 rounded-xl p-4 focus:outline-none focus:border-cyan-400 text-white"
          />
          <textarea
            rows={5}
            placeholder="Message"
            className="bg-black/40 border border-gray-700 rounded-xl p-4 focus:outline-none focus:border-cyan-400 text-white"
          ></textarea>
          <button
            type="submit"
            className="w-fit mx-auto px-10 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 font-bold hover:shadow-[0_0_20px_#8A2BE2] transition-all duration-300"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>

      {/* 発光ライン */}
      <div className="glow-line top-[10%]"></div>
      <div className="glow-line top-[80%]"></div>
    </section>
  );
}