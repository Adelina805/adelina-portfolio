export const FogShader = {
  uniforms: {
    u_time: { value: 0 },
    u_mouse: { value: [0.5, 0.5] },
    u_resolution: { value: [1, 1] },
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

    // ---- Simplex Noise (small utility for gentle warping) ----
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

      // -------------------------------------
      // 1. Radial gradient centered in middle
      // -------------------------------------
      vec2 center = vec2(0.5, 0.5);

      // Mouse gently shifts the center point
      center += (u_mouse - 0.5) * 0.05;

      float dist = distance(uv, center);

      // Pure static gradient base
      float gradient = smoothstep(0.0, 0.9, dist);

      // Main colors
      vec3 colorA = vec3(0.161, 0.365, 0.667);  // #295DAA
      vec3 colorB = vec3(1.0, 1.0, 1.0);        // #ffffff (swap for black in dark mode)

      // -------------------------------------
      // 2. Gentle motion via low-scale noise
      // -------------------------------------
      float n = snoise(uv * 2.0 + u_time * 0.05);
      gradient += n * 0.04; // VERY subtle warping

      // -------------------------------------
      // 3. Final color mix
      // -------------------------------------
      vec3 color = mix(colorA, colorB, gradient);

      gl_FragColor = vec4(color, 1.0);
    }
  `
};