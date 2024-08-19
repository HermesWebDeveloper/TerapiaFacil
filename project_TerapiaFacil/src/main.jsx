import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import System from './pages/System';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/system" element={<System />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);