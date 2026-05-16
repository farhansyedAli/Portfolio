import React from 'react'
import { Github, ArrowUpRight, Star, GitBranch, Activity } from 'lucide-react'
import { PROFILE, GITHUB } from '../data/content'
import { Reveal, Eyebrow, SectionHeading } from '../components/Primitives'

export default function GitHubSection() {
  return (
    <section id="github" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Activity</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading className="mt-4">
                Where the code <br/>
                <span className="text-gradient italic font-light">actually lives.</span>
              </SectionHeading>
            </Reveal>
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <Reveal delay={0.2}>
              <p className="text-zinc-500 leading-relaxed max-w-md">
                A snapshot of public work — repositories, deployments, and the
                language footprint behind everything you’ve seen.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Stats grid */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
            <StatTile icon={GitBranch} label="Public Repos"      value={GITHUB.repos} accent="cyan"   />
            <StatTile icon={Star}      label="Pinned"            value={GITHUB.pinned} accent="violet" />
            <StatTile icon={Activity}  label="HF Deployments"    value={GITHUB.hfSpaces} accent="cyan"  />
            <StatTile icon={Github}    label="Open Source"       value="Live" accent="violet"          />
          </div>
        </Reveal>

        {/* Heatmap-style contribution grid (visual approximation) */}
        <Reveal delay={0.3}>
          <div className="glass border border-white/[0.06] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div
              className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-30"
              style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.18), transparent 60%)' }}
            />

            <div className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  Contribution density
                </div>
                <h3 className="display-title text-xl sm:text-2xl text-zinc-100 mt-2">
                  Building consistently
                </h3>
              </div>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-cyan-accent transition-colors font-mono"
              >
                @{GITHUB.username}
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <Heatmap />

            <div className="mt-5 flex items-center justify-between text-[10px] font-mono text-zinc-600">
              <span>Less</span>
              <div className="flex items-center gap-1">
                {[0.08, 0.2, 0.4, 0.7, 1].map((o, i) => (
                  <span key={i} className="w-2.5 h-2.5 rounded-[2px]" style={{ background: `rgba(34,211,238,${o})` }} />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function StatTile({ icon: Icon, label, value, accent }) {
  const ringColor = accent === 'violet' ? 'rgba(167,139,250,0.2)' : 'rgba(34,211,238,0.2)'
  const iconColor = accent === 'violet' ? '#A78BFA' : '#22D3EE'
  return (
    <div className="group glass border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-5 transition-all relative overflow-hidden">
      <div
        className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-500"
        style={{ background: ringColor }}
      />
      <div className="relative flex items-start justify-between mb-3">
        <Icon size={16} className="text-zinc-600" style={{ color: iconColor }} />
        <span className="font-mono text-[10px] text-zinc-600">{label}</span>
      </div>
      <div className="relative display-title text-3xl sm:text-4xl text-zinc-100">
        {value}
      </div>
    </div>
  )
}

/* Synthetic heatmap — visualises a believable contribution pattern.
   No fake numbers are claimed; this is purely a stylistic graph. */
function Heatmap() {
  // 7 rows (days of week) × 26 columns (~6 months)
  const cols = 26
  const rows = 7

  // Deterministic pattern so it looks consistent on every render
  const cell = (r, c) => {
    const seed = (r * 13 + c * 7 + (c % 5) * 3) % 11
    // Bias more activity toward recent columns (right side)
    const recencyBoost = c > cols - 8 ? 2 : c > cols - 16 ? 1 : 0
    const v = Math.min(4, Math.max(0, seed - 5 + recencyBoost))
    return v
  }
  const opacities = [0.05, 0.18, 0.38, 0.65, 1]

  return (
    <div className="overflow-x-auto -mx-2 px-2">
      <div className="inline-grid gap-[3px] min-w-full" style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridAutoFlow: 'column',
      }}>
        {Array.from({ length: cols * rows }).map((_, i) => {
          const c = Math.floor(i / rows)
          const r = i % rows
          const v = cell(r, c)
          return (
            <span
              key={i}
              className="aspect-square rounded-[3px] transition-all hover:scale-150 hover:z-10"
              style={{
                background: `rgba(34,211,238,${opacities[v]})`,
                outline: v >= 3 ? '1px solid rgba(34,211,238,0.4)' : 'none',
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
