export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
  keyframes: {
    borderGlow: {
      '0%, 100%': {
        boxShadow: '0 0 8px rgba(37, 99, 235, 0.3), 0 0 16px rgba(37, 99, 235, 0.15)'
      },
      '50%': {
        boxShadow: '0 0 12px rgba(37, 99, 235, 0.5), 0 0 24px rgba(37, 99, 235, 0.25)'
      }
    }
  },
  animation: {
    glow: 'borderGlow 2.8s ease-in-out infinite'
  },
  colors: {
    primaryGlow: '#2563eb' // same as your site accent color
  }
}
  },
  plugins: [],
};
