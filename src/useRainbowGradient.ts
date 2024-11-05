const seed = Math.floor(Math.random() * (256 + 1))

function hslToRgb(h: number, s: number, l: number) {
  h /= 360;
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs((h % 2) / 2 - 1));
  let m = l - c / 2;

  let r, g, b;
  if (h < 1 / 6) {
    r = c;
    g = x + m;
    b = m;
  } else if (h < 1 / 2) {
    r = x + m;
    g = c;
    b = m;
  } else if (h < 2 / 3) {
    r = m;
    g = c;
    b = x + m;
  } else if (h < 1) {
    r = m;
    g = x + m;
    b = c;
  } else {
    r = c;
    g = m;
    b = x + m;
  }

  r = Math.round(r * 255);
  g = Math.round(g * 255);
  b = Math.round(b * 255);

  return `rgb(${r}, ${g}, ${b})`
}

// get list of rgb collors
function generateRainbowGradient(seed: number, numLines:number, numColors: number) {
  const rgbColors = []
  const hueStep = 1 / (numColors - 1); // Adjusted for zero-based indexing

  for (let line = 0; line < numLines; line++) {
    const lineHue = (seed + line * hueStep) % 1; // Calculate hue for the current line
    const lineColors = []

    for (let i = 0; i < numColors; i++) {  
      const hue = (lineHue + i * hueStep) % 1;
      const saturation = 1;
      const lightness = 0.5;

      const hslColor = `hsl(${hue * 360}, ${saturation * 100}%, ${lightness * 100}%)`;
      const match = hslColor.match(/\d+(\.\d+)?/g);

      if (match) {
        const [h, s, l] = match.map(Number);
        lineColors.push(hslToRgb(h, s, l));
      } else {
        console.error("Error parsing HSL color:", hslColor);
      }
    }
    rgbColors.push(lineColors)
  }
  // console.log(rgbColors)
  return rgbColors;
}

// html ASCII text & styles
function bunnerColorsMap(textLines: string[], colorLines: string[][]) {
  const htmlCss = []

  for (let i = 0; i < textLines.length; i++) {
    const linehtmlCss = []
    const currentTextLine = textLines[i]
    const currentColorLines = colorLines[i]
    for (let j = 0; j < currentTextLine.length; j++) {
      linehtmlCss.push(`<span style={{color: "${currentColorLines[j]}"}} data-text="${currentTextLine[j].replace(/>/g, '&gt;').replace(/</g, '&lt;')}"><span>${currentTextLine[j].replace(/>/g, '&gt;').replace(/</g, '&lt;')}</span></span>`)
    }
    htmlCss.push('<div>' + linehtmlCss.join('') + '</div>')
  }
  return htmlCss.join('')
}

export function bunnerColorsMap2(textLines: string[], colorLines: string[][]) {
  const textColor = []

  for (let i = 0; i < textLines.length; i++) {
    const lineTextColor = []
    const currentTextLine = textLines[i]
    const currentColorLines = colorLines[i]
    for (let j = 0; j < currentTextLine.length; j++) {
      lineTextColor.push({value: currentTextLine[j], color: currentColorLines[j]})
    }
    textColor.push(lineTextColor)
  }
  return textColor
}


export function applyRainbowFiglet(bannerText: string) {
  const bannerLines = bannerText.split('\n')
  const rgbLineColors = generateRainbowGradient(seed, bannerLines.length, bannerLines[0].length)
  const htmlCss = bunnerColorsMap2(bannerLines, rgbLineColors)
  // console.log(htmlCss)
  return htmlCss
}
