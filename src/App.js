import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import './App.css'
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider} from "./context/AuthContext";
import Error from "./view/Error";
import Login from "./view/Login";
import Signup from "./view/Signup";
import Start from "./view/Start";
import Startet from "./view/Startet"

function App() {

  

  return (
    <UserAuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/startet" element={
            <ProtectedRoute>
              <Startet/>
            </ProtectedRoute>
          } />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </UserAuthContextProvider>
  );
}

export default App;
