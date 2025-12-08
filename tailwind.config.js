/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        neon: '#76b900',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1, filter: 'drop-shadow(0 0 6px #76b900aa)' },
          '50%': { opacity: 0.8, filter: 'drop-shadow(0 0 15px #76b900)' },
        },
      },
      animation: {
      float: 'float 3s ease-in-out infinite',
      'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
    },
    },
  },
  plugins: [],
}