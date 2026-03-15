// Vertex shader for gradient background
export const gradientVertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

// Fragment shader for animated gradient background
export const gradientFragmentShader = `
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
varying vec2 vUv;

void main() {
  float t = uTime * 0.15;
  vec2 uv = vUv;
  
  float noise = sin(uv.x * 3.0 + t) * cos(uv.y * 2.0 - t * 0.5) * 0.5 + 0.5;
  float noise2 = cos(uv.x * 2.0 - t * 0.7) * sin(uv.y * 4.0 + t * 0.3) * 0.5 + 0.5;
  
  vec3 color = mix(uColor1, uColor2, noise);
  color = mix(color, uColor3, noise2 * 0.4);
  
  gl_FragColor = vec4(color, 1.0);
}
`

// Holographic shader
export const holoVertexShader = `
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
void main() {
  vUv = uv;
  vPosition = position;
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

export const holoFragmentShader = `
uniform float uTime;
uniform float uOpacity;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

void main() {
  float scanline = sin(vUv.y * 120.0 + uTime * 2.0) * 0.03;
  float flicker = sin(uTime * 12.0) * 0.015 + 0.985;
  
  float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
  
  vec3 color1 = vec3(0.0, 0.94, 1.0);
  vec3 color2 = vec3(0.42, 0.39, 1.0);
  vec3 color = mix(color1, color2, fresnel);
  
  // Mostly transparent centre, brighter at edges (fresnel)
  float alpha = (0.06 + fresnel * 0.35 + scanline) * flicker * uOpacity;
  
  gl_FragColor = vec4(color, alpha);
}
`

// Particle shader
export const particleVertexShader = `
uniform float uTime;
uniform float uSize;
attribute float aScale;
attribute float aRandomness;
varying float vAlpha;

void main() {
  vec3 pos = position;
  pos.y += sin(uTime * 0.5 + aRandomness * 6.28) * 0.3;
  pos.x += cos(uTime * 0.3 + aRandomness * 6.28) * 0.2;
  
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = uSize * aScale * (200.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
  
  vAlpha = 0.6 + sin(uTime + aRandomness * 10.0) * 0.4;
}
`

export const particleFragmentShader = `
uniform vec3 uColor;
varying float vAlpha;

void main() {
  float dist = length(gl_PointCoord - vec2(0.5));
  if (dist > 0.5) discard;
  
  float alpha = smoothstep(0.5, 0.0, dist) * vAlpha;
  gl_FragColor = vec4(uColor, alpha);
}
`

// Energy beam shader
export const beamVertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

export const beamFragmentShader = `
uniform float uTime;
uniform vec3 uColor;
varying vec2 vUv;

void main() {
  float glow = sin(vUv.x * 20.0 - uTime * 5.0) * 0.5 + 0.5;
  float edge = smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.7, vUv.y);
  float alpha = glow * edge * 0.8;
  
  gl_FragColor = vec4(uColor, alpha);
}
`
