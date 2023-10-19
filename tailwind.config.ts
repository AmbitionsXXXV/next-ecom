import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: '#70eae4',
          secondary: '#87e241',
          accent: '#84f9b3',
          neutral: '#3c233e',
          'base-100': '#dfe7f1',
          info: '#97caf7',
          success: '#28ccbc',
          warning: '#ab8c12',
          error: '#e25e55'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
export default config
