"use client";

import { useFrame, extend } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { ShaderMaterial } from "three";
import { FogShader } from "./FogShader";

extend({ ShaderMaterial });

export default function FogBackground() {
  const materialRef = useRef<ShaderMaterial>(null);

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
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={FogShader.uniforms}
        vertexShader={FogShader.vertexShader}
        fragmentShader={FogShader.fragmentShader}
      />
    </mesh>
  );
}