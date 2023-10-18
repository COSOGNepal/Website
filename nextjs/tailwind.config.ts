import type { Config } from "tailwindcss";

// import { calcLength } from "framer-motion";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "main-gradient":
          "linear-gradient(223deg, rgba(244, 68, 46, 0.20) 0%, rgba(3, 2, 34, 0.20) 100%), radial-gradient(139.09% 130.87% at 23.16% -57.28%, #959577 0%, #020122 100%)",
      },
      colors: {
        "btn-pri": "#6384D1",
        "btn-sec": "#6384D12A",
        "blue-sec": "#161449",
        "btn-sec-hover": "#6384D14A",
        "dark-pri": "#0B0A27",
        "main-txt": "#2D2335",
        "sec-txt": "#675C71",
        overlay: "rgba(0,0,0,0.35)",
        "gray-custom": "#C8C8C8",
      },
      fontSize: {
        huge: "72px",
        heading: "32px",
        "sub-heading": "24px",
        small: "16px",
      },
      borderRadius: {
        md: "15px",
      },
      boxShadow: {
        goals: "0px 4px 90px rgba(155, 155, 155, 35%)",
      },
      gridTemplateRows: {
        "prjt-min-brk": "300px 1fr",
      },
      animation: {
        "move-random-1": `random ${Math.round(
          Math.random() * 50 + 50
        )}s linear infinite`,
        "move-random-2": `random2 ${Math.round(
          Math.random() * 50 + 50
        )}s linear infinite`,
        "move-random-3": `random3 ${Math.round(
          Math.random() * 50 + 50
        )}s linear infinite`,
        "move-random-4": `random4 ${Math.round(
          Math.random() * 50 + 50
        )}s linear infinite`,
        "move-random-5": `random5 ${Math.round(
          Math.random() * 50 + 50
        )}s linear infinite`,
        "move-random-6": `random6 ${Math.round(
          Math.random() * 50 + 50
        )}s linear infinite`,
        "move-random-7": `random7 ${Math.round(
          Math.random() * 50 + 50
        )}s linear infinite`,
        "move-random-8": `random8 ${Math.round(
          Math.random() * 50 + 50
        )}s linear infinite`,
        "move-random-9": `random9 ${Math.round(
          Math.random() * 50 + 50
        )}s linear infinite`,
        "move-random-10": `random10 ${Math.round(
          Math.random() * 50 + 50
        )}s linear infinite`,
        "move-random-11": `random11 ${Math.round(
          Math.random() * 50 + 50
        )}s linear infinite`,
        "move-random-12": `random12 ${Math.round(
          Math.random() * 50 + 50
        )}s linear infinite`,
        "move-random-13": `random13 ${Math.round(
          Math.random() * 50 + 50
        )}s linear infinite`,
        "move-random-14": `random14 ${Math.round(
          Math.random() * 50 + 50
        )}s linear infinite`,
      },
      keyframes: {
        random: {
          "0%,100%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },

          "50%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },
        },
        random2: {
          "0%,100%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },

          "50%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },
        },
        random3: {
          "0%,100%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },

          "50%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },
        },
        random4: {
          "0%,100%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },

          "50%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },
        },
        random5: {
          "0%,100%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },

          "50%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },
        },
        random6: {
          "0%,100%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },

          "50%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },
        },
        random7: {
          "0%,100%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },

          "50%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },
        },
        random8: {
          "0%,100%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },

          "50%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },
        },
        random9: {
          "0%,100%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },

          "50%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },
        },
        random10: {
          "0%,100%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },

          "50%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },
        },
        random11: {
          "0%,100%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },

          "50%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },
        },
        random12: {
          "0%,100%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },

          "50%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },
        },
        random13: {
          "0%,100%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },

          "50%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },
        },
        random14: {
          "0%,100%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },

          "50%": {
            top: `calc(100vh * ${Math.random() * 1.5})`,
            left: `calc(100vw * ${Math.random() * 1.5})`,
          },
        },
      },
      plugins: [],
    },
  },
};
export default config;
