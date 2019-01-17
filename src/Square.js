import React from 'react'

const Square = ({ black, children }) => {
  const bg = black ? 'black' : 'white'
  const stroke = black ? 'white' : 'black'
  return (
    <div
      style={{
        boxSizing: 'border-box',
        backgroundColor: bg,
        border: 'solid 1px black',
        color: stroke,
        width: '100px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {children}
    </div>
  )
}

export default Square
