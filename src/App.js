import React from 'react'
import Board from './Board'

const App = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Board />
    </div>
  )
}

export default App
