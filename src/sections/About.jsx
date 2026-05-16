import React from 'react'
import { ABOUT } from '../data/content'
import { Reveal, Eyebrow, SectionHeading } from '../components/Primitives'

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left rail */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Eyebrow number="01">About</Eyebrow>
              </Reveal>
              <Reveal delay={0.1}>
                <SectionHeading className="mt-4">
                  Engineer first.<br />
                  <span className="text-gradient italic font-light">Builder always.</span>
                </SectionHeading>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-zinc-500 max-w-sm leading-relaxed">
                  A short window into how I think about AI, the work I take seriously,
                  and where I'm headed.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Right content */}
          <div className="lg:col-span-8 space-y-7">
            {ABOUT.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-light">
                  {p}
                </p>
              </Reveal>
            ))}

            {/* Highlight grid */}
            <Reveal delay={0.5}>
              <div className="mt-12 grid sm:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
                {ABOUT.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="bg-ink-900/80 px-5 py-5 group hover:bg-ink-800/80 transition-colors"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                      {h.label}
                    </div>
                    <div className="mt-1.5 text-zinc-100 text-sm sm:text-base font-medium">
                      {h.value}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
