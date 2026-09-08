/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.css",
    "./src/components/**/*.{jsx,tsx}"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      'mobile': '480px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
      'wide': '1440px',
    },
    extend: {
      colors: {
        // Swiss Editorial Newsprint Palette - High Contrast
        'bg-primary': '#F9F9F6',       /* Warm Newsprint Paper */
        'bg-secondary': '#FFFFFF',     /* Pure Sheet White */
        'bg-surface': '#F0EDE6',       /* Shaded Editorial Area */
        'bg-subtle': '#E6E2D8',        /* Ledger Paper Tint */
        'bg-card': '#FFFFFF',          /* Card Surface */
        'bg-inverse': '#0A0A0A',       /* Inverted Dark Fill */

        'text-primary': '#0A0A0A',     /* Solid Deep Ink Black */
        'text-secondary': '#1C1B18',   /* Dark Charcoal Ink - High Visibility */
        'text-muted': '#33322E',       /* Deep Slate Ink - Highly Visible & Dark */
        'text-inverse': '#FFFFFF',     /* Pure White on dark fill */

        'border-primary': '#0A0A0A',   /* 1px Solid Ink Rule */
        'border-strong': '#0A0A0A',    /* Structural Rule */
        'border-subtle': '#C4BFB2',    /* Distinct Column Divider */
        'border-hairline': 'rgba(10, 10, 10, 0.28)',

        'accent': '#CC0000',           /* Swiss Electric Red */
        'accent-hover': '#9E0000',
        'accent-subtle': 'rgba(204, 0, 0, 0.12)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        body: ['"Lora"', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Menlo', 'Consolas', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.12em' }],
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.08em' }],
        'sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'base': ['1rem', { lineHeight: '1.65', letterSpacing: '-0.01em' }],
        'lg': ['1.125rem', { lineHeight: '1.55', letterSpacing: '-0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.45', letterSpacing: '-0.02em' }],
        '2xl': ['1.5rem', { lineHeight: '1.35', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.03em' }],
        '4xl': ['clamp(2.25rem, 1.8rem + 1.8vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.03em' }],
        '5xl': ['clamp(2.75rem, 2rem + 3vw, 4.25rem)', { lineHeight: '1.08', letterSpacing: '-0.04em' }],
        '6xl': ['clamp(3.5rem, 2.5rem + 4vw, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.04em' }],
        '7xl': ['clamp(4.25rem, 3rem + 5vw, 7rem)', { lineHeight: '0.98', letterSpacing: '-0.05em' }],
        '8xl': ['clamp(5rem, 3.5rem + 6.5vw, 8.5rem)', { lineHeight: '0.94', letterSpacing: '-0.05em' }],
      },
      borderRadius: {
        DEFAULT: '0',
        'none': '0',
        'sm': '0',
        'md': '0',
        'lg': '0',
        'xl': '0',
        '2xl': '0',
        'full': '0',
      },
      boxShadow: {
        'none': '0 0 0 transparent',
        'hard': '4px 4px 0px 0px #111111',
        'hard-sm': '2px 2px 0px 0px #111111',
        'hard-accent': '4px 4px 0px 0px #CC0000',
        'hard-surface': '4px 4px 0px 0px #DDD9CF',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.05em',
        'wider': '0.1em',
        'widest': '0.18em',
        'editorial': '0.22em',
      },
      borderWidth: {
        'hairline': '1px',
        'strong': '2px',
        'heavy': '3px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.5rem',
          lg: '2.5rem',
          xl: '3rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1380px',
        },
      },
    },
  },
  plugins: [],
}