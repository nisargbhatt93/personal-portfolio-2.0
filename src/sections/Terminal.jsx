import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useHooks'
import { TERMINAL_RESPONSES } from '../data/portfolioData'

const PROMPT = 'nisarg@portfolio:~$'
const QUICK = ['help', 'about', 'skills', 'projects', 'contact', 'whoami', 'clear']

export default function Terminal() {
    const [ref, isVisible] = useIntersectionObserver()
    const [history, setHistory] = useState([
        { type: 'sys', text: '👋 Welcome to Nisarg\'s interactive terminal!' },
        { type: 'sys', text: 'Type a command or click a quick-run button below.' },
    ])
    const [input, setInput] = useState('')
    const [cmdHist, setCmdHist] = useState([])
    const [histIdx, setHistIdx] = useState(-1)
    const outputRef = useRef(null)
    const inputRef = useRef(null)

    useEffect(() => {
        if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight
    }, [history])

    const run = useCallback((raw) => {
        const cmd = raw.trim().toLowerCase()
        if (!cmd) return
        setCmdHist(p => [cmd, ...p])
        setHistIdx(-1)
        const res = TERMINAL_RESPONSES[cmd]
        if (res === '__CLEAR__') {
            setHistory([{ type: 'sys', text: 'Cleared. Type "help" for commands.' }])
            return
        }
        setHistory(p => [
            ...p,
            { type: 'cmd', text: cmd },
            res ? { type: 'res', text: res } : { type: 'err', text: `bash: ${cmd}: command not found. Try "help".` },
        ])
    }, [])

    const onKey = useCallback((e) => {
        if (e.key === 'Enter') { run(input); setInput('') }
        else if (e.key === 'ArrowUp') { e.preventDefault(); const i = Math.min(histIdx + 1, cmdHist.length - 1); setHistIdx(i); setInput(cmdHist[i] ?? '') }
        else if (e.key === 'ArrowDown') { e.preventDefault(); const i = Math.max(histIdx - 1, -1); setHistIdx(i); setInput(i === -1 ? '' : cmdHist[i] ?? '') }
    }, [input, histIdx, cmdHist, run])

    return (
        <section id="terminal" className="relative overflow-hidden section-pad" ref={ref}>
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(6,182,212,0.5) 39px,rgba(6,182,212,0.5) 40px)' }} />

            <div className="container">
                <motion.div className="text-center mb-12"
                    initial={{ opacity: 0, y: 24 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}>
                    <span className="section-tag" style={{ color: '#06b6d4' }}>— Developer Identity</span>
                    <h2 className="section-heading mb-4">Interactive <span className="gradient-text">Terminal</span></h2>
                    <p className="section-desc">Explore my portfolio through the command line.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 32 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25 }}>
                    {/* Quick pills */}
                    <div className="flex flex-wrap justify-center gap-2 mb-5">
                        {QUICK.map(cmd => (
                            <motion.button key={cmd}
                                onClick={() => { run(cmd); setTimeout(() => inputRef.current?.focus(), 50) }}
                                className="px-3 py-1.5 rounded-lg text-xs font-mono transition-all"
                                style={{ color: '#06b6d4', border: '1px solid rgba(6,182,212,0.2)', background: 'rgba(6,182,212,0.05)' }}
                                whileHover={{ scale: 1.05, background: 'rgba(6,182,212,0.1)' }}
                                whileTap={{ scale: 0.95 }}>
                                {cmd}
                            </motion.button>
                        ))}
                    </div>

                    {/* Terminal window */}
                    <div className="terminal-win mx-auto" style={{ maxWidth: '800px' }} onClick={() => inputRef.current?.focus()}>
                        {/* Title bar */}
                        <div className="terminal-bar">
                            <div className="t-dot" style={{ background: '#ef4444' }} />
                            <div className="t-dot" style={{ background: '#f59e0b' }} />
                            <div className="t-dot" style={{ background: '#22c55e' }} />
                            <span className="ml-3 text-xs font-mono" style={{ color: '#06b6d4' }}>nisarg@portfolio: ~</span>
                            <span className="ml-auto text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>bash</span>
                        </div>

                        {/* Output */}
                        <div ref={outputRef} className="p-5 font-mono text-sm space-y-0.5 overflow-y-auto" style={{ height: '300px' }}>
                            {history.map((e, i) => (
                                <div key={i}>
                                    {e.type === 'cmd' && (
                                        <div className="flex gap-2 mt-2">
                                            <span style={{ color: '#22c55e' }}>{PROMPT}</span>
                                            <span style={{ color: '#f1f5f9' }}>{e.text}</span>
                                        </div>
                                    )}
                                    {e.type === 'sys' && <div style={{ color: '#475569', fontSize: '0.78rem' }}>{e.text}</div>}
                                    {e.type === 'res' && (
                                        <pre className="text-xs leading-relaxed pl-3 py-1 whitespace-pre-wrap break-words"
                                            style={{ color: '#94a3b8', borderLeft: '2px solid rgba(6,182,212,0.25)', fontFamily: 'inherit' }}>
                                            {e.text}
                                        </pre>
                                    )}
                                    {e.type === 'err' && <div className="pl-3 text-xs" style={{ color: '#f87171' }}>{e.text}</div>}
                                </div>
                            ))}
                        </div>

                        {/* Input row */}
                        <div className="px-5 py-3 flex items-center gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                            <span className="font-mono text-sm shrink-0" style={{ color: '#22c55e' }}>{PROMPT}</span>
                            <input
                                ref={inputRef}
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={onKey}
                                className="flex-1 bg-transparent text-sm font-mono"
                                style={{ color: '#f1f5f9', caretColor: '#06b6d4', cursor: 'text', outline: 'none', border: 'none' }}
                                placeholder="type a command..."
                                autoComplete="off" spellCheck={false}
                            />
                            <motion.button onClick={() => { run(input); setInput('') }}
                                className="px-3 py-1 rounded-md text-xs font-mono shrink-0"
                                style={{ background: 'rgba(6,182,212,0.1)', color: '#06b6d4', border: '1px solid rgba(6,182,212,0.18)', cursor: 'pointer' }}
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                Run ↵
                            </motion.button>
                        </div>
                    </div>
                    <p className="text-center text-xs mt-3" style={{ color: 'rgba(255,255,255,0.2)' }}>↑ ↓ arrow keys for command history</p>
                </motion.div>
            </div>
        </section>
    )
}
