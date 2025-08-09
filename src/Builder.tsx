import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import BuildingArea from './components/BuildingArea'
import ToolsArea from './components/ToolsArea'
import { PropertiesPanel } from './components/PropertiesPanel'
import JSONEditor from './components/JSONEditor'
import { useBuilderData } from './context/BuilderContext'

export default function Builder() {
  const { layoutData, setLayoutData, addElement, moveElement, updateElement, removeElement } =
    useBuilderData()

  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const [hoverGrid, setHoverGrid] = useState<{ x: number; y: number } | null>(null)
  const [tabState, setTabState] = useState(0)

  const selectedElement = selectedItem ? layoutData.elements.find(e => e.id === selectedItem) : null

  const duplicateElement = (id: string) => {
    const original = layoutData.elements.find(e => e.id === id)
    if (!original) return
    const newElement = {
      ...original,
      id: `${original.type}-${Date.now()}`,
      x: original.x + 20,
      y: original.y + 20,
    }
    setLayoutData(prev => ({ ...prev, elements: [...prev.elements, newElement] }))
  }

  const rotateElement = (id: string) => {
    setLayoutData(prev => ({
      ...prev,
      elements: prev.elements.map(e =>
        e.id === id ? { ...e, rotation: ((e.rotation || 0) + 90) % 360 } : e
      ),
    }))
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-full h-full flex flex-col bg-gradient-to-br from-slate-50 border to-blue-50">
        <div className="flex-1 flex overflow-hidden">
          <BuildingArea
            elements={layoutData.elements}
            selectedItem={selectedItem}
            hoverGrid={hoverGrid}
            onSelect={setSelectedItem}
            onAddElement={addElement}
            onMoveElement={moveElement}
            onRemoveElement={removeElement}
            onDuplicateElement={duplicateElement}
            onRotateElement={rotateElement}
            onHoverGrid={setHoverGrid}
          />

          <div className="w-84 h-full bg-white flex flex-col overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b">
              {['Tools', 'Properties', 'Editor'].map((label, idx) => (
                <button
                  key={label}
                  onClick={() => setTabState(idx)}
                  className={`flex-1 px-4 py-2 text-sm font-medium 
                    ${
                      tabState === idx
                        ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto">
              {tabState === 0 && <ToolsArea />}
              {tabState === 1 && (
                <PropertiesPanel
                  element={selectedElement as any}
                  onUpdateElement={updateElement}
                  allCustomIds={
                    layoutData.elements.map(e => e.customId).filter(Boolean) as string[]
                  }
                />
              )}
              {tabState === 2 && (
                <JSONEditor
                  value={JSON.stringify(layoutData, null, 2)}
                  onChange={val => setLayoutData(JSON.parse(val))}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  )
}
