module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        ink: '#0e0b09',
        soot: '#17120f',
        char: '#231b16',
        bone: '#f4eee1',
        dust: '#b9ae9c',
        zia: '#ffc72c',
        chile: '#d1121f',
        ember: '#ff5a1f',
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'Impact', 'sans-serif'],
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        label: '0.22em',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
