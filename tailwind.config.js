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
        navy: {
          900: '#0B1120',
          base: '#0F172A', // Background Base
          card: '#1E293B', // Card / Section Background
          border: '#334155', // Border tone
          hover: '#273549',
        },
        accent: {
          blue: '#3B82F6', // Primary Accent (Electric Blue)
          cyan: '#06B6D4', // Secondary Accent (Cyan)
        },
        text: {
          primary: '#E5E7EB', // Light Gray / White
          secondary: '#9CA3AF', // Muted Gray
          muted: '#64748B',
        },
      },
      fontFamily: {
        mono: ['"Geist Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
