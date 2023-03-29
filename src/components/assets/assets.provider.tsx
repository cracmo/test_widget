import React, { useState } from 'react'
import { AssetsContext } from './assets.context'

export const AssetsProvider = ({ children }: { children: React.ReactNode }) => {
  const [images, setImages] = useState<{ [x: string]: string }>({})

  console.log('images: ', images)

  return (
    <AssetsContext.Provider value={{ images, setImages }}>
      {children}
    </AssetsContext.Provider>
  )
}