"use client";

import { useFrame, extend, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { ShaderMaterial } from "three";
import { FogShader } from "./FogShader";

extend({ ShaderMaterial });

export default function FogBackground() {
  const materialRef = useRef<ShaderMaterial>(null);
  const { viewport } = useThree();

  // Track mouse position
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!materialRef.current) return;
      materialRef.current.uniforms.u_mouse.value = [
        e.clientX / window.innerWidth,
        1.0 - e.clientY / window.innerHeight, // flip Y
      ];
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // realtime clock
  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value += delta;
      materialRef.current.uniforms.u_resolution.value = [
        viewport.width,
        viewport.height,
      ];
    }
  });

  return (
    <mesh scale={[viewport.width * 0.95, viewport.height * 0.93, 1]}>
      {/* A PERFECT SQUARE PLANE THAT FILLS ENTIRE SCREEN */}
      <planeGeometry args={[1, 1]} />

      <shaderMaterial
        ref={materialRef}
        uniforms={FogShader.uniforms}
        vertexShader={FogShader.vertexShader}
        fragmentShader={FogShader.fragmentShader}
      />
    </mesh>
  );
}