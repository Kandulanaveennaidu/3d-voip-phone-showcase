import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import useStore from '../store/useStore'

export default function useScrollAnimation() {
    const containerRef = useRef(null)
    const setScrollProgress = useStore((s) => s.setScrollProgress)
    const setCurrentSection = useStore((s) => s.setCurrentSection)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = Math.min(scrollTop / docHeight, 1)
            setScrollProgress(progress)

            const sectionCount = 10
            const section = Math.min(Math.floor(progress * sectionCount), sectionCount - 1)
            setCurrentSection(section)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [setScrollProgress, setCurrentSection])

    return containerRef
}
