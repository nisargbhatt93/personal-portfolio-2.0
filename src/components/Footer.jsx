import { motion } from 'framer-motion'

const LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]
const SOCIALS = [
    { icon: '🐙', href: 'https://github.com/nisargbhatt93', label: 'GitHub' },
    { icon: '💼', href: 'https://www.linkedin.com/in/nisarg-bhatt-52650a285', label: 'LinkedIn' },
    { icon: '📧', href: 'mailto:nisargbhatt.n@gmail.com', label: 'Email' },
]

export default function Footer() {
    const go = href => { document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }) }
    return (
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black text-white"
                            style={{ background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)' }}>N</div>
                        <span className="font-bold text-lg gradient-text">Nisarg</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {LINKS.map(l => (
                            <button key={l.label} onClick={() => go(l.href)}
                                className="text-sm transition-colors hover:text-blue-400" style={{ color: 'var(--muted)', background: 'none', border: 'none', cursor: 'pointer' }}>
                                {l.label}
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        {SOCIALS.map(s => (
                            <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 glass rounded-xl flex items-center justify-center text-base"
                                whileHover={{ scale: 1.15, y: -2 }} title={s.label}>{s.icon}</motion.a>
                        ))}
                    </div>
                </div>
                <div className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', color: 'var(--muted)' }}>
                    <p>© {new Date().getFullYear()} Nisarg · All rights reserved</p>
                    <p>Built with ♥ using React, Three.js &amp; Framer Motion</p>
                </div>
            </div>
        </footer>
    )
}
