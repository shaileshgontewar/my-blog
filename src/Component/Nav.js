import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [data, setData] = useState({ show: false });
  const toggle = () => {
    data.show ? setData({ show: false }) : setData({ show: true });
  };

  return (
    <div className="nav">
      <div className="desktop__nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/bollywood">Bollywood</NavLink>
          </li>
          <li>
            <NavLink to="/technology">Technology</NavLink>
          </li>
          <li>
            <NavLink to="/hollywood">Hollywood</NavLink>
          </li>
          <li>
            <NavLink to="/fitness">Fitness</NavLink>
          </li>
          <li>
            <NavLink to="/food">Food</NavLink>
          </li>
        </ul>
      </div>
      <div className="mobile__nav">
        {data.show && (
          <div className="nav">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/bollywood">Bollywood</NavLink>
              </li>
              <li>
                <NavLink to="/technology">Technology</NavLink>
              </li>
              <li>
                <NavLink to="/hollywood">Hollywood</NavLink>
              </li>
              <li>
                <NavLink to="/fitness">Fitness</NavLink>
              </li>
              <li>
                <NavLink to="/food">Food</NavLink>
              </li>
            </ul>
          </div>
        )}
        <button className="toogle__button" onClick={() => toggle()}>
          <i className="icon fa-solid fa-2x fa-bars"></i>
        </button>
      </div>
    </div>
  );
};

export default Nav;
