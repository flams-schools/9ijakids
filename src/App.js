import React, { useState } from 'react'
import GameState from './context/GameState'
import Home from './pages/Home'

function App() {
  return (
    <GameState>
      <Home />
    </GameState>
  )
}

export default App
