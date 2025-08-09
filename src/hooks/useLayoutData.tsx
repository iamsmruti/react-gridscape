import { useState } from 'react'
import { LayoutData, ElementType, LayoutElement } from '../types'
import { GRID_SIZE } from '../utils/constants'
import { generateCustomId, checkOverlap, getElementDimensions } from '../utils/helpers'

export const useLayoutData = () => {
  const [layoutData, setLayoutData] = useState<LayoutData>({
    elements: [],
    metadata: {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      gridSize: GRID_SIZE,
    },
  })

  const addElement = (type: ElementType, x: number, y: number) => {
    const existingCustomIds = layoutData.elements.map(e => e.customId).filter(Boolean) as string[]
    const customId = generateCustomId(type, existingCustomIds)

    const newElement: LayoutElement = {
      id: `${type}-${Date.now()}`,
      type,
      x,
      y,
      customId,
      spotInfo: type.includes('parking') ? { occupied: false } : undefined,
    }

    if (!checkOverlap(newElement, layoutData.elements)) {
      setLayoutData(prev => ({
        ...prev,
        elements: [...prev.elements, newElement],
      }))
    }
  }

  const moveElement = (id: string, x: number, y: number) => {
    setLayoutData(prev => {
      const element = prev.elements.find(e => e.id === id)
      if (!element) return prev
      const moved = { ...element, x, y }
      if (!checkOverlap(moved, prev.elements, id)) {
        return { ...prev, elements: prev.elements.map(e => (e.id === id ? moved : e)) }
      }
      return prev
    })
  }

  const updateElement = (id: string, updates: Partial<LayoutElement>) => {
    setLayoutData(prev => ({
      ...prev,
      elements: prev.elements.map(e => (e.id === id ? { ...e, ...updates } : e)),
    }))
  }

  const removeElement = (id: string) => {
    setLayoutData(prev => ({
      ...prev,
      elements: prev.elements.filter(e => e.id !== id),
    }))
  }

  return {
    layoutData,
    setLayoutData,
    addElement,
    moveElement,
    updateElement,
    removeElement,
  }
}
