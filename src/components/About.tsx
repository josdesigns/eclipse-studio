"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVanta } from "../hooks/useVanta";
import SectionDivider from "../app/common/SectionDivider";
import { Rocket, Cpu, Users, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const vantaRef = useVanta({
    midtoneColor: 0x2b6df6,
    speed: 0.9,
    zoom: 1.02,
  });

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-intro",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" }
      );

      gsap.utils.toArray(".about-card").forEach((el: any, i: number) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.12 * i,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SectionDivider />
      <section
        ref={vantaRef}
        id="about"
        className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden px-6 py-24"
        aria-label="About"
      >
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
        <div ref={containerRef} className="relative z-20 max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-orbitron mb-6 text-center">ABOUT</h2>

          <p className="about-intro max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed text-center mb-12">
            ECLIPSE STUDIO is a creative technology agency founded in 2024, based in Tokyo. <br />
            We turn complex ideas into beautiful interactive experiences, specializing in interface design, motion systems, and data-driven visuals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="about-card bg-white/6 backdrop-blur-md rounded-2xl p-6 border border-white/6 text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#1e40af] to-[#06b6d4]">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Mission</h3>
                  <p className="text-sm text-gray-300 mt-2">
                    Design interfaces and systems that elevate human experience and clarify complex data.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-card bg-white/6 backdrop-blur-md rounded-2xl p-6 border border-white/6 text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#1e40af] to-[#06b6d4]">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Expertise</h3>
                  <p className="text-sm text-gray-300 mt-2">
                    UI/UX, WebGL/Three.js, GSAP motion, AI-assisted visuals, and data-driven design systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-card bg-white/6 backdrop-blur-md rounded-2xl p-6 border border-white/6 text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#1e40af] to-[#06b6d4]">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Approach</h3>
                  <p className="text-sm text-gray-300 mt-2">
                    Iterative prototyping, measurable outcomes, and aesthetic consistency across interaction states.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-card bg-white/6 backdrop-blur-md rounded-2xl p-6 border border-white/6 text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#1e40af] to-[#06b6d4]">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Studio</h3>
                  <p className="text-sm text-gray-300 mt-2">
                    Remote-first team based in Tokyo. We collaborate with brands worldwide to ship elegant digital products.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <LinkButton />
          </div>
        </div>
      </section>
      <SectionDivider />
    </>
  );
}

function LinkButton() {
  return (
    <a
      href="/works"
      className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white font-medium shadow hover:shadow-lg transition"
    >
      View Our Work
    </a>
  );
}