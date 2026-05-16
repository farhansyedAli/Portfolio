import React from 'react'
import { motion } from 'framer-motion'

/* Standard viewport-triggered fade-up wrapper */
export function Reveal({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* Section eyebrow label */
export function Eyebrow({ children, number }) {
  return (
    <div className="eyebrow">
      {number && <span className="text-zinc-500">{number}</span>}
      {children}
    </div>
  )
}

/* Section heading typography */
export function SectionHeading({ children, className = '' }) {
  return (
    <h2 className={`display-title text-4xl md:text-5xl lg:text-6xl text-zinc-50 ${className}`}>
      {children}
    </h2>
  )
}

/* Tag chip */
export function Tag({ children, accent = 'cyan' }) {
  const color = accent === 'violet'
    ? 'text-violet-300/90 bg-violet-500/10 border-violet-400/20'
    : 'text-cyan-300/90 bg-cyan-500/10 border-cyan-400/20'
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-[3px] text-[10px] uppercase tracking-[0.18em] font-mono border rounded-full ${color}`}>
      {children}
    </span>
  )
}

/* Status dot */
export function StatusDot({ on = true, label }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400">
      <span
        className={`relative inline-flex w-1.5 h-1.5 rounded-full ${on ? 'bg-emerald-400' : 'bg-zinc-500'}`}
      >
        {on && (
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
        )}
      </span>
      {label}
    </span>
  )
}
