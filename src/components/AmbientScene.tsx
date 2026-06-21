"use client";

import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function useIsDark() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const read = () =>
      setIsDark(document.documentElement.dataset.theme === "dark");
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return isDark;
}

function useMouseParallax(factor = 0.15) {
  const { camera } = useThree();
  const target = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    target.current.x = state.pointer.x * factor;
    target.current.y = state.pointer.y * factor;
    camera.position.x += (target.current.x - camera.position.x) * 0.04;
    camera.position.y += (target.current.y - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
}

function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const nodeCount = 36;

  const { nodes, linePositions } = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 2.5;
      nodes.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta) * 0.6,
          r * Math.cos(phi) * 0.5
        )
      );
    }
    const linePositions: number[] = [];
    nodes.forEach((node, i) => {
      nodes.forEach((other, j) => {
        if (i < j && node.distanceTo(other) < 2.8) {
          linePositions.push(node.x, node.y, node.z, other.x, other.y, other.z);
        }
      });
    });
    return { nodes, linePositions };
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.025;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <Float key={i} speed={1} floatIntensity={0.2}>
          <mesh position={pos}>
            <sphereGeometry args={[0.035, 8, 8]} />
            <meshBasicMaterial color="#0d9488" transparent opacity={0.7} />
          </mesh>
        </Float>
      ))}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[new Float32Array(linePositions), 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#0d9488" transparent opacity={0.22} />
      </lineSegments>
    </group>
  );
}

function BackgroundOrb({ isDark }: { isDark: boolean }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.06;
    ref.current.rotation.y = state.clock.elapsedTime * 0.08;
  });

  // Light mode keeps the original indigo; dark mode uses a warm amber tone.
  const color = isDark ? "#f59e0b" : "#6366f1";
  const emissive = isDark ? "#b45309" : "#4338ca";

  return (
    <Float speed={0.8} floatIntensity={0.3}>
      <mesh ref={ref} position={[5, 0.5, -2]} scale={3.5}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={isDark ? 0.35 : 0.25}
          roughness={0.4}
          metalness={0.6}
          distort={0.2}
          speed={1.5}
          wireframe
          transparent
          opacity={isDark ? 0.4 : 0.32}
        />
      </mesh>
    </Float>
  );
}

function Scene({ isDark }: { isDark: boolean }) {
  useMouseParallax(0.4);
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#2dd4bf" />
      <NeuralNetwork />
      <BackgroundOrb isDark={isDark} />
      <Sparkles count={60} scale={16} size={2} speed={0.18} color="#2dd4bf" opacity={0.55} />
      <Sparkles count={30} scale={12} size={1.4} speed={0.12} color="#818cf8" opacity={0.4} />
    </>
  );
}

export default function AmbientScene() {
  const isDark = useIsDark();
  return (
    <div className="ambient-scene-wrap" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene isDark={isDark} />
        </Suspense>
      </Canvas>
    </div>
  );
}
