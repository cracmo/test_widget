import { useContext } from 'react'
import {
  AssetsContext,
  AssetsType,
  AvatarComponent,
  PointsComponent,
  RewardShopComponent,
  RewardShopProvider,
} from './components'

type Props = {
  Div: Element
  assets?: AssetsType
}

export function App({ Div, assets }: Props) {
  const { setImages } = useContext(AssetsContext)

  assets && setImages(assets)

  const type = Div.getAttribute('data-type') || ''
  const size = Div.getAttribute('data-size') || ''

  return (
    <>
      {type === 'avatar' && <AvatarComponent size={Number(size)} />}
      {type === 'points' && <PointsComponent />}
      {type === 'reward-shop' && (
        <RewardShopProvider>
          <RewardShopComponent />
        </RewardShopProvider>
      )}
    </>
  )
}
