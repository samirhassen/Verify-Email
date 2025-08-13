/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      container: {
        center: true,
        padding: { DEFAULT: '1rem', md: '1.5rem' },
        screens: { '2xl': '1200px' },
      },
      extend: {
        colors: {
          background: 'rgb(var(--background))',
          foreground: 'rgb(var(--foreground))',
          surface: 'rgb(var(--surface))',
          border: 'rgb(var(--border))',
          muted: 'rgb(var(--muted))',
          primary: {
            DEFAULT: 'rgb(var(--primary))',          // #2563EB
            foreground: 'rgb(var(--primary-foreground))',
          },
        },
        borderRadius: {
          md: '10px',
          lg: '12px',
          xl: '16px',
          '2xl': '24px',
        },
        boxShadow: {
          card: '0 8px 20px rgba(2, 12, 27, 0.06)',
        },
        fontFamily: {
          sans: ['Satoshi', 'Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji'],
        },
      },
    },
    plugins: [],
  }
  