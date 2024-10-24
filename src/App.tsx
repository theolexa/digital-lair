import { useState } from 'react'
import { useFiglet } from './useFiglet'


function App() {
  const bannerName = "the"
  const bannerSurname = "olexa"
  const bannerDomain = ".dev"
  const figletStandardName = useFiglet(bannerName + bannerSurname + bannerDomain)

  return (
    <>
      <pre>{figletStandardName}</pre>
    </>
  )
}

export default App
