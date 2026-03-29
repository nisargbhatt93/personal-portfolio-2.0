import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIntersectionObserver, useTilt } from '../hooks/useHooks'
import { PROJECTS } from '../data/portfolioData'

function ProjectCard({ project, index, isVisible }) {
    const tiltRef = useTilt()
    return (
        <motion.div
            ref={tiltRef}
            initial={{ opacity: 0, y: 36 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.08 }}
            className="glass-card overflow-hidden group flex flex-col"
            style={{ transition: 'box-shadow 0.3s ease' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = `0 24px 64px ${project.color}18`}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
        >
            {/* Top accent */}
            <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg,${project.color},${project.color}44)` }} />
            <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                            style={{ background: `${project.color}15`, color: project.color }}>{project.category}</span>
                        {project.featured && <span className="text-[10px] font-bold px-2 py-0.5 rounded-md" style={{ background: 'rgba(251,191,36,0.12)', color: '#fbbf24' }}>⭐ Featured</span>}
                    </div>
                    <div className="flex gap-1.5 shrink-0">
                        <a href={project.github} className="w-7 h-7 glass rounded-lg flex items-center justify-center text-sm hover:scale-110 transition-transform" title="GitHub">🐙</a>
                        <a href={project.live} className="w-7 h-7 glass rounded-lg flex items-center justify-center text-sm hover:scale-110 transition-transform" title="Live">🚀</a>
                    </div>
                </div>

                <h3 className="font-bold text-base mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--muted)' }}>{project.description}</p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map(t => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded-md font-mono"
                            style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--muted)' }}>{t}</span>
                    ))}
                </div>

                {/* Actions */}
                <div className="grid grid-cols-1 gap-2 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <a href={project.live} className="text-center text-xs py-2 rounded-lg font-semibold transition-all"
                        style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}25` }}>
                        Live Demo →
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default function Projects() {
    const [ref, isVisible] = useIntersectionObserver()
    const [filter, setFilter] = useState('All')
    const cats = ['All', 'Frontend', 'Full-Stack', 'Enterprise', 'E-Commerce', 'Automation', 'AI/ML']
    const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter)

    return (
        <section id="projects" className="relative overflow-hidden section-pad" ref={ref}>
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(59,130,246,0.05)' }} />
            <div className="container">
                <motion.div className="text-center mb-12"
                    initial={{ opacity: 0, y: 24 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}>
                    <span className="section-tag" style={{ color: '#06b6d4' }}>— Portfolio</span>
                    <h2 className="section-heading mb-4">Featured <span className="gradient-text">Projects</span></h2>
                    <p className="section-desc">Real projects with real impact — from enterprise systems to AI-powered tools.</p>
                </motion.div>

                {/* Filter */}
                <motion.div className="flex flex-wrap justify-center gap-2 mb-10"
                    initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
                    {cats.map(c => (
                        <button key={c} onClick={() => setFilter(c)}
                            className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                            style={{
                                background: filter === c ? 'linear-gradient(135deg,#3b82f6,#8b5cf6)' : 'rgba(255,255,255,0.04)',
                                color: filter === c ? 'white' : 'var(--muted)',
                                border: filter === c ? 'none' : '1px solid rgba(255,255,255,0.07)',
                            }}>
                            {c}
                        </button>
                    ))}
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div key={filter} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                        {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} isVisible={isVisible} />)}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
