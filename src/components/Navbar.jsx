import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../data/portfolioData'
import { useScrollProgress } from '../hooks/useHooks'

export default function Navbar({ theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { scrollProgress } = useScrollProgress()

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', fn, { passive: true })
        return () => window.removeEventListener('scroll', fn)
    }, [])

    const scrollTo = (href) => {
        setMenuOpen(false)
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            {/* Progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left"
                style={{
                    background: 'linear-gradient(90deg,#3b82f6,#8b5cf6,#06b6d4)',
                    scaleX: scrollProgress,
                    transformOrigin: '0%',
                }}
            />

            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'nav-glass shadow-xl' : ''}`}
            >
                <div className="container flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2.5 group">
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black text-white"
                            style={{ background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)' }}
                        >N</div>
                        <span className="font-bold text-lg gradient-text">Nisarg</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-7">
                        {NAV_LINKS.map(link => (
                            <button
                                key={link.label}
                                onClick={() => scrollTo(link.href)}
                                className="text-sm font-medium transition-colors duration-200 relative group"
                                style={{ color: 'var(--muted)' }}
                                onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                            >
                                {link.label}
                                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                            </button>
                        ))}
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className="w-9 h-9 glass rounded-xl flex items-center justify-center text-base transition-transform hover:scale-110"
                            title="Toggle theme"
                        >
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>
                        <button
                            onClick={() => scrollTo('#contact')}
                            className="hidden md:block btn-primary text-sm py-2 px-5 rounded-xl"
                        >
                            <span>Hire Me</span>
                        </button>
                        {/* Hamburger */}
                        <button
                            className="md:hidden flex flex-col gap-1 p-2"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {[0, 1, 2].map(i => (
                                <motion.span
                                    key={i}
                                    className="block w-5 h-0.5 rounded-full"
                                    style={{ background: 'var(--muted)' }}
                                    animate={i === 0 ? { rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }
                                        : i === 1 ? { opacity: menuOpen ? 0 : 1 }
                                            : { rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
                                />
                            ))}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="md:hidden glass-card mx-4 mb-3 p-4"
                        >
                            {NAV_LINKS.map((link, i) => (
                                <motion.button
                                    key={link.label}
                                    onClick={() => scrollTo(link.href)}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="block w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
                                    style={{ color: 'var(--muted)' }}
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                            <button
                                onClick={() => scrollTo('#contact')}
                                className="mt-2 w-full btn-primary text-sm py-2.5 rounded-xl"
                            >
                                <span>Hire Me</span>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    )
}
