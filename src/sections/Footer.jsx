import React from 'react'
import { PROFILE } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-md border border-white/10 bg-ink-800">
              <span className="text-cyan-accent font-mono text-[10px] font-bold">SF</span>
            </span>
            <span className="text-xs text-zinc-500 font-mono">
              {PROFILE.name} · © {year}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-600">
            <span>Designed & built with care</span>
            <span className="w-1 h-1 rounded-full bg-cyan-accent animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  )
}
