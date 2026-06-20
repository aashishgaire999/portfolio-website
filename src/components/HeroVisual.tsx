"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function HeroOrb() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.12;
    ref.current.rotation.y = state.clock.elapsedTime * 0.18;
  });

  return (
    <Float speed={1.2} floatIntensity={0.4} rotationIntensity={0.2}>
      <mesh ref={ref} scale={2.2}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshDistortMaterial
          color="#2dd4bf"
          emissive="#0d9488"
          emissiveIntensity={0.45}
          roughness={0.35}
          metalness={0.5}
          distort={0.28}
          speed={2}
          wireframe
          transparent
          opacity={0.62}
        />
      </mesh>
    </Float>
  );
}

function HeroRing() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.08;
  });

  return (
    <mesh ref={ref} rotation={[Math.PI / 2.2, 0, 0]}>
      <torusGeometry args={[2.4, 0.015, 8, 64]} />
      <meshBasicMaterial color="#818cf8" transparent opacity={0.45} />
    </mesh>
  );
}

function HeroSceneContent() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#2dd4bf" />
      <pointLight position={[-3, -2, 2]} intensity={0.6} color="#818cf8" />
      <HeroOrb />
      <HeroRing />
    </>
  );
}

export default function HeroVisual() {
  return (
    <div className="hero-visual hidden lg:block" aria-hidden>
      <div className="hero-visual-glow" />
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <HeroSceneContent />
      </Canvas>
    </div>
  );
}
