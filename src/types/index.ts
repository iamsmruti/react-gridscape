import type { TOOL_ITEM_TYPES } from '../utils/constants'

export type CarType = 'sedan' | 'suv' | 'truck' | 'compact' | 'motorcycle'
export type ElementType = (typeof TOOL_ITEM_TYPES)[keyof typeof TOOL_ITEM_TYPES]

export interface ParkingSpotInfo {
  occupied: boolean
  carType?: CarType
  licensePlate?: string
  timeParked?: string
  notes?: string
}

export interface LayoutElement {
  id: string
  type: ElementType
  x: number
  y: number
  rotation?: number
  spotInfo?: ParkingSpotInfo
  customId?: string
}

export interface LayoutData {
  elements: LayoutElement[]
  metadata: {
    createdAt: string
    updatedAt: string
    gridSize: number
    name?: string
  }
}
