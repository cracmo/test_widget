import './init'
import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import i18next from 'i18next'
import {
  createTheme,
  CssBaseline,
  PaletteOptions,
  PaletteMode,
  ThemeProvider,
} from '@mui/material'
import { AssetsProvider, AssetsType } from './components'
import { App } from './App'
import './i18n.ts'

export type ConfigProps = {
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
  assets?: AssetsType
  callbacks?: {
    reward_shop?: {
      next_btn?: (props: any) => void
    }
  }
}

const palette = {
  mode: 'light' as PaletteMode,
}

const WidgetDivs = document.querySelectorAll('.gamification_widget')

function GamificationWidgets() {
  const config = ({
    init,
    lookAndFeel,
    translations,
    assets,
    callbacks,
  }: ConfigProps) => {
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

        root.render(
          <React.StrictMode>
            <ThemeProvider theme={getTheme()}>
              <CssBaseline />
              <AssetsProvider>
                <App Div={Div} assets={assets} callbacks={callbacks} />
              </AssetsProvider>
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

  return { config }
}

export default GamificationWidgets()
