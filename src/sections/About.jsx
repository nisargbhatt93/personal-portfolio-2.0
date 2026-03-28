import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useHooks'

const VALUES = [
    { icon: '⚡', title: 'Performance First', desc: 'Every line optimized for speed, scalability, and clean architecture.', color: '#fbbf24' },
    { icon: '🎨', title: 'Design-Centric', desc: 'Great software is functional AND beautiful. I care about both.', color: '#ec4899' },
    { icon: '🔧', title: 'Problem Solver', desc: 'Complex business challenges → elegant technical solutions.', color: '#34d399' },
    { icon: '🚀', title: 'Always Shipping', desc: 'Iterative delivery. I get things into users\' hands fast.', color: '#3b82f6' },
]

const TIMELINE = [
    { year: '2020', event: 'Started web dev', tech: 'HTML, CSS, JS' },
    { year: '2021', event: 'First professional role', tech: 'React, Node.js' },
    { year: '2022', event: 'Enterprise ERP (200+ users)', tech: 'Full-Stack' },
    { year: '2023', event: 'Launched 20+ projects', tech: 'Shopify, WP' },
    { year: '2024', event: 'AI & Automation focus', tech: 'Python, APIs' },
]

export default function About() {
    const [ref, isVisible] = useIntersectionObserver()

    return (
        <section id="about" className="relative overflow-hidden section-pad" ref={ref}>
            {/* blobs */}
            <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(139,92,246,0.06)' }} />
            <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(59,130,246,0.06)' }} />

            <div className="container">
                {/* Header */}
                <motion.div className="text-center mb-16"
                    initial={{ opacity: 0, y: 24 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}>
                    <span className="section-tag">— About Me</span>
                    <h2 className="section-heading gradient-text mb-4">Who I Am</h2>
                    <p className="section-desc">A full-stack developer crafting digital experiences with focus on performance, UX, and real business impact.</p>
                </motion.div>

                {/* Row 1: Bio | Values */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* Bio */}
                    <motion.div className="glass-card p-8 flex flex-col"
                        initial={{ opacity: 0, x: -24 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black text-white shrink-0"
                                style={{ background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)' }}>N</div>
                            <div>
                                <h3 className="text-lg font-bold">Nisarg</h3>
                                <p className="text-sm" style={{ color: 'var(--muted)' }}>Full-Stack Developer</p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--muted)' }}>
                            Self-driven developer with <strong style={{ color: 'var(--text)' }}>4+ years</strong> of experience — from marketing sites to enterprise-grade applications.
                        </p>
                        <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
                            Core stack: <strong style={{ color: '#61DAFB' }}>React</strong>, <strong style={{ color: '#68CC45' }}>Node.js</strong>, <strong style={{ color: '#699EE6' }}>PostgreSQL</strong>. E-commerce: <strong style={{ color: '#96BF48' }}>Shopify</strong> &amp; <strong style={{ color: '#21759B' }}>WordPress</strong>.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {['India 📍', 'Remote-Friendly 🌍', 'Open to Work 💼'].map(t => (
                                <span key={t} className="px-3 py-1 rounded-full text-xs glass" style={{ color: 'var(--muted)' }}>{t}</span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Value cards */}
                    <div className="grid grid-cols-2 gap-4">
                        {VALUES.map((v, i) => (
                            <motion.div key={v.title} className="glass-card p-5 group"
                                initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2 + i * 0.08 }}
                                whileHover={{ y: -4, borderColor: `${v.color}40` }}>
                                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xl mb-3 transition-transform group-hover:scale-110"
                                    style={{ background: `${v.color}16` }}>
                                    {v.icon}
                                </div>
                                <h4 className="font-semibold text-sm mb-1.5">{v.title}</h4>
                                <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Timeline strip */}
                <motion.div className="glass-card p-7"
                    initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-center mb-6" style={{ color: 'var(--muted)' }}>My Journey</p>
                    <div className="relative flex flex-wrap lg:flex-nowrap items-start justify-between gap-6">
                        {/* connector */}
                        <div className="hidden lg:block absolute top-5 left-[10%] right-[10%] h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(59,130,246,0.25),transparent)' }} />
                        {TIMELINE.map((t, i) => (
                            <motion.div key={t.year} className="flex flex-col items-center text-center flex-1 min-w-[100px]"
                                initial={{ opacity: 0, y: 10 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 + i * 0.09 }}>
                                <div className="w-10 h-10 rounded-full flex flex-col items-center justify-center mb-3 z-10"
                                    style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)' }}>
                                    <span className="text-[11px] font-bold" style={{ color: '#3b82f6' }}>{t.year}</span>
                                </div>
                                <p className="text-xs font-semibold mb-0.5 leading-snug">{t.event}</p>
                                <p className="text-xs" style={{ color: 'var(--muted)' }}>{t.tech}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
