import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  </BrowserRouter>
    
  </React.StrictMode>,
)
