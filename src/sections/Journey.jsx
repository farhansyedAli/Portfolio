import React from 'react'
import { JOURNEY } from '../data/content'
import { Reveal, Eyebrow, SectionHeading } from '../components/Primitives'

export default function Journey() {
  return (
    <section id="journey" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow number="04">Journey</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading className="mt-4">
                From first scripts <br />
                <span className="text-gradient italic font-light">to production AI.</span>
              </SectionHeading>
            </Reveal>
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <Reveal delay={0.2}>
              <p className="text-zinc-500 leading-relaxed max-w-md">
                A condensed timeline of the technical milestones that shaped how I think
                about building intelligent systems today.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="relative">
          {/* Vertical track */}
          <div
            aria-hidden
            className="absolute left-2 sm:left-3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent"
          />

          <div className="space-y-10 sm:space-y-12">
            {JOURNEY.map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="relative pl-10 sm:pl-14">
                  {/* Node */}
                  <div className="absolute left-0 top-2 flex items-center justify-center">
                    <span className="relative w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-ink-900 border border-white/10 flex items-center justify-center">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          i === JOURNEY.length - 1
                            ? 'bg-cyan-accent shadow-[0_0_12px_rgba(34,211,238,0.6)]'
                            : 'bg-zinc-500'
                        }`}
                      />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-accent w-20 flex-shrink-0">
                      {item.period}
                    </span>
                    <h3 className="display-title text-xl sm:text-2xl text-zinc-100">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 leading-relaxed max-w-2xl sm:ml-[6.5rem]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
