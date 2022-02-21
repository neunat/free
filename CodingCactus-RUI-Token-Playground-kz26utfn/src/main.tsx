import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './rui/global';
import { ThemeSwitcher } from './rui/themes';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
