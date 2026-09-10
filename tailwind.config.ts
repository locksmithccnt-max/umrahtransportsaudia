import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0B0B0D',
        'bg-surface': '#141416',
        'bg-elevated': '#1C1C1F',
        'gold': '#C9A24B',
        'gold-hover': '#E0BB63',
        'text-primary': '#F5F3EF',
        'text-secondary': '#A8A6A1',
        'border-subtle': '#2A2A2D',
        'success': '#4CAF7D',
      },
      fontFamily: {
        display: ['Fraunces', 'Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        arabic: ['"Noto Naskh Arabic"', 'Cairo', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
