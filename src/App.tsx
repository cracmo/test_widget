import { useContext, useEffect } from 'react'
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
  callbacks?: {
    reward_shop?: {
      next_btn?: (props: any) => void
    }
  }
}

export function App({ Div, assets, callbacks }: Props) {
  const { setImages } = useContext(AssetsContext)

  const type = Div.getAttribute('data-type') || ''
  const size = Div.getAttribute('data-size') || ''

  useEffect(() => {
    assets && setImages(assets)
  }, [assets]) // eslint-disable-line

  return (
    <>
      {type === 'avatar' && <AvatarComponent size={Number(size)} />}
      {type === 'points' && <PointsComponent />}
      {type === 'reward-shop' && (
        <RewardShopProvider>
          <RewardShopComponent callbacks={callbacks?.reward_shop} />
        </RewardShopProvider>
      )}
    </>
  )
}
