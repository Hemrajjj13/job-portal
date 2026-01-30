import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import AppRoutes from '../routes/AppRoutes'
import { AuthProvider } from '../context/AuthContext'

const App = () => {
  return (
    <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <AppRoutes />
        </AuthProvider>
    </BrowserRouter>
  )
}

export default App;