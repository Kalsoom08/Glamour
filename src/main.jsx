import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store.js'
import { AuthProvider } from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
 
    <AuthProvider>

    <Provider store={store}>
    <BrowserRouter>
       <App />
   </BrowserRouter>
    </Provider>
    </AuthProvider>

 
)
