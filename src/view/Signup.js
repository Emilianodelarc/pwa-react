import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="background"></div>
      <div className="card">
        <div className="logoL">
          <i className="fas fa-heartbeat coraz"></i>
          <p>My Medical History</p>
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
        <form className="form" onSubmit={handleSubmit}>
          
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          

          
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          

          
            <button type="Submit">
              Sign up
            </button>
         
        </form>
        <footer>
          
          Already have an account? <Link to="/login">Log In</Link>
        
        </footer>
        
      </div>
        
    </>
  );
};

export default Signup;