import React from "react";
import "../styles/Navigation.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop">
        <Link to="/">Shopping Cart</Link>
        </span>
        <div className="cart">
          <span>
          <Link to="/cart">
            <button className="cart-button">My Cart</button>
          </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
