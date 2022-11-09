import React from "react";
function Menu() {
  return (
    <>
      <nav className='navigation' role="navigation">
        <div id="menuToggle">
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
            <a href="https://erikterwan.com/" target="_blank">
              <li>Show me more</li>
            </a>
          </ul>
        </div>
        <div className="logo">
        <i className="fas fa-heartbeat coraz"></i>
        <p>My Medical History</p>
        </div>
      </nav>
    </>
  );
}

export default Menu;
