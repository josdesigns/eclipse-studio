"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min.js";

export const useVanta = (options?: object) => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        FOG({
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
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return vantaRef;
};