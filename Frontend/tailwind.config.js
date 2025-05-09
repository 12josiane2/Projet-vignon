// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5faff',
          100: '#e0f2ff',
          200: '#b3e0ff',
          300: '#80ccff',
          400: '#4db8ff',
          500: '#1aa3ff',
          600: '#008ae6', // 👈 celle-ci est utilisée
          700: '#0070bf', // 👈 celle-ci aussi
          800: '#005699',
          900: '#003d73',
        },
        secondary: {
          600: '#ff9800',
          700: '#fb8c00',
        },
        noir: '#111827',
        blanc: '#ffffff',
      },
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
        display: ['Feather Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
