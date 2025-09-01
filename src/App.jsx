import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'
import AppRouter from './routes/AppRouter'
import Notifier from './components/Notifier'

export default function App(){
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRouter />
      <Notifier />
    </ThemeProvider>
  )
}
