import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Inter: 'Inter',
      },
      colors: {
        primary: '#274A3D',
        secondary: '#26E8A2',
        'light-gray': '#EDEEF0',
        'light-purple': '#EBEEFD',
        'custom-gray': '#8E8E8E',
      },
    },
  },
  plugins: [],
}
export default config
