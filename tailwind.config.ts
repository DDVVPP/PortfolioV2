import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xs-345': '345px',
        'xs-362': '362px',
        md: '820px',
        'md-projects': '1180px',
        '2xl': '1400px',
        '3xl': '2000px',
      },
      colors: {
        dark: {
          '800': '#182335',
          '700': '#1d2838',
        },
        corral: '#ff9292',
        'red-400': '#ff7474',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-10deg)',
          },
          '50%': {
            transform: 'rotate(10deg)',
          },
        },
        'bounce-small': {
          '0%': {
            transform: 'translateY(2px)',
          },
          '40%': {
            transform: 'translateY(-3px)',
          },
          '100%': {
            transform: 'translateY(2px)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.3s ease-out',
        'bounce-small': 'bounce-small 1s infinite ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
