export const FogShader = {
  uniforms: {
    u_time: { value: 0 },
    u_mouse: { value: [0.5, 0.5] },
    u_resolution: { value: [1, 1] },
    u_darkMode: { value: 0.0 }, // 0 = light, 1 = dark

    // fog colors (set from CSS via JS)
    u_lightA: { value: [0, 0, 0] }, // fallback
    u_lightB: { value: [1, 1, 1] },   // fallback
    u_darkA:  { value: [1, 1, 1] }, // fallback
    u_darkB:  { value: [0, 0, 0] }, // fallback
  },

  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  fragmentShader: /* glsl */ `
    varying vec2 vUv;
    uniform float u_time;
    uniform vec2 u_mouse;
    uniform float u_darkMode;

    uniform vec3 u_lightA;
    uniform vec3 u_lightB;
    uniform vec3 u_darkA;
    uniform vec3 u_darkB;

    // -----------------------------
    // Simplex Noise
    // -----------------------------
    vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
    vec3 permute(vec3 x){ return mod289(((x*34.0)+1.0)*x); }

    float snoise(vec2 v){
      const vec4 C = vec4(
        0.211324865405187,
        0.366025403784439,
      -0.577350269189626,
        0.024390243902439
      );

      vec2 i = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);

      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);

      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;

      i = mod289(i);
      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                    + i.x + vec3(0.0, i1.x, 1.0));

      vec3 m = max(0.5 - vec3(
        dot(x0,x0),
        dot(x12.xy,x12.xy),
        dot(x12.zw,x12.zw)
      ), 0.0);
      m = m*m; m = m*m;

      vec3 x = 2.0 * fract(p * 0.024390243902439) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;

      m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

      vec3 g;
      g.x = a0.x * x0.x + h.x * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;

      return 130.0 * dot(m, g);
    }

    void main() {
      vec2 uv = vUv;

      vec2 center = vec2(0.5, 0.5);
      center += (u_mouse - 0.5) * 0.1;
      center.x += sin(u_time * 0.8) * 0.05 + sin(u_time * 0.23) * 0.02;
      center.y += cos(u_time * 0.6) * 0.05 + cos(u_time * 0.17) * 0.02;

      float dist = distance(uv, center);
      float gradient = smoothstep(0.0, 0.65, dist);

      float warp = snoise(uv * 4.0 + u_time * 0.2);
      gradient += warp * 0.04;

      vec3 lightColor = mix(u_lightA, u_lightB, gradient);
      vec3 darkColor  = mix(u_darkA,  u_darkB,  gradient);

      vec3 finalColor = mix(lightColor, darkColor, u_darkMode);
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

// ===============================
// CSS → Shader color bridge
// ===============================

function cssVarToVec3(name: string): [number, number, number] {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();

  // Create a temp element to force computed rgb()
  const el = document.createElement("div");
  el.style.color = value;
  document.body.appendChild(el);

  const rgb = getComputedStyle(el).color;
  document.body.removeChild(el);

  const [r, g, b] = rgb
    .match(/\d+/g)!
    .map(v => Number(v) / 255);

  return [r, g, b];
}

export function syncFogColors(shader: typeof FogShader, dark: boolean) {
  if (dark) {
    shader.uniforms.u_darkA.value = cssVarToVec3("--fog-a");
    shader.uniforms.u_darkB.value = cssVarToVec3("--fog-b");
  } else {
    shader.uniforms.u_lightA.value = cssVarToVec3("--fog-a");
    shader.uniforms.u_lightB.value = cssVarToVec3("--fog-b");
  }
}