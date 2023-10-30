/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        groovys: ['var(--font-groovy-script)'],
        groovyf: ['var(--font-groovy-fruity)'],
        guny: ['var(--font-gunydrops)'],
        naskle: ['var(--font-naskle)'],
        nectarine: ['var(--font-nect)'],
        grotesk: ['var(--font-grotesk)'],
        oswald: ['var(--font-oswald)']
      },
      colors: {
        'bscs-yellow': '#DECC6D',
        'bscs-yellow-bright': '#ffe974',
        'bscs-orange': '#E55937',
        'bscs-hot-purple':'#bd005b'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["retro", "dark"],
  },
}