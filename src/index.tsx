import './init'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { AvatarComponent } from './avatar.component'
import { PointsComponent } from './points.component'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

// Find all widget divs
const WidgetDivs = document.querySelectorAll('.json_widget')

// Inject our React App into each
WidgetDivs.forEach((Div) => {
  const type = Div.getAttribute('data-type') || ''
  const json = Div.getAttribute('data-json') || ''
  const info = JSON.parse(json)
  ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {type === 'avatar' && <AvatarComponent size={info.size} />}
        {type === 'points' && <PointsComponent />}
      </ThemeProvider>
    </React.StrictMode>,
    Div,
  )
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

const EmbeddableWidget = (props: any) => {
  console.log(props)

  WidgetDivs.forEach((Div) => {
    const type = Div.getAttribute('data-type') || ''
    const json = Div.getAttribute('data-json') || ''
    const info = JSON.parse(json)
    ReactDOM.render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {type === 'avatar' && <AvatarComponent size={info.size} />}
          {type === 'points' && <PointsComponent />}
        </ThemeProvider>
      </React.StrictMode>,
      Div,
    )
  })
}

export default EmbeddableWidget
