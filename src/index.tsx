import './init'
import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import i18next from 'i18next'
import {
  ThemeProvider,
  createTheme,
  PaletteOptions,
  PaletteMode,
} from '@mui/material'
import {
  AvatarComponent,
  PointsComponent,
  RewardShopComponent,
  RewardShopProvider,
} from './components'
import './i18n.ts'

const palette = {
  mode: 'light' as PaletteMode,
}

const WidgetDivs = document.querySelectorAll('.gamification_widget')

const EmbeddableWidget = () => {}

EmbeddableWidget.config = (props: {
  init: {
    serviceUrl: string
    clientId: string
    playerIdentityToken: string
    playerLocale: string
  }
  lookAndFeel?: {
    palette: PaletteOptions
  }
  translations?: {
    locale: string
    keys: {
      [x: string]: string
    }
  }[]
}) => {
  const { init, lookAndFeel, translations } = props

  function getTheme() {
    return createTheme({
      palette: lookAndFeel?.palette || palette,
    })
  }

  function render() {
    localStorage && localStorage.setItem('config', JSON.stringify(init))

    i18next.changeLanguage(init.playerLocale)

    if (translations) {
      translations.forEach((item) => {
        i18next.addResourceBundle(
          item.locale.toLowerCase(),
          'translation',
          item.keys,
          true,
          false,
        )
      })
    }

    WidgetDivs.forEach((Div) => {
      const root = ReactDOMClient.createRoot(Div)

      const type = Div.getAttribute('data-type') || ''
      const size = Div.getAttribute('data-size') || ''

      root.render(
        <React.StrictMode>
          <ThemeProvider theme={getTheme()}>
            {type === 'avatar' && <AvatarComponent size={Number(size)} />}
            {type === 'points' && <PointsComponent />}
            {type === 'reward-shop' && (
              <RewardShopProvider>
                <RewardShopComponent />
              </RewardShopProvider>
            )}
          </ThemeProvider>
        </React.StrictMode>,
      )
    })
  }

  if (document.readyState === 'complete') {
    render()
  } else {
    window.addEventListener('load', () => {
      render()
    })
  }
}

export default EmbeddableWidget
