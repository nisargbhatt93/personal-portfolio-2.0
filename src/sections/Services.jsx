import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useHooks'
import { SERVICES } from '../data/portfolioData'

export default function Services() {
    const [ref, isVisible] = useIntersectionObserver()
    return (
        <section id="services" className="relative overflow-hidden section-pad" ref={ref}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 30% 50%, rgba(6,182,212,0.04), transparent)' }} />
            <div className="container">
                <motion.div className="text-center mb-14"
                    initial={{ opacity: 0, y: 24 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}>
                    <span className="section-tag" style={{ color: '#34d399' }}>— What I Do</span>
                    <h2 className="section-heading mb-4">My <span className="gradient-text">Services</span></h2>
                    <p className="section-desc">End-to-end development services tailored to your business needs.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {SERVICES.map((s, i) => (
                        <motion.div key={s.title}
                            initial={{ opacity: 0, y: 32 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.09 }}
                            className="glass-card p-7 group relative overflow-hidden flex flex-col"
                            whileHover={{ y: -5, boxShadow: `0 20px 48px ${s.color}14` }}
                        >
                            {/* hover glow bg */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[1.25rem]"
                                style={{ background: `radial-gradient(circle at 0% 0%, ${s.color}07, transparent 55%)` }} />
                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-b-[1.25rem]"
                                style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }} />

                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform group-hover:scale-110"
                                style={{ background: `${s.color}14`, border: `1px solid ${s.color}28` }}>
                                {s.icon}
                            </div>
                            <h3 className="font-bold text-base mb-2">{s.title}</h3>
                            <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--muted)' }}>{s.description}</p>
                            <div className="space-y-1.5">
                                {s.features.map(f => (
                                    <div key={f} className="flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full shrink-0" style={{ background: s.color }} />
                                        <span className="text-xs" style={{ color: 'var(--muted)' }}>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div className="mt-10 text-center"
                    initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
                    <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        <span>Start a Project →</span>
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
