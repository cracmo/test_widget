import React, { useState } from 'react'
import { RewardShopContext } from './reward-shop.context'

export type CartType = {
  id: number
  quantity: number
}

export const RewardShopProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [cart, setCart] = useState<CartType[]>([])

  return (
    <RewardShopContext.Provider value={{ cart, setCart }}>
      {children}
    </RewardShopContext.Provider>
  )
}
