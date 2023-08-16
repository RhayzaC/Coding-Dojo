import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from "react-router-dom";

import StarWarsApi from './Components/index.components';
import personDetail from './Components/personDetail';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/resource">Explorador API</Link></li>
          </ul>
        </nav>

        <Routes>
        <Route path="/" element={<StarWarsApi />} />
        <Route path="/:id" element={<personDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

