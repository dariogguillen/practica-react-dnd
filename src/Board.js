import React, { useState } from 'react'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Knight from './Knight'
import Square from './Square'

const renderSquares = (i, [knightX, knightY], setKnightPosition) => {
  const x = i % 8
  const y = Math.floor(i / 8)
  const isKnightHere = x === knightX && y === knightY
  const black = (x + y) % 2 === 1
  const piece = isKnightHere ? <Knight /> : null

  return (
    <React.Fragment key={i}>
      <Square
        setKnightPosition={setKnightPosition}
        knightPosition={[knightX, knightY]}
        position={[x, y]}
        black={black}
        style={{ width: '12.5%', height: '12.5%' }}
      >
        {piece}
      </Square>
    </React.Fragment>
  )
}

const Board = () => {
  const [knightPosition, setKnightPosition] = useState([0, 0])
  const squares = setKnightPosition => {
    const squares = []
    for (let i = 0; i < 64; i++) {
      squares.push(renderSquares(i, knightPosition, setKnightPosition))
    }
    return squares
  }
  return (
    <DragDropContextProvider backend={HTML5Backend}>
      <div
        style={{
          width: '800px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignContent: 'center'
        }}
      >
        {squares(setKnightPosition, knightPosition)}
      </div>
    </DragDropContextProvider>
  )
}

export default Board
