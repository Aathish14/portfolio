"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function PlaceholderOrb() {
  const meshRef = useRef(null);

  useFrame(() => {
    if (meshRef.current) {
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!prefersReducedMotion) {
        meshRef.current.rotation.y += 0.005;
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial
        color="#00e5ff"
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  );
}

export default function HeroScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div style={{ width: "100%", height: "100%" }} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5] }}
        dpr={[1, 2]}
        style={{ width: "100%", height: "100%" }}
        aria-hidden="true"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <PlaceholderOrb />
      </Canvas>
    </div>
  );
}
