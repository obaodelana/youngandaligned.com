/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Logo primaries: #1800ad (electric blue) and #ff751f (vibrant orange).
        // Palette built for youthful clarity without cheap gradients.
        ink: '#1800ad',
        'ink-soft': '#4A47A3',
        'ink-deep': '#0E007A',
        marble: '#F4F5FF',
        plaster: '#FFFFFF',
        brand: '#ff751f',
        'brand-soft': '#FF9A5B',
        'brand-deep': '#E56012',
        'brand-pale': '#FFF0E6',
        jade: '#0E007A',
        'jade-soft': '#1800ad',
        'jade-deep': '#08004D',
        stone: '#E6E8F7',
        'stone-deep': '#C8CBE5',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        wide2: '0.1em',
        wide3: '0.2em',
      },
      maxWidth: {
        prose2: '68ch',
      },
      transitionTimingFunction: {
        breath: 'cubic-bezier(0.45, 0, 0.2, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slow-pan': {
          '0%': { transform: 'scale(1.02) translate3d(0,0,0)' },
          '100%': { transform: 'scale(1.06) translate3d(0,-1.5%,0)' },
        },
        'line-grow': {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'top' },
        },
      },
      animation: {
        'fade-up': 'fade-up 900ms cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 1200ms cubic-bezier(0.22,1,0.36,1) both',
        'slow-pan': 'slow-pan 18s ease-in-out infinite alternate',
        'line-grow': 'line-grow 1400ms cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};