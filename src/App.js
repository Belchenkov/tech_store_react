import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Error from "./pages/Error";

export default function App() {
  return (
      <Router>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
            <Route path="/products">
                <Products />
            </Route>
            <Route path="*">
                <Error />
            </Route>
        </Switch>
      </Router>
  );
}
