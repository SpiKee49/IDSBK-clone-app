import './index.css';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import App from './App.tsx';
import Homepage from './pages/Homepage.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
