import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;

  }

  body {
    background-color: ${(props) => props.theme['--gray-600']};
    color: ${(props) => props.theme['--gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  input{
    border: 0px;
  
  }

  button{
    cursor: pointer;
  }

  body, input, textarea, button {
    font: 400 1rem Inter, sans-serif;
  }
`
