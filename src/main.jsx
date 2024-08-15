import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './MainRoot/Root.jsx'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      
      <Toaster></Toaster>
  </StrictMode>,
)
