import { useState, useEffect } from 'react'

export default function useMouseParallax(strength = 0.05) {
    const [mouse, setMouse] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMove = (e) => {
            setMouse({
                x: (e.clientX / window.innerWidth - 0.5) * 2 * strength,
                y: (e.clientY / window.innerHeight - 0.5) * 2 * strength,
            })
        }
        window.addEventListener('mousemove', handleMove, { passive: true })
        return () => window.removeEventListener('mousemove', handleMove)
    }, [strength])

    return mouse
}
