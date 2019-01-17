import React from 'react'
import Board from './Board'

const App = () => (
  <div
    className="App"
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Board knightPosition={[0, 0]} />
  </div>
)

export default App
