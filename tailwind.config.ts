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
        primary: '#26E8A2',
        secondary: '#2FFFB4',
        tertiary: '#274A3D',
        'light-gray': '#EDEEF0',
        'light-purple': '#EBEEFD',
      },
    },
  },
  plugins: [],
}
export default config
