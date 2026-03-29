import { useState } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useHooks'

const SOCIALS = [
    { icon: '🐙', label: 'GitHub', href: 'https://github.com/nisargbhatt93' },
    { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/nisarg-bhatt-52650a285' },
    { icon: '📧', label: 'Email', href: 'mailto:nisargbhatt.n@gmail.com' },
]

const INFO = [
    { icon: '📧', label: 'Email', val: 'nisargbhatt.n@gmail.com' },
    { icon: '📍', label: 'Location', val: 'India (Remote Available)' },
    { icon: '⏰', label: 'Response Time', val: 'Within 24 hours' },
]

export default function Contact() {
    const [ref, isVisible] = useIntersectionObserver()
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState(null)
    const [focused, setFocused] = useState(null)

    const change = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
    const submit = async e => {
        e.preventDefault()
        setStatus('sending')
        await new Promise(r => setTimeout(r, 1400))
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(null), 4000)
    }

    const inputStyle = (f) => ({
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${focused === f ? 'rgba(59,130,246,0.5)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '0.75rem',
        color: 'var(--text)',
        padding: '0.75rem 1rem',
        width: '100%',
        fontSize: '0.875rem',
        outline: 'none',
        transition: 'border 0.2s, box-shadow 0.2s',
        boxShadow: focused === f ? '0 0 0 3px rgba(59,130,246,0.1)' : 'none',
        fontFamily: 'Inter, sans-serif',
    })

    return (
        <section id="contact" className="relative overflow-hidden section-pad" ref={ref}>
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(139,92,246,0.05)' }} />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(59,130,246,0.05)' }} />

            <div className="container">
                <motion.div className="text-center mb-14"
                    initial={{ opacity: 0, y: 24 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}>
                    <span className="section-tag" style={{ color: '#ec4899' }}>— Get In Touch</span>
                    <h2 className="section-heading mb-4">Let's <span className="gradient-text">Work Together</span></h2>
                    <p className="section-desc">Have a project in mind? Let's build something amazing together.</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Left — info card */}
                    <motion.div initial={{ opacity: 0, x: -28 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.15 }}>
                        <div className="glass-card p-8 mb-6">
                            <h3 className="text-lg font-bold mb-2">Ready to start your project?</h3>
                            <p className="text-sm leading-relaxed mb-7" style={{ color: 'var(--muted)' }}>
                                I'm available for freelance projects and full-time opportunities. Simple landing page or complex enterprise system — let's talk.
                            </p>
                            <div className="space-y-4">
                                {INFO.map(({ icon, label, val }) => (
                                    <div key={label} className="flex items-center gap-3">
                                        <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-base shrink-0">{icon}</div>
                                        <div>
                                            <p className="text-xs" style={{ color: 'var(--muted)' }}>{label}</p>
                                            <p className="text-sm font-medium">{val}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social links */}
                        <div className="glass-card p-5">
                            <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--muted)' }}>Find me on</p>
                            <div className="flex gap-4">
                                {SOCIALS.map(s => (
                                    <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                        className="flex-1 glass rounded-xl py-3 flex flex-col items-center gap-1.5 group transition-all"
                                        whileHover={{ y: -3 }}>
                                        <span className="text-xl group-hover:scale-110 transition-transform">{s.icon}</span>
                                        <span className="text-xs" style={{ color: 'var(--muted)' }}>{s.label}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — form */}
                    <motion.div initial={{ opacity: 0, x: 28 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.25 }}>
                        <form onSubmit={submit} className="glass-card p-8 space-y-5">
                            <h3 className="text-lg font-bold mb-1">Send a Message</h3>

                            {[
                                { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                            ].map(f => (
                                <div key={f.name}>
                                    <label className="block text-xs font-medium mb-2" style={{ color: 'var(--muted)' }}>{f.label}</label>
                                    <input
                                        type={f.type} name={f.name} required
                                        value={form[f.name]} onChange={change}
                                        onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                                        placeholder={f.placeholder}
                                        style={inputStyle(f.name)}
                                    />
                                </div>
                            ))}

                            <div>
                                <label className="block text-xs font-medium mb-2" style={{ color: 'var(--muted)' }}>Message</label>
                                <textarea
                                    name="message" required rows={5}
                                    value={form.message} onChange={change}
                                    onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                                    placeholder="Tell me about your project..."
                                    style={{ ...inputStyle('message'), resize: 'vertical' }}
                                />
                            </div>

                            <motion.button type="submit" disabled={status === 'sending'}
                                className="w-full btn-primary py-3 rounded-xl justify-center"
                                whileHover={{ scale: status === 'sending' ? 1 : 1.01 }}
                                whileTap={{ scale: 0.98 }}>
                                <span className="flex items-center justify-center gap-2">
                                    {status === 'sending' && (
                                        <motion.div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                            animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} />
                                    )}
                                    <span>{status === 'sending' ? 'Sending...' : status === 'success' ? '✅ Message Sent!' : 'Send Message →'}</span>
                                </span>
                            </motion.button>

                            {status === 'success' && (
                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-sm" style={{ color: '#34d399' }}>
                                    Thanks! I'll get back to you within 24 hours.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
