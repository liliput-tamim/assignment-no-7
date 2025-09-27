import { useState } from 'react'
import Banner from './components/Banner'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [inProgressCount, setInProgressCount] = useState(5)
  const [resolvedCount, setResolvedCount] = useState(12)

  return (
    <>
      <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />
      <Footer />
    </>
  )
}

export default App
