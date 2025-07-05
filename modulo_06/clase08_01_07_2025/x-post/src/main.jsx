import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AppProvider } from './context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider> 
      <h2 style={{ textAlign: 'center', margin: '20px 0', fontSize: '2.5rem', fontFamily: 'Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif' }}>Mi X-Post</h2>
      <App />
    </AppProvider>
  </React.StrictMode>,
)