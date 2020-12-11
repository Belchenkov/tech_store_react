import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg"

export default function Header() {
  return (
      <header className="header">
        <img
            src={logo}
            alt="Vintage Tech Logo"
            className="logo"
        />
        <nav>
          <ul>
            <div>
              <li>
                <Link to="/">
                  <i className="fas fa-home mr-3" />
                  Home
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link to="/about">
                  <i className="fas fa-question-circle mr-3" />
                  About
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link to="/products">
                  <i className="fas fa-gifts mr-3" />
                  Products
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link to="/login">
                  <i className="fas fa-sign-in-alt mr-3" />
                  Login
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link to="/cart">
                  <i className="fas fa-shopping-cart mr-3" />
                  Cart
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </header>
  );
}
