import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App.tsx'
import Homepage from './pages/Homepage.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Tickets from './pages/Tickets.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Homepage />} />
                    <Route path="/tickets" element={<Tickets />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
