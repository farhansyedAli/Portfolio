import React, { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import About from './sections/About'
import Work from './sections/Work'
import Skills from './sections/Skills'
import Journey from './sections/Journey'
import GitHubSection from './sections/GitHubSection'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  // Ensure scroll restores to top on a fresh load (defensive against
  // browsers that try to restore a previous scroll position).
  useEffect(() => {
    if (window.location.hash) return
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="grain-overlay relative">
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Journey />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
