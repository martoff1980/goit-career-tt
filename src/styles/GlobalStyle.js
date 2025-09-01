import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body { margin: 0; font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif; color: #111; background: #fafafa; }
  a { color: inherit; text-decoration: none; }
  button { cursor: pointer; }
`
