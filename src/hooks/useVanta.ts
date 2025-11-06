"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const useVanta = (options?: object) => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current && typeof window !== "undefined") {
      const loadVanta = async () => {
        const FOG = await import("vanta/dist/vanta.fog.min.js");
        const effect = FOG.default({
          el: vantaRef.current,
          THREE,
          highlightColor: 0xffffff,
          midtoneColor: 0x66ccff,
          lowlightColor: 0x000000,
          baseColor: 0x000010,
          blurFactor: 0.5,
          speed: 1.2,
          zoom: 0.8,
          ...options,
        });
        setVantaEffect(effect);
      };
      loadVanta();
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return vantaRef;
};