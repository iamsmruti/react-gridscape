import { GRID_SIZE } from './constants'
import { type LayoutElement, type ElementType } from '../types'

export const snapToGrid = (x: number, y: number) => {
  const snappedX = Math.round(x / GRID_SIZE) * GRID_SIZE
  const snappedY = Math.round(y / GRID_SIZE) * GRID_SIZE
  return [snappedX, snappedY]
}

export const getElementDimensions = (type: ElementType) => {
  switch (type) {
    case 'parking-horizontal':
      return { width: GRID_SIZE * 2, height: GRID_SIZE }
    case 'parking-vertical':
      return { width: GRID_SIZE, height: GRID_SIZE * 2 }
    default:
      return { width: GRID_SIZE, height: GRID_SIZE }
  }
}

export const checkOverlap = (
  newItem: LayoutElement,
  existingItems: LayoutElement[],
  excludeId?: string
) => {
  const newDims = getElementDimensions(newItem.type)
  return existingItems.some(existing => {
    if (existing.id === excludeId) return false
    const existingDims = getElementDimensions(existing.type)
    return !(
      newItem.x >= existing.x + existingDims.width ||
      existing.x >= newItem.x + newDims.width ||
      newItem.y >= existing.y + existingDims.height ||
      existing.y >= newItem.y + newDims.height
    )
  })
}

export const generateCustomId = (type: ElementType, existingIds: string[]) => {
  const prefix = type.includes('parking') ? 'P' : type.includes('road') ? 'R' : 'E'
  let counter = 1
  let newId = `${prefix}${counter}`

  while (existingIds.includes(newId)) {
    counter++
    newId = `${prefix}${counter}`
  }

  return newId
}
