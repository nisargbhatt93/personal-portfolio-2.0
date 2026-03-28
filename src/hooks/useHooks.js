import { useState, useEffect, useRef, useCallback } from 'react'

export function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [mouseNormalized, setMouseNormalized] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
            setMouseNormalized({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return { mousePosition, mouseNormalized }
}

export function useScrollProgress() {
    const [scrollY, setScrollY] = useState(0)
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight
            setScrollY(currentY)
            setScrollProgress(maxScroll > 0 ? currentY / maxScroll : 0)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return { scrollY, scrollProgress }
}

export function useIntersectionObserver(options = {}) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
                observer.unobserve(entry.target)
            }
        }, { threshold: 0.1, ...options })

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return [ref, isVisible]
}

export function useTilt() {
    const ref = useRef(null)

    const handleMouseMove = useCallback((e) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        ref.current.style.transform = `perspective(800px) rotateY(${x * 15}deg) rotateX(${y * -15}deg) translateZ(10px)`
    }, [])

    const handleMouseLeave = useCallback(() => {
        if (!ref.current) return
        ref.current.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
    }, [])

    useEffect(() => {
        const el = ref.current
        if (!el) return
        el.addEventListener('mousemove', handleMouseMove)
        el.addEventListener('mouseleave', handleMouseLeave)
        return () => {
            el.removeEventListener('mousemove', handleMouseMove)
            el.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [handleMouseMove, handleMouseLeave])

    return ref
}
