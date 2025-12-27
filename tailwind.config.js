/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Celadon/Wash - Use for backgrounds or light accents
          50: '#f0f9f6', 
          100: '#d1f0e4', 
          
          // Mint/Sage - Use for subtle borders or secondary elements
          200: '#a3e1cb', 
          300: '#72cdb1',
          
          // Emerald/Growth - The "Action" color for buttons and highlights
          500: '#10b981', // Emerald 500
          600: '#059669', // Emerald 600 (Darker for hover states)
          
          // Deep Forest - Premium Authority for headings and footers
          700: '#065f46', 
          800: '#064e3b', 
          900: '#022c22', // The "Black" of your brand
        },
        // Neutral surfaces to let the green pop
        app: {
          DEFAULT: '#f9fafb',
          soft: '#ffffff',
        },
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f1f5f9',
        },
        text: {
          primary: '#022c22',   // Using the Deepest Green instead of pure black
          secondary: '#4b5563', // Soft gray
          muted: '#9ca3af',
        },
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem', // Added for that modern "pill" or card look
      },
      boxShadow: {
        soft: '0 4px 12px rgba(2, 44, 34, 0.05)', // Tinted with deep green
        card: '0 8px 24px rgba(2, 44, 34, 0.08)', // Tinted with deep green
      },
    },
  },
  plugins: [],
}