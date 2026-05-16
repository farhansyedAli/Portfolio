import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { PROFILE } from '../data/content'

const NAV_ITEMS = [
  { label: 'About',       href: '#about',     n: '01' },
  { label: 'Work',        href: '#work',      n: '02' },
  { label: 'Skills',      href: '#skills',    n: '03' },
  { label: 'Journey',     href: '#journey',   n: '04' },
  { label: 'Contact',     href: '#contact',   n: '05' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2.5' : 'py-4'
      }`}
    >
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${
        scrolled
          ? 'rounded-2xl glass border border-white/[0.06]'
          : ''
      }`} style={{ width: scrolled ? 'min(72rem, calc(100% - 2rem))' : '100%' }}>
        <nav className="flex items-center justify-between h-12">
          {/* Logo */}
          <a href="#top" className="group flex items-center gap-2">
            <span className="relative flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 bg-ink-800">
              <span className="text-cyan-accent font-mono text-xs font-bold">SF</span>
              <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400/0 via-cyan-400/20 to-violet-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
            <span className="hidden sm:block text-sm text-zinc-300 font-medium tracking-tight">
              Syed Farhan
            </span>
          </a>

          {/* Center links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-50 transition-colors"
                >
                  <span className="font-mono text-[10px] text-zinc-600 mr-1.5 group-hover:text-cyan-accent transition-colors">
                    {item.n}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-cyan-accent transition-colors rounded-md hover:bg-white/[0.04]"
            >
              <Github size={15} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-cyan-accent transition-colors rounded-md hover:bg-white/[0.04]"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              aria-label="Email"
              className="hidden sm:flex items-center gap-2 ml-1 px-3 py-1.5 text-xs font-medium text-ink-950 bg-zinc-100 hover:bg-white rounded-md transition-colors"
            >
              <Mail size={13} />
              Get in touch
            </a>
          </div>
        </nav>
      </div>
    </motion.header>
  )
}
