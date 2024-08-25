import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import System from './pages/System';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Consultas from './pages/Consultas';
import Clientes from './pages/Clientes';
import VerCliente from './pages/VerCliente';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className='dark:bg-gray-800'>
        <Routes>
          <Route path="/system" element={<System />}></Route>
          <Route path="/consultas" element={<Consultas />}></Route>
          <Route path="/clientes/" element={<Clientes />}></Route>
          <Route path="/clientes/:id" element={<VerCliente />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>
);