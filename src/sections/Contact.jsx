import React from 'react'
import { ArrowUpRight, Mail, Github, Linkedin, Send } from 'lucide-react'
import { PROFILE } from '../data/content'
import { Reveal, Eyebrow } from '../components/Primitives'

const LINKS = [
  { label: 'Email',       value: PROFILE.email,                    href: `mailto:${PROFILE.email}`,    icon: Mail },
  { label: 'GitHub',      value: '@' + 'farhansyedAli',            href: PROFILE.github,               icon: Github },
  { label: 'LinkedIn',    value: 'in/syed-farhan-ali-shah',        href: PROFILE.linkedin,             icon: Linkedin },
  { label: 'Hugging Face',value: 'syedfarhanali99',                href: PROFILE.huggingface,          icon: Send },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Big atmospheric gradient */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-x-0 top-0 h-full opacity-60"
          style={{ background: 'radial-gradient(ellipse at center top, rgba(34,211,238,0.10), transparent 60%)' }}
        />
        <div
          className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.15), transparent 60%)' }}
        />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <Reveal>
          <Eyebrow number="05">Contact</Eyebrow>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display-title text-5xl sm:text-7xl lg:text-8xl text-zinc-50 mt-6 leading-[0.92]">
            Let’s build <br />
            <span className="text-gradient italic font-light">something real.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-8 text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
            I’m open to AI/ML internships, research collaborations, and engineering roles
            where I can build production-grade intelligent systems. The fastest way to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <a
            href={`mailto:${PROFILE.email}`}
            className="group inline-flex items-center gap-3 mt-10 px-8 py-4 text-base font-medium text-ink-950 bg-zinc-100 hover:bg-white rounded-full transition-all hover:scale-[1.02]"
          >
            <span>{PROFILE.email}</span>
            <span className="w-7 h-7 rounded-full bg-ink-950 flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight size={14} className="text-zinc-100" />
            </span>
          </a>
        </Reveal>

        {/* Links grid */}
        <Reveal delay={0.45}>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {LINKS.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="group block p-4 rounded-xl border border-white/[0.06] hover:border-cyan-accent/30 bg-ink-900/30 hover:bg-ink-800/40 transition-all text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon size={14} className="text-zinc-500 group-hover:text-cyan-accent transition-colors" />
                  <ArrowUpRight size={12} className="text-zinc-600 group-hover:text-cyan-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-zinc-600 mb-1">
                  {label}
                </div>
                <div className="text-sm text-zinc-200 font-medium truncate">
                  {value}
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
