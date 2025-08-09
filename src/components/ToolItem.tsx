import { useDrag } from 'react-dnd'
import { getElementDimensions } from '../utils/helpers'
import RenderElements from './RenderElements'

const ToolItem = ({ type }: { type: any }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'tool',
    item: { type },
    collect: monitor => ({ isDragging: monitor.isDragging() }),
  })

  const dims = getElementDimensions(type)

  return (
    <div className="flex flex-col items-center">
      <div
        ref={dragRef as any}
        className={`shadow-sm hover:shadow-md cursor-grab select-none transition-all duration-200 ${
          isDragging
            ? 'opacity-50 border-blue-400 scale-105'
            : 'border-gray-200 hover:border-blue-300'
        }`}
      >
        <div className="relative" style={{ width: dims.width * 0.6, height: dims.height * 0.6 }}>
          <RenderElements item={{ id: 'preview', type, x: 0, y: 0 }} isSelected={false} />
        </div>
      </div>
    </div>
  )
}

export default ToolItem
