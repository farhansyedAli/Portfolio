import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, MapPin } from 'lucide-react'
import { PROFILE } from '../data/content'
import { StatusDot } from '../components/Primitives'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden pt-20 pb-12">
      {/* Atmospheric background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-fade" />
        {/* Cyan glow top-left */}
        <div
          className="absolute -top-32 -left-32 w-[42rem] h-[42rem] rounded-full opacity-40 animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.18) 0%, transparent 60%)' }}
        />
        {/* Violet glow bottom-right */}
        <div
          className="absolute -bottom-40 -right-40 w-[48rem] h-[48rem] rounded-full opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 60%)' }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
        {/* Top meta strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center gap-3 mb-8 text-xs"
        >
          <StatusDot on={PROFILE.available} label="Open to AI/ML opportunities" />
          <span className="text-zinc-700">/</span>
          <span className="inline-flex items-center gap-1.5 text-zinc-400 font-mono">
            <MapPin size={11} /> {PROFILE.location}
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="display-title text-[clamp(2.5rem,8.5vw,7rem)] text-zinc-50 leading-[0.92]"
          >
            <span className="block">Building</span>
            <span className="block text-gradient italic font-light">intelligent</span>
            <span className="block">systems that ship.</span>
          </motion.h1>
        </div>

        {/* Subheading + CTA row */}
        <div className="mt-10 lg:mt-14 grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="lg:col-span-7 text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-2xl"
          >
            I’m <span className="text-zinc-100 font-medium">{PROFILE.name}</span> — a
            Data Science undergraduate at <span className="text-zinc-100">PUCIT</span> focused
            on AI engineering. I build RAG pipelines, ML applications, and algorithmic
            AI from first principles — and ship them to production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end items-start lg:items-end gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-ink-950 bg-zinc-100 hover:bg-white rounded-full transition-colors"
            >
              View selected work
              <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-zinc-200 border border-white/10 hover:border-cyan-accent/40 hover:bg-cyan-accent/[0.04] rounded-full transition-all"
            >
              <Github size={15} />
              GitHub
              <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-cyan-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </motion.div>
        </div>

        {/* Scrolling chips with focus areas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 lg:mt-24 border-t border-white/[0.06] pt-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 sm:gap-x-8">
            {[
              { k: '04+',  l: 'production-grade projects' },
              { k: '02',   l: 'live Hugging Face deployments' },
              { k: 'RAG',  l: 'NLP & retrieval pipelines' },
              { k: 'Live', l: 'open-source on GitHub' },
            ].map((s, i) => (
              <div key={i} className="group">
                <div className="display-title text-2xl sm:text-3xl text-zinc-100 group-hover:text-gradient-cyan transition-colors">
                  {s.k}
                </div>
                <div className="text-xs sm:text-sm text-zinc-500 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-zinc-600"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <span className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
      </motion.div>
    </section>
  )
}
