import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    colors: {
      dark: 'rgb(27, 27, 27)',
      white: '#ffffff',
      yellowText: '#f2ac34',
      orangeText: '#e96d2e',
      greyText: '#1f1f1f',
      blueButton: '#107a9f',
      red: '#ff1d1d',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)'],
      },
      backgroundImage: {
        buttonOrangeGradient:
          'linear-gradient(to right, #e96d2e 0%, #e0971c  51%, #ff9232  100%)',
        darkButtonOrangeGradient:
          'linear-gradient(to right, #e0971c 0%, #e96d2e  51%, #e0971c  100%)',
      },
    },
  },
  plugins: [],
}
export default config
