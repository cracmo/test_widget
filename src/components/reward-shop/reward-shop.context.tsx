import { createContext } from 'react'
import { CartType } from './'

interface RewardShopContextProps {
  cart: CartType[]
  setCart: (cart: CartType[]) => void
}

export const RewardShopContext = createContext<RewardShopContextProps>({
  cart: [],
  setCart: () => {},
})
