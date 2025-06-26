import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ListaCompras from './ListaCompras'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListaCompras/>
  </StrictMode>,
)
