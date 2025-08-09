import { useState, useEffect, useRef, forwardRef } from 'react'
import { useDrop } from 'react-dnd'
import { ZoomIn, ZoomOut, RotateCcw, Move } from 'lucide-react'

import DraggableItem from './DraggableItem'
import { type LayoutElement, type ElementType } from '../types'
import { GRID_SIZE } from '../utils/constants'
import { snapToGrid } from '../utils/helpers'

const BuildingArea = forwardRef<
  HTMLDivElement,
  {
    elements: LayoutElement[]
    selectedItem: string | null
    hoverGrid: { x: number; y: number } | null
    onSelect: (id: string | null) => void
    onAddElement: (type: ElementType, x: number, y: number) => void
    onMoveElement: (id: string, x: number, y: number) => void
    onRemoveElement: (id: string) => void
    onDuplicateElement: (id: string) => void
    onRotateElement: (id: string) => void
    onHoverGrid: (pos: { x: number; y: number } | null) => void
  }
>(
  (
    {
      elements,
      selectedItem,
      hoverGrid,
      onSelect,
      onAddElement,
      onMoveElement,
      onRemoveElement,
      onDuplicateElement,
      onRotateElement,
      onHoverGrid,
    },
    ref
  ) => {
    const [scale, setScale] = useState(1)
    const [offset, setOffset] = useState({ x: 0, y: 0 })
    const [isPanning, setIsPanning] = useState(false)
    const [lastPan, setLastPan] = useState({ x: 0, y: 0 })
    const [panMode, setPanMode] = useState(false)
    const canvasRef = useRef<HTMLDivElement>(null)

    const [{ isOver, canDrop }, dropRef] = useDrop({
      accept: ['tool', 'placed'],
      drop: (item: any, monitor) => {
        const clientOffset = monitor.getClientOffset()
        const canvas = canvasRef.current
        if (!clientOffset || !canvas) return

        const canvasRect = canvas.getBoundingClientRect()
        const rawX = (clientOffset.x - canvasRect.left - offset.x) / scale
        const rawY = (clientOffset.y - canvasRect.top - offset.y) / scale
        const [x, y] = snapToGrid(rawX, rawY)

        if (item.type && !item.id) {
          onAddElement(item.type, x, y)
        } else if (item.id) {
          onMoveElement(item.id, x, y)
        }
      },
      hover: (item, monitor) => {
        const clientOffset = monitor.getClientOffset()
        const canvas = canvasRef.current
        if (!clientOffset || !canvas) return

        const canvasRect = canvas.getBoundingClientRect()
        const rawX = (clientOffset.x - canvasRect.left - offset.x) / scale
        const rawY = (clientOffset.y - canvasRect.top - offset.y) / scale
        const [x, y] = snapToGrid(rawX, rawY)
        onHoverGrid({ x, y })
      },
      collect: monitor => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    })

    const handleWheel = (e: React.WheelEvent) => {
      e.preventDefault()
      const delta = e.deltaY > 0 ? 0.9 : 1.1
      const newScale = Math.max(0.1, Math.min(3, scale * delta))

      if (newScale !== scale) {
        const canvas = canvasRef.current
        if (canvas) {
          const rect = canvas.getBoundingClientRect()
          const mouseX = e.clientX - rect.left
          const mouseY = e.clientY - rect.top

          const scaleDiff = newScale - scale
          setOffset(prev => ({
            x: prev.x - (mouseX - prev.x) * (scaleDiff / scale),
            y: prev.y - (mouseY - prev.y) * (scaleDiff / scale),
          }))
        }
        setScale(newScale)
      }
    }

    const handleMouseDown = (e: React.MouseEvent) => {
      if (
        panMode ||
        e.button === 1 ||
        (e.button === 0 && e.metaKey) ||
        (e.button === 0 && e.ctrlKey)
      ) {
        setIsPanning(true)
        setLastPan({ x: e.clientX, y: e.clientY })
        e.preventDefault()
      }
    }

    const handleMouseMove = (e: React.MouseEvent) => {
      if (isPanning) {
        const deltaX = e.clientX - lastPan.x
        const deltaY = e.clientY - lastPan.y
        setOffset(prev => ({
          x: prev.x + deltaX,
          y: prev.y + deltaY,
        }))
        setLastPan({ x: e.clientX, y: e.clientY })
      } else if (!isOver && !isPanning) {
        const canvas = canvasRef.current
        if (!canvas) return
        const rect = canvas.getBoundingClientRect()
        const x = (e.clientX - rect.left - offset.x) / scale
        const y = (e.clientY - rect.top - offset.y) / scale
        const [snappedX, snappedY] = snapToGrid(x, y)
        onHoverGrid({ x: snappedX, y: snappedY })
      }
    }

    const handleMouseUp = () => {
      setIsPanning(false)
    }

    const resetView = () => {
      setScale(1)
      setOffset({ x: 0, y: 0 })
    }

    const zoomIn = () => {
      setScale(prev => Math.min(3, prev * 1.2))
    }

    const zoomOut = () => {
      setScale(prev => Math.max(0.1, prev * 0.8))
    }

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Delete' || e.key === 'Backspace') {
          if (selectedItem) {
            onRemoveElement(selectedItem)
            onSelect(null)
          }
        }
        if (e.key === ' ') {
          e.preventDefault()
          setPanMode(true)
        }
      }

      const handleKeyUp = (e: KeyboardEvent) => {
        if (e.key === ' ') {
          setPanMode(false)
          setIsPanning(false)
        }
      }

      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)
      window.addEventListener('mouseup', handleMouseUp)

      return () => {
        window.removeEventListener('keydown', handleKeyDown)
        window.removeEventListener('keyup', handleKeyUp)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }, [selectedItem, onRemoveElement, onSelect])

    return (
      <div className="flex-1 relative bg-white border-r overflow-hidden">
        {/* Zoom Controls */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border p-2 z-20 flex flex-col gap-1">
          <button
            onClick={zoomIn}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            title="Zoom In"
          >
            <ZoomIn size={16} />
          </button>
          <button
            onClick={zoomOut}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            title="Zoom Out"
          >
            <ZoomOut size={16} />
          </button>
          <button
            onClick={resetView}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            title="Reset View"
          >
            <RotateCcw size={16} />
          </button>
          <button
            onClick={() => setPanMode(!panMode)}
            className={`p-2 rounded transition-colors ${panMode ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
            title="Toggle Pan Mode (Space)"
          >
            <Move size={16} />
          </button>
        </div>

        <div
          ref={canvasRef}
          className={`w-full h-full relative transition-all duration-200 ${
            isOver ? 'bg-blue-50' : 'bg-white'
          } ${panMode || isPanning ? 'cursor-grab' : 'cursor-default'}`}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            onHoverGrid(null)
            setIsPanning(false)
          }}
          onClick={e => {
            if (!isPanning && !panMode) {
              onSelect(null)
            }
          }}
        >
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm border text-xs font-mono text-gray-600 z-10">
            Grid: {GRID_SIZE}px • Elements: {elements.length} • Zoom: {Math.round(scale * 100)}%
          </div>

          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm border text-xs text-gray-600 z-10">
            <div className="flex items-center gap-2">
              <span>Controls:</span>
              <span className="font-mono bg-gray-100 px-1 rounded">Space</span>
              <span>Pan</span>
              <span className="font-mono bg-gray-100 px-1 rounded">Wheel</span>
              <span>Zoom</span>
            </div>
          </div>

          <div
            ref={dropRef as any}
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
              transformOrigin: '0 0',
              width: '100%',
              height: '100%',
              backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
              backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            }}
          >
            {elements.map(item => (
              <DraggableItem
                key={item.id}
                item={item}
                isSelected={selectedItem === item.id}
                onSelect={() => !panMode && onSelect(item.id)}
                onRemove={() => onRemoveElement(item.id)}
                onDuplicate={() => onDuplicateElement(item.id)}
                onRotate={() => onRotateElement(item.id)}
                scale={scale}
              />
            ))}

            {hoverGrid && (isOver || canDrop) && !isPanning && (
              <div
                className="absolute pointer-events-none border-2 border-blue-400 bg-blue-100/40 rounded-lg transition-all duration-150"
                style={{
                  top: hoverGrid.y,
                  left: hoverGrid.x,
                  width: GRID_SIZE,
                  height: GRID_SIZE,
                }}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
)

export default BuildingArea
