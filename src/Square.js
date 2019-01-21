import React from 'react'
import { ITEM_TYPES } from './constants'
import { DropTarget } from 'react-dnd'

const squareTarget = {
  drop(props) {
    if (
      props.position[0] !== props.knightPosition[0] ||
      props.position[1] !== props.knightPosition[1]
    ) {
      props.setKnightPosition([null, null])
      setTimeout(() => {
        props.setKnightPosition(props.position)
      }, 500)
    }

    // setKnightPosition(position)
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
})

const Square = ({ black, children, connectDropTarget, isOver }) => {
  const bg = black ? 'black' : 'white'
  const stroke = black ? 'white' : 'black'
  return connectDropTarget(
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
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      {children}
      {isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow'
          }}
        />
      )}
    </div>
  )
}

export default DropTarget(ITEM_TYPES.KNIGHT, squareTarget, collect)(Square)
