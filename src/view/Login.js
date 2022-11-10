import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/AuthContext";
import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import logo from "../img/logo.png";
import Cargando from "../components/Cargando";

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, setUser } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setError("");
    try {
      await logIn(email, password);
      setLoading(false)
      navigate("/startet");
    } catch (err) {
      setError(err.message);
      setLoading(false)
    }
  };

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setLoading(true)
    signInWithPopup(auth, provider).then((res) => {
      setUser(res);
      setLoading(false)
      navigate("/startet");
    });
  };

  return (
    <>
      {loading ? <Cargando/> :<> <div className="background"></div>
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
          <button variant="primary" type="Submit">
            Log In
          </button>
        </form>

        <hr />
        <footer>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={signInWithGoogle}
          />
          <div className="p-4 box mt-3 text-center">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </footer>
      </div> </>}
    </>
  );
};

export default Login;
