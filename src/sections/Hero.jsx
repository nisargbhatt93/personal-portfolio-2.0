import { motion } from 'framer-motion'
import { Suspense, lazy, useState, useEffect } from 'react'

const HeroScene = lazy(() => import('../components/three/HeroScene'))

const CODE = [
    { t: 'const developer = {', c: '#e2e8f0' },
    { t: '  name: "Nisarg",', c: '#06b6d4' },
    { t: '  role: "Full-Stack Dev",', c: '#06b6d4' },
    { t: '  stack: ["React","Node"],', c: '#a78bfa' },
    { t: '  passion: "Building",', c: '#fbbf24' },
    { t: '  available: true', c: '#34d399' },
    { t: '}', c: '#e2e8f0' },
]

const SECTION_STYLE = {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
}

export default function Hero() {
    const [go, setGo] = useState(false)
    useEffect(() => { const t = setTimeout(() => setGo(true), 150); return () => clearTimeout(t) }, [])

    const list = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }
    const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }

    return (
        <section id="home" className="grid-bg" style={SECTION_STYLE}>
            {/* Ambient glow */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(59,130,246,0.07) 0%, transparent 70%)'
            }} />

            <div className="container" style={{ paddingTop: '7rem', paddingBottom: '5rem', width: '100%' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
                    className="hero-grid">
                    {/* ── Left ── */}
                    <motion.div variants={list} initial="hidden" animate={go ? 'show' : 'hidden'}
                        style={{ display: 'flex', flexDirection: 'column' }}>

                        {/* Badge */}
                        <motion.div variants={item} style={{ marginBottom: '1.5rem' }}>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.75rem',
                                fontWeight: 600, color: '#3b82f6',
                                background: 'rgba(59,130,246,0.08)',
                                border: '1px solid rgba(59,130,246,0.25)'
                            }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', animation: 'pulse 2s infinite' }} />
                                Available for hire
                            </span>
                        </motion.div>

                        {/* Greeting */}
                        <motion.p variants={item} style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>
                            👋 Hello, World!
                        </motion.p>

                        {/* Title */}
                        <motion.h1 variants={item} className="section-heading" style={{ marginBottom: '0.5rem' }}>
                            I'm&nbsp;<span className="gradient-text">Nisarg</span>
                        </motion.h1>
                        <motion.p variants={item} style={{ fontSize: '1.3rem', fontWeight: 500, color: 'var(--muted)', marginBottom: '1.25rem' }}>
                            Full-Stack Web Developer
                        </motion.p>

                        {/* Desc */}
                        <motion.p variants={item} style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--muted)', maxWidth: '440px', marginBottom: '2rem' }}>
                            I craft <span className="gradient-text-2" style={{ fontWeight: 600 }}>high-performance web apps</span>, automation pipelines &amp; e-commerce solutions that drive real business results.
                        </motion.p>

                        {/* Code snippet */}
                        <motion.div variants={item} style={{ marginBottom: '2rem', maxWidth: '340px' }}>
                            <div className="terminal-win">
                                <div className="terminal-bar">
                                    <div className="t-dot" style={{ background: '#ef4444' }} />
                                    <div className="t-dot" style={{ background: '#f59e0b' }} />
                                    <div className="t-dot" style={{ background: '#22c55e' }} />
                                    <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--muted)' }}>portfolio.js</span>
                                </div>
                                <div style={{ padding: '1rem', fontFamily: 'monospace', fontSize: '0.75rem', lineHeight: '1.6' }}>
                                    {CODE.map((l, i) => (
                                        <motion.div key={i}
                                            initial={{ opacity: 0, x: -8 }}
                                            animate={go ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.7 + i * 0.08 }}
                                            style={{ color: l.c }}>
                                            {l.t}
                                        </motion.div>
                                    ))}
                                    <span className="animate-blink" style={{ display: 'inline-block', width: '6px', height: '16px', background: '#06b6d4', marginLeft: '2px', verticalAlign: 'middle' }} />
                                </div>
                            </div>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div variants={item} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                            <button className="btn-primary"
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                                <span>View Projects</span><span>→</span>
                            </button>
                            <a href="/resume.pdf" download className="btn-outline">
                                Download CV <span>↓</span>
                            </a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div variants={item} style={{ display: 'flex', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                            {[['50+', 'Projects'], ['4+', 'Years Exp.'], ['100%', 'Satisfaction']].map(([n, l]) => (
                                <div key={l}>
                                    <div className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 900 }}>{n}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.2rem' }}>{l}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* ── Right: 3D ── */}
                    <motion.div
                        style={{ height: '580px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={go ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        className="hero-3d"
                    >
                        <Suspense fallback={null}>
                            <HeroScene />
                        </Suspense>
                    </motion.div>
                </div>
            </div>

            {/* Scroll cue */}
            <motion.div
                style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>Scroll</span>
                <div style={{ width: '20px', height: '36px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '6px' }}>
                    <motion.div style={{ width: '4px', height: '8px', borderRadius: '999px', background: '#3b82f6' }} animate={{ y: [0, 16, 0] }} transition={{ duration: 1.8, repeat: Infinity }} />
                </div>
            </motion.div>
        </section>
    )
}
