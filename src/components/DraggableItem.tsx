import { useDrag } from 'react-dnd'
import { Trash2, Copy, Car } from 'lucide-react'

import { type LayoutElement } from '../types'
import { getElementDimensions } from '../utils/helpers'
import RenderElements from './RenderElements'
import { ROTATABLE_ELEMENTS } from '../utils/constants'

const DraggableItem = ({
  item,
  isSelected,
  onSelect,
  onRemove,
  onDuplicate,
  onRotate,
  scale,
}: {
  item: LayoutElement
  isSelected: boolean
  onSelect: () => void
  onRemove: () => void
  onDuplicate: () => void
  onRotate: () => void
  scale: number
}) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'placed',
    item: { id: item.id },
    collect: monitor => ({ isDragging: monitor.isDragging() }),
  })

  const dimensions = getElementDimensions(item.type)
  const isParking = item.type.includes('parking')
  const isOccupied = isParking && item.spotInfo?.occupied

  return (
    <div
      style={{
        position: 'absolute',
        top: item.y,
        left: item.x,
        opacity: isDragging ? 0.5 : 1,
        zIndex: isSelected ? 10 : 1,
      }}
      onClick={e => {
        e.stopPropagation()
        onSelect()
      }}
      className="relative group"
    >
      <div
        ref={dragRef as any}
        className={`cursor-move transition-all duration-200 rounded-lg ${
          isSelected
            ? 'ring-2 ring-blue-500 ring-offset-2 shadow-xl'
            : 'hover:ring-2 hover:ring-blue-300 hover:ring-offset-1 shadow-sm hover:shadow-md'
        } ${isParking ? (isOccupied ? 'bg-red-200' : 'bg-green-200') : ''}`}
        style={{
          width: dimensions.width,
          height: dimensions.height,
          transform: `rotate(${item.rotation || 0}deg)`,
          transformOrigin: 'center',
        }}
      >
        <RenderElements item={item} isSelected={isSelected} />
      </div>

      {isSelected && (
        <div
          className="absolute -top-12 left-0 flex gap-1 bg-white rounded-lg shadow-lg p-1 border"
          style={{
            transform: `scale(${Math.min(1, 1 / scale)})`,
            transformOrigin: 'top left',
          }}
        >
          <button
            onClick={e => {
              e.stopPropagation()
              onDuplicate()
            }}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            title="Duplicate"
          >
            <Copy size={14} />
          </button>
          {ROTATABLE_ELEMENTS.includes(item.type) && (
            <button
              onClick={e => {
                e.stopPropagation()
                onRotate()
              }}
              className="p-2 hover:bg-yellow-100 rounded-md text-yellow-600 transition-colors"
              title="Rotate"
            >
              ⟳
            </button>
          )}
          <button
            onClick={e => {
              e.stopPropagation()
              onRemove()
            }}
            className="p-2 hover:bg-red-100 rounded-md text-red-600 transition-colors"
            title="Delete"
          >
            <Trash2 size={14} />
          </button>
        </div>
      )}

      {isParking && isOccupied && (
        <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
          <Car size={10} />
        </div>
      )}
    </div>
  )
}

export default DraggableItem
