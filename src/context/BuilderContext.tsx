import React, { createContext, useContext } from 'react'
import { useLayoutData } from '../hooks/useLayoutData'

const BuilderContext = createContext<ReturnType<typeof useLayoutData> | null>(null)

export const BuilderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const layoutDataApi = useLayoutData()
  return <BuilderContext.Provider value={layoutDataApi}>{children}</BuilderContext.Provider>
}

export const useBuilderData = () => {
  const ctx = useContext(BuilderContext)
  if (!ctx) throw new Error('useBuilderData must be used inside BuilderProvider')
  return ctx
}
