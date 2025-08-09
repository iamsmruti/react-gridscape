import { useState, useEffect } from 'react'
import { Edit3, Check } from 'lucide-react'
import { type LayoutElement } from '../types'

export const PropertiesPanel = ({
  element,
  onUpdateElement,
  allCustomIds,
}: {
  element: LayoutElement | null
  onUpdateElement: (id: string, updates: Partial<LayoutElement>) => void
  allCustomIds: string[]
}) => {
  const [editingCustomId, setEditingCustomId] = useState(false)
  const [tempCustomId, setTempCustomId] = useState('')

  useEffect(() => {
    if (element) {
      setTempCustomId(element.customId || '')
    }
  }, [element])

  const handleCustomIdSave = () => {
    if (!element || !tempCustomId.trim()) return

    // Check for duplicates
    if (allCustomIds.includes(tempCustomId) && tempCustomId !== element.customId) {
      alert('This ID already exists. Please choose a unique identifier.')
      return
    }

    onUpdateElement(element.id, { customId: tempCustomId.trim() })
    setEditingCustomId(false)
  }

  const handleOccupancyToggle = () => {
    if (!element || !element.spotInfo) return

    onUpdateElement(element.id, {
      spotInfo: { ...element.spotInfo, occupied: !element.spotInfo.occupied },
    })
  }

  if (!element) {
    return (
      <div className="h-full bg-white shadow-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Properties</h3>
        </div>
        <div className="text-center text-gray-500 py-8">
          Select an element to view its properties
        </div>
      </div>
    )
  }

  const isParking = element.type.includes('parking')

  return (
    <div className="w-full bg-white shadow-lg">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-gray-900">Properties</h3>
        </div>

        <div className="space-y-6">
          {/* Element Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Element Type</label>
            <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900">
              {element.type.replace('-', ' ').toUpperCase()}
            </div>
          </div>

          {/* Custom ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Custom Identifier
            </label>
            {editingCustomId ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tempCustomId}
                  onChange={e => setTempCustomId(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter unique ID (e.g., P1, R2)"
                  onKeyDown={e => e.key === 'Enter' && handleCustomIdSave()}
                />
                <button
                  onClick={handleCustomIdSave}
                  className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Check size={16} />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                <span className="text-sm text-gray-900 font-mono">
                  {element.customId || 'Not set'}
                </span>
                <button
                  onClick={() => setEditingCustomId(true)}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Edit3 size={14} />
                </button>
              </div>
            )}
          </div>

          {/* Position */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
            <div className="grid grid-cols-2 gap-2">
              <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900">
                X: {element.x}px
              </div>
              <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900">
                Y: {element.y}px
              </div>
            </div>
          </div>

          {/* Parking Specific Properties */}
          {isParking && element.spotInfo && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Occupancy Status
                </label>
                <button
                  onClick={handleOccupancyToggle}
                  className={`w-full px-4 py-3 rounded-lg font-medium transition-colors ${
                    element.spotInfo.occupied
                      ? 'bg-red-100 text-red-800 border border-red-200'
                      : 'bg-green-100 text-green-800 border border-green-200'
                  }`}
                >
                  {element.spotInfo.occupied ? 'OCCUPIED' : 'AVAILABLE'}
                </button>
              </div>

              {element.spotInfo.occupied && (
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <h4 className="font-medium text-orange-800 mb-2">Vehicle Information</h4>
                  <p className="text-sm text-orange-700">
                    Configure vehicle details via JSON editor for advanced management.
                  </p>
                </div>
              )}
            </>
          )}

          {/* Rotation */}
          {element.rotation !== undefined && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Rotation</label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900">
                {element.rotation}°
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
