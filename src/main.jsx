import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './Pages/Home/Home.jsx';
import Question from './Pages/Questionaries/Question.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Questionaries" element={<Question />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);