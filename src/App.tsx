import React from 'react'
import useFiglet from './useFiglet'
import { applyRainbowFiglet } from './useRainbowGradient'
import ColorBanner from './ColorBanner'


function App() {
  const bannerName = "theolexa.dev"
  const figletStandardName = useFiglet(bannerName)
  const rainbowFiglet = applyRainbowFiglet(figletStandardName)

  return (
      <ColorBanner data={rainbowFiglet} />
  )
}

export default App
