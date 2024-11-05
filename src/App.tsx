import React from 'react'
import useFiglet from './useFiglet'
import { applyRainbowFiglet } from './useRainbowGradient'
import ColorBanner from './ColorBanner'
import { Route, Routes } from "react-router-dom"


function App() {
  const bannerName = "theolexa.dev"
  const figletStandardName = useFiglet(bannerName)
  const rainbowFiglet = applyRainbowFiglet(figletStandardName)

  return (
    <div className='banner-line'>
      <Routes>
        <Route path="/" element={<ColorBanner data={rainbowFiglet} />} />
        <Route path="/projects" element={<div>projects</div>} />
      </Routes>
    </div>
  )
}

export default App
