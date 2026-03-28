import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen({ onComplete }) {
    const [progress, setProgress] = useState(0)
    const [phase, setPhase] = useState('loading') // loading | reveal

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setPhase('reveal')
                    setTimeout(() => onComplete(), 800)
                    return 100
                }
                return prev + Math.random() * 8 + 2
            })
        }, 60)
        return () => clearInterval(interval)
    }, [onComplete])

    return (
        <AnimatePresence>
            {phase === 'loading' && (
                <motion.div
                    key="loading"
                    className="loading-screen"
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    {/* Background grid */}
                    <div className="absolute inset-0 grid-bg opacity-30" />

                    {/* Animated orbit rings */}
                    <div className="relative mb-10">
                        {/* Outer ring */}
                        <motion.div
                            className="w-32 h-32 rounded-full absolute"
                            style={{
                                border: '1px solid rgba(59,130,246,0.2)',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        >
                            <div
                                className="w-3 h-3 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2"
                                style={{ background: '#3b82f6', boxShadow: '0 0 12px #3b82f6' }}
                            />
                        </motion.div>

                        {/* Middle ring */}
                        <motion.div
                            className="w-20 h-20 rounded-full absolute"
                            style={{
                                border: '1px solid rgba(139,92,246,0.3)',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                        >
                            <div
                                className="w-2.5 h-2.5 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2"
                                style={{ background: '#8b5cf6', boxShadow: '0 0 10px #8b5cf6' }}
                            />
                        </motion.div>

                        {/* Logo center */}
                        <motion.div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black text-white relative z-10"
                            style={{
                                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                boxShadow: '0 0 30px rgba(139,92,246,0.5)',
                            }}
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            N
                        </motion.div>
                    </div>

                    {/* Name */}
                    <motion.h1
                        className="text-2xl font-bold mb-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="gradient-text">Nisarg</span>
                    </motion.h1>
                    <motion.p
                        className="text-sm mb-8"
                        style={{ color: 'var(--text-secondary)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Web Developer
                    </motion.p>

                    {/* Progress bar */}
                    <div className="w-48 h-0.5 rounded-full overflow-hidden" style={{ background: 'rgba(148,163,184,0.1)' }}>
                        <motion.div
                            className="h-full rounded-full"
                            style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)' }}
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(progress, 100)}%` }}
                            transition={{ ease: 'easeOut' }}
                        />
                    </div>
                    <motion.p
                        className="text-xs mt-3 font-mono"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        {Math.round(Math.min(progress, 100))}%
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
