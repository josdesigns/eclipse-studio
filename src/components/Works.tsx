"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import * as THREE from "three";
import { Work } from "../types/works";
import SectionDivider from "../app/common/SectionDivider";

const worksData: Work[] = [
  {
    slug: "holographic-interface",
    title: "Holographic Interface",
    subtitle: "Interactive holographic UI concept",
    image: "/images/works/work-holographic.jpg",
    description: "Futuristic holographic interface combining neon panels and floating widgets.",
    roles: ["UI/UX", "3D Motion"],
    tools: ["Three.js", "GSAP"]
  },
  {
    slug: "cyber-portraits",
    title: "Cyber Portraits",
    subtitle: "Stylized cybernetic human portrait series",
    image: "/images/works/work-cyber-portraits.jpg",
    description: "Portraits fused with circuitry, neon tattoos and reflective metallic textures.",
    roles: ["Concept Art", "Retouch"],
    tools: ["Photoshop", "AI"]
  },
  {
    slug: "ai-visual-mapping",
    title: "AI Visual Mapping",
    subtitle: "Data-driven visual network mapping",
    image: "/images/works/work-ai-mapping.jpg",
    description: "Abstract visualization of neural networks and data flows in 3D space.",
    roles: ["Data Viz", "Animation"],
    tools: ["D3.js", "Three.js"]
  },
  {
    slug: "quantum-ui-concept",
    title: "Quantum UI Concept",
    subtitle: "UI concept for quantum systems dashboard",
    image: "/images/works/work-quantum.jpg",
    description: "Glass-like panels, particle trails and iridescent reflections for control UIs.",
    roles: ["Product Design", "Prototyping"],
    tools: ["Figma", "Framer"]
  },
];

export default function Works() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadVanta = async () => {
      const VANTA = await import("vanta/dist/vanta.globe.min.js");
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
          color2: 0x00ffff,
          backgroundColor: 0x0a0a0a,
          size: 1.0,
          speed: 1.0,
        });
        setVantaEffect(effect);
      }
    };
    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <section id="works" ref={containerRef} className="relative py-24 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-orbitron mb-14 text-center text-white tracking-wide">WORKS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {worksData.map((w) => (
              <Link key={w.slug} href={`/works/${w.slug}`} className="group block rounded-2xl overflow-hidden border border-gray-800">
                <div className="relative h-56 bg-gray-900">
                  <img src={w.image} alt={w.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-80"></div>
                  <div className="absolute left-4 bottom-4 z-10">
                    <h3 className="text-xl text-white font-orbitron">{w.title}</h3>
                    <p className="text-sm text-white">{w.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider />
    </>
  );
}