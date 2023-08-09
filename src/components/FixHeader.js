import React from "react";
import { NavLink, Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";
import { HiOutlineBars3BottomRight } from 'react-icons/hi2'
import { useState } from "react";
export default function FixHeader() {
  const [o, setO] = useState(false)
  return (
    <div className="fix_header">
      <HiOutlineBars3BottomRight className="bars" onClick={() => setO(!o)} />
      <div className="fix_header_content" style={{ clipPath: o ? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' : 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}>
        <ul>
          <NavLink to="/">
            <li onClick={() => setO(false)}>Home</li>
          </NavLink>
          <NavLink to="/Service">
            <li onClick={() => setO(false)}>Service</li>
          </NavLink>
          <NavLink to="/Shop">
            <li onClick={() => setO(false)}>Shop</li>
          </NavLink>
          <NavLink to="/Queuing">
            <li onClick={() => setO(false)}>Queuing</li>
          </NavLink>
          <NavLink to="/Contacts">
            <li onClick={() => setO(false)}>Contacts</li>
          </NavLink>
        </ul>
        <div className="icons">
          <span>+195 016 5895</span>
          <Link to='/Cart' onClick={() => setO(false)}>
            <HiShoppingCart />
          </Link>
        </div>
      </div>
    </div>
  );
}
