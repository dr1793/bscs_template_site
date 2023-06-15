import localFont from "next/font/local";
import { NextFontWithVariable } from "next/dist/compiled/@next/font/dist/types.js";

//=========================================================================================
// Note: Update fonts here at locations 1 and 2. Then, update the "tailwind.config.js" file
//=========================================================================================

type Fonts = {
  [key: string]: NextFontWithVariable;
};

// 1
const _groovy_script = localFont({
  src: "./_fonts/GroovyScript-Regular.ttf",
  variable: "--font-groovy-script",
});

const _groovy_fruity = localFont({
  src: "./_fonts/GroovyFruity.woff2",
  display: "swap",
  variable: "--font-groovy-fruity",
});

const _gunydrops = localFont({
  src: "./_fonts/Gunydrops.otf",
  variable: "--font-gunydrops",
});

const _naskle = localFont({
  src: "./_fonts/Naskle-Regular.otf",
  variable: "--font-naskle",
});

const _nectarine = localFont({
  src: "./_fonts/Nectarine.ttf",
  variable: "--font-nect",
});

// 2
const fonts: Fonts = {
  GroovyScript: _groovy_script,
  GroovyFruity: _groovy_fruity,
  GunyDrops: _gunydrops,
  Naskle: _naskle,
  Nectarine: _nectarine,
};

const fontVariables = Object.values(fonts).reduce(
  (accumulator, value) => accumulator + ` ${value.variable}`,
  ""
);

export default fontVariables;
