import './index.css'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import App from './App.tsx'
import Homepage from './pages/Homepage.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import SearchPage from './pages/SearchPage.tsx'
import TicketSelect from './pages/TicketSelect.tsx'
import Tickets from './pages/Tickets.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Navigate to="/tickets" />} />
                    <Route path="tickets" element={<Homepage />} />
                    <Route path="tickets/select" element={<TicketSelect />} />
                    <Route path="tickets/buy" element={<Tickets />} />
                </Route>
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
