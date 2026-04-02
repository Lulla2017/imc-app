import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from '../Router.jsx'
import '../style/index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router/>
  </StrictMode>,
)
