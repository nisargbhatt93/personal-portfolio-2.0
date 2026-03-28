import { useState } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useHooks'
import { SKILLS } from '../data/portfolioData'

function SkillCard({ skill, index, isVisible }) {
    const [hovered, setHovered] = useState(false)
    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.07 }}
            className="glass-card p-6 group relative overflow-hidden"
            style={{ border: hovered ? `1px solid ${skill.color}35` : undefined, transition: 'border 0.3s, transform 0.3s, box-shadow 0.3s', transform: hovered ? 'translateY(-6px)' : undefined, boxShadow: hovered ? `0 16px 48px ${skill.color}15` : undefined }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[1.25rem]"
                style={{ background: `radial-gradient(circle at 50% 0%, ${skill.color}08, transparent 65%)` }} />

            {/* category */}
            <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md"
                    style={{ background: `${skill.color}15`, color: skill.color }}>
                    {skill.category}
                </span>
                <div className="w-2 h-2 rounded-full" style={{ background: skill.color, boxShadow: `0 0 8px ${skill.color}` }} />
            </div>

            <h3 className="font-bold text-base mb-3">{skill.name}</h3>

            {/* Progress bar (always visible) */}
            <div className="mb-2">
                <div className="skill-track mb-2">
                    <motion.div className="skill-fill"
                        style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}77)` }}
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: 0.4 + index * 0.07, duration: 1.2, ease: 'easeOut' }}
                    />
                </div>
                <div className="flex justify-between">
                    <span className="text-xs" style={{ color: 'var(--muted)' }}>
                        {hovered ? `${skill.years} yr${skill.years > 1 ? 's' : ''} experience` : 'Proficiency'}
                    </span>
                    <span className="text-xs font-bold" style={{ color: skill.color }}>{skill.level}%</span>
                </div>
            </div>
        </motion.div>
    )
}

export default function Skills() {
    const [ref, isVisible] = useIntersectionObserver()
    return (
        <section id="skills" className="relative overflow-hidden section-pad" ref={ref}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, transparent 70%)' }} />
            <div className="container">
                <motion.div className="text-center mb-14"
                    initial={{ opacity: 0, y: 24 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}>
                    <span className="section-tag" style={{ color: '#8b5cf6' }}>— Technical Arsenal</span>
                    <h2 className="section-heading mb-4"><span className="gradient-text">Skills</span> &amp; Expertise</h2>
                    <p className="section-desc">Hover any card to see years of experience. Real skills, real projects.</p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    {SKILLS.map((s, i) => <SkillCard key={s.name} skill={s} index={i} isVisible={isVisible} />)}
                </div>

                {/* Stats bar */}
                <motion.div className="glass-card p-6 grid sm:grid-cols-3 gap-6 text-center"
                    initial={{ opacity: 0, y: 16 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }}>
                    {[['15+', 'Technologies', '#3b82f6'], ['50+', 'Projects Completed', '#8b5cf6'], ['30+', 'Happy Clients', '#06b6d4']].map(([n, l, c]) => (
                        <div key={l}>
                            <div className="text-3xl font-black mb-1" style={{ color: c }}>{n}</div>
                            <div className="text-sm" style={{ color: 'var(--muted)' }}>{l}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
