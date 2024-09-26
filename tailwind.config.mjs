/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu-mono': ['Ubuntu Mono', 'monospace']
      },
      colors: {
        primary: '#0099FF',
        secondary: '#DEF2FF',
        page: '#1E1421'
      }
    }
  },
  plugins: []
}
