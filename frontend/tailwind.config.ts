import type { Config } from "tailwindcss";
import tailwindcssAnimated from 'tailwindcss-animated';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        redHat: ['Red Hat Display', 'sans-serif'],
        redRose: ['Red Rose', 'sans-serif'],
      },
      backgroundImage: {
        'custom-bg': "url('/images/background.jpg')",
      },
    },
  },
	plugins: [
		tailwindcssAnimated,
  ],
};

export default config;