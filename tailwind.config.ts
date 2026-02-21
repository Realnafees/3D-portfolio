import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        'dark-secondary': '#1a1a1a',
        'dark-tertiary': '#2a2a2a',
        accent: '#ffffff',
      },
      fontFamily: {
        sans: ['InterVar', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
