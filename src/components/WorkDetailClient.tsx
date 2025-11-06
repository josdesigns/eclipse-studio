"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import * as THREE from "three";
import { ArrowLeft } from "lucide-react";
import { gsap } from "gsap";
import { Work } from "../types/works";
import Footer from "../components/Footer";
import SectionDivider from "../app/common/SectionDivider";

export default function WorkDetailClient({ work }: { work: Work }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const vantaRef = useRef<any>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const metaRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    // Vantaエフェクトの初期化 - クリーンアップしてから再初期化
    const initVanta = async () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }

      if (ref.current && typeof window !== "undefined") {
        const NET = await import("vanta/dist/vanta.net.min.js");
        vantaRef.current = (NET.default as any)({
          el: ref.current,
          THREE,
          color: 0x8a2be2,
          backgroundColor: 0x050507,
          points: 12.0,
          maxDistance: 20.0
        });
      }
    };

    initVanta();

    // GSAPアニメーション
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    }
    if (metaRef.current) {
      gsap.fromTo(
        metaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power2.out" }
      );
    }

    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }
    };
  }, [work.slug]);

  return (
    <main ref={ref} className="min-h-screen relative text-white">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 max-w-5xl mx-auto px-6 py-24">
        {/* 戻るボタン */}
        <Link
          href="/#works"
          className="inline-flex items-center gap-2 mb-8 text-gray-300 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-inter">Back to Top</span>
        </Link>
        
        <h1 className="work-title text-4xl md:text-6xl font-orbitron mb-4">{work.title}</h1>
        <p className="work-meta text-gray-300 mb-6">{work.subtitle}</p>
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="flex-1">
            <img src={work.image} alt={work.title} className="w-full rounded-lg mb-6 object-cover" />
            <p className="text-gray-300">{work.description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {work.roles?.map((r) => (
                <span key={r} className="px-3 py-1 border rounded-full text-sm text-gray-200 border-gray-700">{r}</span>
              ))}
              {work.tools?.map((t) => (
                <span key={t} className="px-3 py-1 border rounded-full text-sm text-gray-200 border-gray-700">{t}</span>
              ))}
            </div>
          </div>

          <aside className="w-full md:w-80">
            <h4 className="text-sm text-gray-400 mb-3">Gallery</h4>
            <div className="grid gap-3">
              {work.gallery?.map((g) => (
                <img key={g} src={g} alt="" className="w-full h-28 object-cover rounded-md" />
              ))}
            </div>
          </aside>
        </div>
      </div>
      <SectionDivider />
      <Footer />
    </main>
  );
}