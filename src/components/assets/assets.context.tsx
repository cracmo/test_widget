import { createContext } from 'react'

export type AssetsType = {
  reward_shop_image?: string
  avatar_image?: string
}

interface AssetsContextProps {
  images: AssetsType
  setImages: (images: AssetsType) => void
}

export const AssetsContext = createContext<AssetsContextProps>({
  images: {},
  setImages: () => {},
})
