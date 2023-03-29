import './init'
import { useContext } from 'react'
import { ThemeProvider, Theme } from '@mui/material'
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
  getTheme: () => Theme
  assets?: AssetsType
}

export function App({ Div, getTheme, assets }: Props) {
  const { setImages } = useContext(AssetsContext)

  assets && setImages(assets)

  const type = Div.getAttribute('data-type') || ''
  const size = Div.getAttribute('data-size') || ''

  return (
    <ThemeProvider theme={getTheme()}>
      {type === 'avatar' && <AvatarComponent size={Number(size)} />}
      {type === 'points' && <PointsComponent />}
      {type === 'reward-shop' && (
        <RewardShopProvider>
          <RewardShopComponent />
        </RewardShopProvider>
      )}
    </ThemeProvider>
  )
}
