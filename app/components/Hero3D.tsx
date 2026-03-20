"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  // Generate particles
  const positions = useMemo(() => {
    const arr = new Float32Array(9000);
    for (let i = 0; i < 9000; i++) {
      arr[i] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    // Smooth rotation
    ref.current.rotation.y += 0.0007;
    ref.current.rotation.x += 0.0003;

    // Floating motion
    ref.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.3) * 0.1;

    // Mouse interaction (parallax)
    ref.current.rotation.y += mouse.x * 0.002;
    ref.current.rotation.x += mouse.y * 0.002;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.004}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
        <color attach="background" args={["#000000"]} />
        <Particles />
      </Canvas>

      {/* Gradient Glow Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-purple-600/10 blur-2xl" />

      {/* Radial Glow Center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,115,0,0.15),transparent_70%)]" />
    </div>
  );
}