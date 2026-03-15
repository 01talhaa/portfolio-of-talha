import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Ultra-Premium true black system (Vercel/Linear aesthetic)
        'bg-primary': '#000000',
        'bg-secondary': '#0a0a0a',
        'bg-tertiary': '#111111',
        'bg-hover': '#1a1a1a',
        
        // Premium monochrome text
        'text-primary': '#ffffff',
        'text-secondary': '#a1a1aa', // Zinc 400
        'text-muted': '#71717a', // Zinc 500
        
        // Premium silver/white accents (replacing gold/teal)
        'accent-gold': {
          '50': '#fafafa',
          '100': '#f4f4f5',
          '200': '#e4e4e7',
          '300': '#d4d4d8',
          '400': '#a1a1aa',
          '500': '#71717a',
          'light': '#ffffff',
          'lighter': '#f4f4f5',
        },
        'accent-teal': {
          '50': '#fafafa',
          '100': '#f4f4f5',
          '200': '#e4e4e7',
          '300': '#d4d4d8',
          '400': '#a1a1aa',
          '500': '#71717a',
          'light': '#ffffff',
        },
        'accent-slate': {
          '100': '#27272a',
          '200': '#3f3f46',
          '300': '#52525b',
        },
        
        // Crisp barely-visible borders
        'border-light': 'rgba(255,255,255,0.08)',
        'border-medium': 'rgba(255,255,255,0.15)',
        'card-bg': 'rgba(255,255,255,0.01)',
        'card-border': 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'gentle-glow': 'glow 4s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        'glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
