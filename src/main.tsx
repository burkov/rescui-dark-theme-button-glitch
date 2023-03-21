import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import 'reset-css'
import {ThemeProvider} from "@rescui/ui-contexts";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme='dark'>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
)
