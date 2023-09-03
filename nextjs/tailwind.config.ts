import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme:{
    extend:{
    backgroundImage:{
      "main-gradient": "linear-gradient(223deg, rgba(244, 68, 46, 0.20) 0%, rgba(3, 2, 34, 0.20) 100%), radial-gradient(139.09% 130.87% at 23.16% -57.28%, #959577 0%, #020122 100%)"
      }
    },
    colors:{
      "btn-pri": "#6384D1",
      "btn-sec": "#6384D12A",
      "btn-sec-hover": "#6384D14A",
    }
  },
  plugins:[]
}
export default config
