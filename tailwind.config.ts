import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')
const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    },
    extend: {
      fontFamily: {
        sahel: ['var(--font-sahel)'],
        poppins: ['var(--font-poppins)']
      },
    }
  },
  plugins: [ plugin(function({ matchUtilities, theme }: any) {
    matchUtilities(
        {
            'bg-gradient': (angle: number) => ({
                'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
            }),
        },
        {
            values: Object.assign(
                theme('bgGradientDeg', {}),
                {
                    10: '10deg',
                    15: '15deg',
                    20: '20deg',
                    25: '25deg',
                    30: '30deg',
                    45: '45deg',
                    60: '60deg',
                    90: '90deg',
                    120: '120deg',
                    180: '180deg',
                }
            )
        }
    )
})]
}
export default config
