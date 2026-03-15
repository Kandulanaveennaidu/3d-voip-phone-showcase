import * as THREE from 'three'

export function lerp(a, b, t) {
    return a + (b - a) * t
}

export function mapRange(value, inMin, inMax, outMin, outMax) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

export function randomInRange(min, max) {
    return Math.random() * (max - min) + min
}

export function generateFloatingPositions(count, spread = 10, heightSpread = 5) {
    const positions = []
    for (let i = 0; i < count; i++) {
        positions.push([
            (Math.random() - 0.5) * spread,
            (Math.random() - 0.5) * heightSpread,
            (Math.random() - 0.5) * spread,
        ])
    }
    return positions
}

export function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export const SECTION_CONFIG = [
    { name: 'hero', camera: [0, 1.5, 8], target: [0, 0, 0], fog: 0.01 },
    { name: 'about', camera: [-3, 2, 7], target: [0, 0, 0], fog: 0.015 },
    { name: 'features', camera: [3, 2.5, 6], target: [0, 0, 0], fog: 0.015 },
    { name: 'technology', camera: [1, 3.5, 5], target: [0, 0, 0], fog: 0.02 },
    { name: 'showcase', camera: [4, 1, 4], target: [0, -0.5, 0], fog: 0.008 },
    { name: 'services', camera: [-2, 2, 7], target: [0, 0, 0], fog: 0.015 },
    { name: 'caseStudies', camera: [2, 3, 6], target: [0, 0, 0], fog: 0.02 },
    { name: 'pricing', camera: [0, 2, 8], target: [0, 0, 0], fog: 0.012 },
    { name: 'contact', camera: [-1, 3, 6], target: [0, 0, 0], fog: 0.02 },
    { name: 'footer', camera: [0, 5, 4], target: [0, 0, -2], fog: 0.025 },
]
