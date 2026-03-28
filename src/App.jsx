import { useState, useCallback, useEffect, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Terminal from './sections/Terminal'
import Contact from './sections/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('dark')

  const handleLoadComplete = useCallback(() => {
    setLoading(false)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark'
      document.body.classList.toggle('light', next === 'light')
      return next
    })
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" onComplete={handleLoadComplete} />}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Terminal />
            <Contact />
          </motion.main>

          <Footer />
        </>
      )}
    </>
  )
}
