/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B5E20',
          dark: '#124116',
          light: '#2E7D32',
        },
        secondary: {
          DEFAULT: '#7CB342',
          light: '#9CCC65',
          dark: '#558B2F',
        },
        soil: {
          DEFAULT: '#6D4C1F',
          dark: '#4E3615',
          light: '#8D6633',
        },
        cream: {
          DEFAULT: '#F5EEDC',
          light: '#FAF6ED',
          dark: '#EBDCB9',
        },
        surface: {
          DEFAULT: '#FAF6ED',
          card: '#FFFFFF',
          dark: '#142E16',
        },
        brandText: {
          DEFAULT: '#122A14',
          muted: '#556B56',
          light: '#F5EEDC',
        },
        brandBorder: {
          DEFAULT: '#D8CEBA',
          light: '#E8E0D0',
          dark: '#2A4D2C',
        }
      },
      fontFamily: {
        sans: ['var(--font-sn-pro)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
