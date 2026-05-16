import React from 'react'
import { ArrowUpRight, Github, ExternalLink, Sparkles, Lightbulb, Wrench, Target } from 'lucide-react'
import { PROJECTS, SECONDARY_PROJECTS } from '../data/content'
import { Reveal, Eyebrow, SectionHeading, Tag } from '../components/Primitives'

export default function Work() {
  return (
    <section id="work" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-24">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow number="02">Selected Work</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading className="mt-4">
                Case studies, <br />
                <span className="text-gradient italic font-light">not just repos.</span>
              </SectionHeading>
            </Reveal>
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <Reveal delay={0.2}>
              <p className="text-zinc-500 leading-relaxed max-w-md">
                Four projects that demonstrate end-to-end thinking — from the problem framing
                through the model, the engineering, and the deployment.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Case studies */}
        <div className="space-y-24 md:space-y-32">
          {PROJECTS.map((p, i) => (
            <CaseStudy key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Secondary projects */}
        <div className="mt-28">
          <Reveal>
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                Also worth a look
              </h3>
              <div className="flex-1 ml-6 h-px bg-gradient-to-r from-white/[0.06] to-transparent" />
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {SECONDARY_PROJECTS.map((sp, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <a
                  href={sp.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block p-6 rounded-2xl border border-white/[0.06] hover:border-cyan-accent/30 bg-ink-900/40 hover:bg-ink-800/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Tag>{sp.tag}</Tag>
                    <ArrowUpRight
                      size={16}
                      className="text-zinc-600 group-hover:text-cyan-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                  <h4 className="text-zinc-100 font-medium text-base">
                    {sp.title}
                  </h4>
                  <p className="text-zinc-500 text-sm mt-1.5 leading-relaxed">
                    {sp.description}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ────────── Single case study ──────────
function CaseStudy({ project, index }) {
  const numberLabel = String(index + 1).padStart(2, '0')
  const accentRing = project.accent === 'violet'
    ? 'from-violet-500/20 via-violet-500/5 to-transparent'
    : 'from-cyan-500/20 via-cyan-500/5 to-transparent'

  return (
    <article className="relative">
      {/* Decorative number behind */}
      <Reveal>
        <div
          aria-hidden
          className="absolute -top-12 -left-2 sm:-left-6 font-mono text-[8rem] sm:text-[11rem] font-bold text-white/[0.02] select-none pointer-events-none"
        >
          {numberLabel}
        </div>
      </Reveal>

      <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: visual / mock */}
        <div className="lg:col-span-5">
          <Reveal y={32}>
            <ProjectVisual project={project} />
          </Reveal>
        </div>

        {/* Right: content */}
        <div className="lg:col-span-7 space-y-7">
          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Tag accent={project.accent}>{project.category}</Tag>
              <span className="text-zinc-700">·</span>
              <span className="text-xs font-mono text-zinc-500">{project.year}</span>
              {project.status === 'Live' && (
                <>
                  <span className="text-zinc-700">·</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                </>
              )}
            </div>

            <h3 className="display-title text-3xl sm:text-4xl text-zinc-50">
              {project.title}
            </h3>
            <p className="mt-3 text-zinc-400 text-base sm:text-lg leading-relaxed">
              {project.headline}
            </p>
          </Reveal>

          {/* Problem / Approach */}
          <Reveal delay={0.15}>
            <CaseBlock icon={Lightbulb} label="Problem">
              {project.problem}
            </CaseBlock>
          </Reveal>

          <Reveal delay={0.2}>
            <CaseBlock icon={Wrench} label="Approach">
              {project.approach}
            </CaseBlock>
          </Reveal>

          {/* Challenges & Outcomes side-by-side */}
          <Reveal delay={0.25}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-[0.18em] text-zinc-500">
                  <Sparkles size={12} /> Challenges
                </div>
                <ul className="space-y-2">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="text-sm text-zinc-400 leading-relaxed pl-4 relative">
                      <span className="absolute left-0 top-2.5 w-1.5 h-px bg-zinc-600" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-[0.18em] text-zinc-500">
                  <Target size={12} /> Outcomes
                </div>
                <ul className="space-y-2">
                  {project.outcomes.map((o, i) => (
                    <li key={i} className="text-sm text-zinc-300 leading-relaxed pl-4 relative">
                      <span
                        className={`absolute left-0 top-2.5 w-1.5 h-px ${
                          project.accent === 'violet' ? 'bg-violet-400' : 'bg-cyan-accent'
                        }`}
                      />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Stack */}
          <Reveal delay={0.3}>
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-zinc-500 mb-3">
                Stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((s, i) => (
                  <span key={i} className="tech-badge">{s}</span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Links */}
          <Reveal delay={0.35}>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-zinc-200 border border-white/10 hover:border-white/30 hover:bg-white/[0.04] rounded-full transition-all"
              >
                <Github size={13} />
                View on GitHub
                <ArrowUpRight size={12} className="text-zinc-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-ink-950 bg-zinc-100 hover:bg-white rounded-full transition-colors"
                >
                  <ExternalLink size={13} />
                  Live demo
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  )
}

function CaseBlock({ icon: Icon, label, children }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-[0.18em] text-zinc-500">
        <Icon size={12} /> {label}
      </div>
      <p className="text-zinc-300 leading-relaxed">
        {children}
      </p>
    </div>
  )
}

// ────────── Project visual (abstract terminal/diagram per project) ──────────
function ProjectVisual({ project }) {
  const accentColor = project.accent === 'violet' ? '#A78BFA' : '#22D3EE'
  const accentRgba  = project.accent === 'violet' ? 'rgba(167,139,250,' : 'rgba(34,211,238,'

  return (
    <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] rounded-2xl glass border border-white/[0.06] overflow-hidden group">
      {/* Glow */}
      <div
        className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
        style={{ background: `${accentRgba}0.4)` }}
      />
      <div className="absolute inset-0 bg-grid-fade opacity-30" />

      {/* Terminal-like content */}
      <div className="relative h-full flex flex-col p-6">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white/10" />
            <span className="w-2 h-2 rounded-full bg-white/10" />
            <span className="w-2 h-2 rounded-full bg-white/10" />
          </div>
          <span className="font-mono text-[10px] text-zinc-600">
            {project.id}.py
          </span>
        </div>

        {/* Code-ish content */}
        <div className="font-mono text-[11px] sm:text-xs space-y-2 flex-1">
          <CodeLine prefix="//" color="text-zinc-600">
            {project.category.toLowerCase()}
          </CodeLine>
          <CodeLine>
            <span className="text-zinc-500">def</span>{' '}
            <span style={{ color: accentColor }}>{project.id.replace(/-/g, '_')}</span>
            <span className="text-zinc-500">():</span>
          </CodeLine>
          {project.stack.slice(0, 4).map((s, i) => (
            <CodeLine key={i} indent={2}>
              <span className="text-zinc-500">import</span>{' '}
              <span className="text-zinc-300">{s.split(' ')[0].toLowerCase()}</span>
            </CodeLine>
          ))}
          <CodeLine indent={2}>
            <span className="text-zinc-600">...</span>
          </CodeLine>

          {/* Output area */}
          <div
            className="mt-6 p-3 rounded-lg border"
            style={{
              background: `${accentRgba}0.05)`,
              borderColor: `${accentRgba}0.2)`,
            }}
          >
            <div className="font-mono text-[10px] uppercase tracking-wider mb-2" style={{ color: accentColor }}>
              ▸ output
            </div>
            <div className="text-zinc-300 text-[11px] sm:text-xs leading-relaxed">
              {project.headline}
            </div>
          </div>
        </div>

        {/* Bottom metadata strip */}
        <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px] text-zinc-600">
          <span>{project.year}</span>
          <span style={{ color: accentColor }}>● {project.status}</span>
        </div>
      </div>
    </div>
  )
}

function CodeLine({ children, indent = 0, prefix = '', color = '' }) {
  return (
    <div className={`whitespace-pre ${color}`} style={{ paddingLeft: `${indent * 12}px` }}>
      {prefix && <span className="text-zinc-700 mr-1.5">{prefix}</span>}
      {children}
    </div>
  )
}
