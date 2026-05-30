/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary brand palette built around #005fb5
        brand: {
          50: '#eef6fd',
          100: '#d6eafa',
          200: '#aed4f5',
          300: '#7bb8ed',
          400: '#4595e0',
          500: '#1a76d1',
          600: '#005fb5', // Primary
          700: '#004c93',
          800: '#053f76',
          900: '#0a3661',
          950: '#072243',
        },
        // Neutral typography / surface scale
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d4d9e1',
          300: '#aeb7c5',
          400: '#8290a3',
          500: '#5f6e84',
          600: '#4a5668',
          700: '#3c4555',
          800: '#2b3240',
          900: '#1a1f29',
          950: '#0e1117',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(60% 60% at 50% 0%, rgba(0,95,181,0.10) 0%, rgba(0,95,181,0) 70%)',
        'brand-gradient':
          'linear-gradient(135deg, #005fb5 0%, #1a76d1 50%, #4595e0 100%)',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(14,17,23,0.04), 0 8px 24px rgba(14,17,23,0.06)',
        'soft-lg': '0 1px 3px rgba(14,17,23,0.05), 0 20px 50px rgba(7,34,67,0.10)',
        'brand-glow': '0 20px 60px -15px rgba(0,95,181,0.45)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
