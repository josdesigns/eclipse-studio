"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVanta } from "../hooks/useVanta";
import SectionDivider from "../app/common/SectionDivider";
import {
  Rocket,
  CircuitBoard,
  Users,
  Lightbulb,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const vantaRef = useVanta({
    midtoneColor: 0x2266ff,
    speed: 1.0,
    zoom: 1.0,
    shininess: 60,
  });

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fade-up").forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SectionDivider />
      <section
        ref={vantaRef}
        id="about"
        className="relative flex flex-col items-center justify-center min-h-screen text-center text-white overflow-hidden px-6 py-24"
      >
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div ref={sectionRef} className="relative z-20 max-w-6xl w-full">
          <h2 className="fade-up text-4xl md:text-5xl font-orbitron mb-14 text-center text-white tracking-wide">
            ABOUT US
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* --- Card 1 --- */}
            <div className="fade-up bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:scale-[1.03] hover:bg-white/20 transition-all duration-300">
              <div className="flex flex-col items-center gap-4">
                <Rocket className="w-10 h-10 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2 text-blue-300">
                  OUR MISSION
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed text-center">
                  We aim to bridge design and technology —  
                  creating visual experiences that inspire innovation and trust.
                </p>
              </div>
            </div>

            {/* --- Card 2 --- */}
            <div className="fade-up bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:scale-[1.03] hover:bg-white/20 transition-all duration-300">
              <div className="flex flex-col items-center gap-4">
                <CircuitBoard className="w-10 h-10 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2 text-blue-300">
                  TECHNOLOGY
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed text-center">
                  From AI to WebGL, our projects combine creative coding  
                  with next-gen interactivity for business and art.
                </p>
              </div>
            </div>

            {/* --- Card 3 --- */}
            <div className="fade-up bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:scale-[1.03] hover:bg-white/20 transition-all duration-300">
              <div className="flex flex-col items-center gap-4">
                <Lightbulb className="w-10 h-10 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2 text-blue-300">
                  CREATIVE APPROACH
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed text-center">
                  We design digital spaces that tell stories.  
                  Each project balances innovation, usability, and emotion.
                </p>
              </div>
            </div>

            {/* --- Card 4 --- */}
            <div className="fade-up bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:scale-[1.03] hover:bg-white/20 transition-all duration-300">
              <div className="flex flex-col items-center gap-4">
                <Users className="w-10 h-10 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2 text-blue-300">
                  OUR TEAM
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed text-center">
                  A global team of designers, developers, and creators  
                  working remotely — connecting vision with execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionDivider />
    </>
  );
}