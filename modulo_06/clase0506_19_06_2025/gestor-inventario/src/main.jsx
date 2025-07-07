import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import InventoryManager from './InventoryManager.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InventoryManager />
  </StrictMode>,
)
