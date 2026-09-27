export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: '#FAFAFA',
          surface: '#FFFFFF',
          'surface-hover': '#F3F4F6',
          border: '#E5E7EB',
          primary: '#222222',
          muted: '#5F6368',
          accent: '#B5651D',
          'accent-hover': '#8F4F16',
          'accent-text': '#000000',
        },
        bg: '#FAFAFA',
        surface: '#FFFFFF',
        'surface-hover': '#F3F4F6',
        accent: '#B5651D',
        'accent-hover': '#8F4F16',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        theme: '14px',
      },
    },
  },
  plugins: [],
};