import './init'
import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  PaletteOptions,
  PaletteMode,
} from '@mui/material'
import { AvatarComponent } from './avatar.component'
import { PointsComponent } from './points.component'
import { RewardShopComponent } from './reward-shop.component'

const palette = {
  mode: 'light' as PaletteMode,
}

// Find all widget divs
const WidgetDivs = document.querySelectorAll('.gamification_widget')

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

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
}) => {
  const { init, lookAndFeel } = props

  function getTheme() {
    return createTheme({
      palette: lookAndFeel?.palette || palette,
    })
  }

  function render() {
    localStorage && localStorage.setItem('config', JSON.stringify(init))

    WidgetDivs.forEach((Div) => {
      const root = ReactDOMClient.createRoot(Div)

      const type = Div.getAttribute('data-type') || ''
      const size = Div.getAttribute('data-size') || ''

      root.render(
        <React.StrictMode>
          <ThemeProvider theme={getTheme()}>
            <CssBaseline />
            {type === 'avatar' && <AvatarComponent size={Number(size)} />}
            {type === 'points' && <PointsComponent />}
            {type === 'reward-shop' && <RewardShopComponent />}
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
