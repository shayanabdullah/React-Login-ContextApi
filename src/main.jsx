import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginContextProvider from './Provider/LoginContextProvider.jsx'

createRoot(document.getElementById('root')).render(
<LoginContextProvider>
      <App />
</LoginContextProvider>

)
