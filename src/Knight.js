import React from 'react'
import { ITEM_TYPES } from './constants'
import { DragSource } from 'react-dnd'

const knightSource = {
  beginDrag(props) {
    return {}
  }
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
})

const Knight = ({ connectDragSource, isDragging }) =>
  connectDragSource(
    <div
      style={{
        fontSize: '50px',
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
      }}
    >
      ♘
    </div>
  )

export default DragSource(ITEM_TYPES.KNIGHT, knightSource, collect)(Knight)
