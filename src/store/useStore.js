import { create } from 'zustand'

const useStore = create((set) => ({
    // Loading
    isLoaded: false,
    loadingProgress: 0,
    setLoaded: () => set({ isLoaded: true }),
    setLoadingProgress: (p) => set({ loadingProgress: p }),

    // Scroll
    scrollProgress: 0,
    currentSection: 0,
    setScrollProgress: (p) => set({ scrollProgress: p }),
    setCurrentSection: (s) => set({ currentSection: s }),

    // Camera
    cameraTarget: [0, 0, 0],
    cameraPosition: [0, 2, 12],
    setCameraTarget: (t) => set({ cameraTarget: t }),
    setCameraPosition: (p) => set({ cameraPosition: p }),

    // Interaction
    hoveredObject: null,
    activeSection: 'hero',
    cursorVariant: 'default',
    setHoveredObject: (o) => set({ hoveredObject: o }),
    setActiveSection: (s) => set({ activeSection: s }),
    setCursorVariant: (v) => set({ cursorVariant: v }),

    // Audio
    audioEnabled: false,
    toggleAudio: () => set((s) => ({ audioEnabled: !s.audioEnabled })),

    // Theme
    colorScheme: 'dark',
}))

export default useStore
