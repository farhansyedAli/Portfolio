/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          950: '#05060A',
          900: '#0A0B12',
          800: '#0F111A',
          700: '#161824',
          600: '#1E2030',
          500: '#2A2D3E',
        },
        cyan: {
          accent: '#22D3EE',
        },
        violet: {
          accent: '#A78BFA',
        },
      },
      animation: {
        'fade-up':      'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in':      'fadeIn 0.6s ease both',
        'shimmer':      'shimmer 8s linear infinite',
        'float':        'float 6s ease-in-out infinite',
        'pulse-slow':   'pulseSlow 4s ease-in-out infinite',
        'gradient-x':   'gradientX 12s ease infinite',
        'marquee':      'marquee 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: 0 },
          '100%': { opacity: 1 },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: 0.4 },
          '50%':      { opacity: 0.8 },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'grid':          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        'noise':         "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E\")",
        'glow-radial':   'radial-gradient(circle at center, rgba(34,211,238,0.18), transparent 70%)',
        'glow-violet':   'radial-gradient(circle at center, rgba(167,139,250,0.18), transparent 70%)',
      },
    },
  },
  plugins: [],
}
