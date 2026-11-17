/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: '#0A0B09',
        substrate: '#0E0F0C',
        surface: '#141612',
        elevated: '#1B1E18',
        card: '#121410',
        lime: {
          400: '#B6F23A',
          500: '#9EE022',
          900: '#2A4A0A',
        },
        paper: '#F1F0EC',
        dim: '#71766D',
        faint: '#353932',
      },
      fontFamily: {
        mono: ['"Geist Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Syne"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
      },
    },
  },
  plugins: [],
}
