"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Palette, Code, Brain, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import SectionDivider from "../app/common/SectionDivider";

export default function Services() {
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
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x111111,
          shininess: 35.0,
          waveHeight: 15.0,
          waveSpeed: 0.8,
          zoom: 0.85,
          backgroundColor: 0x0a0a0a,
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

  const services = [
    {
      icon: <Palette size={40} />,
      title: "Branding & Strategy",
      desc: "Define brand essence and design strategies that support long-term growth.",
    },
    {
      icon: <Code size={40} />,
      title: "Web Design & Development",
      desc: "Build refined UI and robust development foundations to deliver value through web experiences.",
    },
    {
      icon: <Brain size={40} />,
      title: "AI Creative Solutions",
      desc: "Create next-gen creative with AI-powered image generation and automation.",
    },
    {
      icon: <Rocket size={40} />,
      title: "Marketing & Growth",
      desc: "Maximize brand awareness and results with data-driven marketing strategies.",
    },
  ];

  return (
    <>
      <section
        id="services"
        ref={containerRef}
        className="relative text-white py-24 overflow-hidden"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-orbitron mb-4 text-white tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            SERVICES
          </motion.h2>
          <motion.p
            className="text-gray-300 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We craft immersive digital experiences — blending design, technology, and storytelling.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="flex justify-center mb-4 text-blue-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider />
    </>
  );
}