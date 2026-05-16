import React from 'react'
import { SKILLS, GITHUB } from '../data/content'
import { Reveal, Eyebrow, SectionHeading } from '../components/Primitives'

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      {/* Subtle background tint */}
      <div className="absolute inset-x-0 top-1/4 -z-10 h-1/2 bg-glow-violet opacity-30" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow number="03">Skills</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading className="mt-4">
                The toolkit, <br/>
                <span className="text-gradient italic font-light">grouped by intent.</span>
              </SectionHeading>
            </Reveal>
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <Reveal delay={0.2}>
              <p className="text-zinc-500 leading-relaxed max-w-md">
                These are the technologies I’ve used to ship the projects above — not a list
                of everything I’ve briefly touched. The level of comfort varies; the depth
                comes from the case studies.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Skill grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {SKILLS.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <SkillCard group={group} i={i} />
            </Reveal>
          ))}
        </div>

        {/* Languages distribution mini-strip */}
        <Reveal delay={0.4}>
          <div className="mt-14 glass border border-white/[0.06] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-50"
              style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.18), transparent 70%)' }}
            />
            <div className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  Languages
                </div>
                <h3 className="display-title text-2xl sm:text-3xl text-zinc-100 mt-2">
                  By project share
                </h3>
              </div>
              <div className="text-xs font-mono text-zinc-500">
                across {GITHUB.repos} public repos
              </div>
            </div>

            {/* Stacked horizontal bar */}
            <div className="relative h-3 rounded-full bg-white/[0.04] overflow-hidden mb-4">
              {(() => {
                let acc = 0
                const palette = ['#22D3EE', '#A78BFA', '#67E8F9', '#3F3F46']
                return GITHUB.topLanguages.map((l, i) => {
                  const left = acc
                  acc += l.pct
                  return (
                    <div
                      key={l.name}
                      className="absolute top-0 h-full transition-all"
                      style={{
                        left: `${left}%`,
                        width: `${l.pct}%`,
                        background: palette[i % palette.length],
                        opacity: 0.85,
                      }}
                    />
                  )
                })
              })()}
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {GITHUB.topLanguages.map((l, i) => {
                const palette = ['#22D3EE', '#A78BFA', '#67E8F9', '#71717A']
                return (
                  <div key={l.name} className="flex items-center gap-2 text-xs">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: palette[i % palette.length] }}
                    />
                    <span className="text-zinc-300 font-medium">{l.name}</span>
                    <span className="text-zinc-600 font-mono">{l.pct}%</span>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function SkillCard({ group, i }) {
  return (
    <div className="group glass border border-white/[0.06] hover:border-cyan-accent/30 rounded-2xl p-5 sm:p-6 transition-all relative overflow-hidden h-full">
      <div
        className="absolute inset-0 bg-glow-radial opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      />
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] text-zinc-600">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="w-6 h-px bg-gradient-to-r from-cyan-accent/40 to-transparent" />
        </div>
        <h3 className="display-title text-base sm:text-lg text-zinc-50 mb-4 leading-tight">
          {group.category}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {group.items.map((item) => (
            <span key={item} className="tech-badge">{item}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
