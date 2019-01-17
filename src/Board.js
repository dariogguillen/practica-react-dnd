import React from 'react'
import Knight from './Knight'
import Square from './Square'

const renderSquares = (i, [knightX, knightY]) => {
  const x = i % 8
  const y = Math.floor(i / 8)
  const isKnightHere = x === knightX && y === knightY
  const black = (x + y) % 2 === 1
  const piece = isKnightHere ? <Knight /> : null

  return (
    <div>
      <Square black={black} style={{ width: '12.5%', height: '12.5%' }}>
        {piece}
      </Square>
    </div>
  )
}

const Board = ({ knightPosition }) => {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquares(i, knightPosition))
  }
  return (
    <div
      style={{
        width: '800px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center'
      }}
    >
      {squares}
    </div>
  )
}

export default Board
