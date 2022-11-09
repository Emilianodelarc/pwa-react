import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Start from "./view/Start";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
      </Routes>
    </Router>
  );
}

export default App;
