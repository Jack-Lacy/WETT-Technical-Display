import React, {useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import TechEx from "./pages/TechEx";
import DAQ from "./pages/DAQ";

function App() {
  return (
          <Routes>
              <Route path="/" element={<TechEx/>} />
              <Route path="/DAQ" element={<DAQ/>} />
          </Routes>
  );
}

export default App;
