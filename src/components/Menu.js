import React from "react";
import User from "./User";
import { useUserAuth } from "../context/AuthContext";
function Menu() {
  const {user} = useUserAuth()
  return (
    <>
      <nav className='navigation' role="navigation">
        {user && <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Info</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
            <User/>
          </ul>
        </div>}
        <div className="logo">
        <i className="fas fa-heartbeat coraz"></i>
        <p>My Medical History</p>
        </div>
      </nav>
    </>
  );
}

export default Menu;
