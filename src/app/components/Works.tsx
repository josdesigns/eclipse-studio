"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const works = [
  { id: 1, title: "Holographic Interface", img: "/images/works1.jpg" },
  { id: 2, title: "Cyber Portraits", img: "/images/works2.jpg" },
  { id: 3, title: "AI Visual Mapping", img: "/images/works3.jpg" },
  { id: 4, title: "Quantum UI Concept", img: "/images/works4.jpg" },
];

export default function Works() {
  useEffect(() => {
    gsap.fromTo(
      ".work-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#works",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="works" className="relative py-32 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-orbitron font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-16">
          WORKS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {works.map((work) => (
            <div
              key={work.id}
              className="work-item group relative overflow-hidden rounded-2xl shadow-lg border border-gray-800 hover:border-purple-500 transition-all duration-500"
            >
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500"></div>
              <h3 className="absolute bottom-5 left-5 text-xl font-orbitron text-white tracking-wider">
                {work.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}