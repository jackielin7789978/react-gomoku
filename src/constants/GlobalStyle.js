import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: 'NTR', sans-serif;
    font-family: 'Gemunu Libre', sans-serif;
  }
  body {
    background: #eee;
    height: 100vh;
    overflow: hidden;
  }
  #root {
    padding: 1px;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  button {
    border: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #222;
    &:hover {
      color: #222;
    }
    &:active {
      color: #222;
    }
  }
`

export default GlobalStyle
