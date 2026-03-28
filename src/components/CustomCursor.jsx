import { useEffect, useRef, useState } from 'react'
import { useMousePosition } from '../hooks/useHooks'

export default function CustomCursor() {
    const dotRef = useRef(null)
    const ringRef = useRef(null)
    const [isHovering, setIsHovering] = useState(false)
    const { mousePosition } = useMousePosition()

    const ringPos = useRef({ x: 0, y: 0 })
    const rafRef = useRef(null)

    useEffect(() => {
        if (dotRef.current) {
            dotRef.current.style.left = mousePosition.x + 'px'
            dotRef.current.style.top = mousePosition.y + 'px'
        }
    }, [mousePosition])

    useEffect(() => {
        const animate = () => {
            ringPos.current.x += (mousePosition.x - ringPos.current.x) * 0.12
            ringPos.current.y += (mousePosition.y - ringPos.current.y) * 0.12
            if (ringRef.current) {
                ringRef.current.style.left = ringPos.current.x + 'px'
                ringRef.current.style.top = ringPos.current.y + 'px'
            }
            rafRef.current = requestAnimationFrame(animate)
        }
        rafRef.current = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(rafRef.current)
    }, [mousePosition])

    useEffect(() => {
        const addHover = () => setIsHovering(true)
        const removeHover = () => setIsHovering(false)
        const interactives = document.querySelectorAll('a, button, [data-cursor-hover]')
        interactives.forEach(el => {
            el.addEventListener('mouseenter', addHover)
            el.addEventListener('mouseleave', removeHover)
        })

        const observer = new MutationObserver(() => {
            const newInteractives = document.querySelectorAll('a, button, [data-cursor-hover]')
            newInteractives.forEach(el => {
                el.addEventListener('mouseenter', addHover)
                el.addEventListener('mouseleave', removeHover)
            })
        })
        observer.observe(document.body, { childList: true, subtree: true })

        return () => {
            observer.disconnect()
            interactives.forEach(el => {
                el.removeEventListener('mouseenter', addHover)
                el.removeEventListener('mouseleave', removeHover)
            })
        }
    }, [])

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className={`cursor-ring ${isHovering ? 'hover' : ''}`} />
        </>
    )
}
