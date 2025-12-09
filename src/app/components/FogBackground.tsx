"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { FogShader } from "./FogShader";

export default function FogBackground({ dark }: { dark: boolean }) {
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const { viewport } = useThree();

  // animate dark/light transitions
  useEffect(() => {
    if (!materialRef.current) return;

    gsap.to(materialRef.current.uniforms.u_darkMode, {
      value: dark ? 1 : 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  }, [dark]);

  // animate time uniform
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = clock.getElapsedTime();
    }
  });
  return (
    <mesh scale={[viewport.width * 1, viewport.height * 1, 1]}>
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