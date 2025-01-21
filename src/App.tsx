import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Toboggan from "./pages/Toboggan";
import Concrete from "./pages/Concrete";
import Mechanical from "./pages/Mechanical";

function App() {
  return (
          <Routes>
              <Route path="/" element={<Toboggan/>} />
              <Route path="/Concrete" element={<Concrete/>} />
              <Route path="/Mechanical" element={<Mechanical/>} />
          </Routes>
  );
}

export default App;
